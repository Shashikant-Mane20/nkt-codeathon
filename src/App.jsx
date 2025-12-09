import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import StatsStrip from "./components/sections/StatsStrip";
import AboutSection from "./components/sections/AboutSection";
import ProblemSection from "./components/sections/ProblemSection";
// import TimelineSection from "./components/sections/TimelineSection";
// import PrizesSection from "./components/sections/PrizesSection";
import RulesSection from "./components/sections/RulesSection";
import FAQSection from "./components/sections/FAQSection";
import SponsorsSection from "./components/sections/SponsorsSection";
import ProblemModal from "./components/modals/ProblemModal";
import AdminDashboard from "./components/sections/AdminDashboard";

import festLogo from "../src/assets/techfestlogo.png";
// Prefer env, but fall back to localhost in dev
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://codeathon-backend.onrender.com";

const mapLevelToDifficulty = (level) => {
  if (!level) return "Medium";
  const l = level.toLowerCase();
  if (l.includes("easy") || l.includes("beginner")) return "Easy";
  if (l.includes("hard") || l.includes("advanced")) return "Hard";
  return "Medium";
};

function App() {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const fetchProblems = async () => {
    try {
      console.log("API_BASE_URL =>", API_BASE_URL);
      const url = `${API_BASE_URL}/api/problems`;
      console.log("Fetching from:", url);

      const res = await fetch(url);
      console.log("Status:", res.status);
      const contentType = res.headers.get("content-type") || "";
      console.log("Content-Type:", contentType);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      if (!contentType.includes("application/json")) {
        const text = await res.text();
        console.error("Non-JSON response (showing first part):", text.slice(0, 200));
        throw new Error("Backend is not returning JSON. Check API route/URL.");
      }

      const data = await res.json();
      console.log("Raw data from API:", data);

      const mapped = (Array.isArray(data) ? data : []).map((p, index) => ({
        id: p.code || index + 1,
        title: p.title,
        description:
          p.shortDescription ||
          p.problemStatement ||
          "No description provided.",
        difficulty: mapLevelToDifficulty(p.level),
        tags:
          (Array.isArray(p.tags) && p.tags.length > 0
            ? p.tags
            : p.track
            ? [p.track]
            : []) || [],
        full: p
      }));

      console.log("Mapped problems:", mapped);
      setProblems(mapped);
    } catch (err) {
      console.error("Error fetching problems:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const handleOpenProblem = (problem) => {
    setSelectedProblem(problem);
  };

  const handleCloseModal = () => {
    setSelectedProblem(null);
  };

  if (loading) {
    return (
      // <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      //   <p className="text-white text-xl">Loading...</p>
      //    <img
      //                 src={festLogo}
      //                 alt="NKT Tech Fest Logo"
      //                 className="w-9 h-9 rounded-full object-contain "
      //               />
      // </div>

     <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center gap-4">
      <img
        src={festLogo}
        alt="NKT Tech Fest Logo"
        className="w-24 h-24 rounded-full object-contain animate-pulse drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]"
      />
      <p className="text-white text-xl tracking-wide animate-pulse">
        Loading...
      </p>
    </div>

    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <StatsStrip totalProblems={problems.length} />
                <AboutSection />
                <ProblemSection
                  problems={problems}
                  onOpenProblem={handleOpenProblem}
                />
                {/* <TimelineSection /> */}
                {/* <PrizesSection /> */}
                <RulesSection />
                {/* <FAQSection /> */}
                <SponsorsSection />
              </>
            }
          />
          <Route
            path="/admin"
            element={
              <AdminDashboard
                apiBaseUrl={API_BASE_URL}
                onDataChange={fetchProblems}
              />
            }
          />
        </Routes>
      </div>
      <Footer />

      <ProblemModal
        open={!!selectedProblem}
        problem={selectedProblem}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;

