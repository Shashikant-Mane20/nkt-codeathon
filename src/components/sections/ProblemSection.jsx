import { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import ProblemCard from "./ProblemCard";

export default function ProblemSection({ problems = [], onOpenProblem }) {
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const tabs = ["All", "Easy", "Medium", "Hard"];

  const filtered = problems.filter((p) =>
    difficultyFilter === "All" ? true : p.difficulty === difficultyFilter
  );

  return (
    <section id="problems" className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader
        title="Problem Statements"
        subtitle="Pick one real-world challenge and build something impactful."
      />

      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setDifficultyFilter(tab)}
            className={
              "px-4 py-1.5 rounded-full text-sm border " +
              (difficultyFilter === tab
                ? "bg-white text-purple-700 border-white"
                : "bg-white/5 text-white/70 border-white/20 hover:bg-white/10")
            }
          >
            {tab}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-white/70 text-sm">
          No problem statements available. Add some from the Admin page.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              onViewDetails={() => onOpenProblem(problem)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
