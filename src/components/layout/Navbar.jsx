import { useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link,NavLink,useLocation} from "react-router-dom";
import GradientButton from "../ui/GradientButton";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isAdminRoute = location.pathname === "/admin";

  const navLinkClass = ({ isActive }) =>
    "hover:text-white transition " +
    (isActive ? "text-white font-semibold" : "text-white/70");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <div className="sticky top-0 z-40 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Code className="w-7 h-7 text-purple-400" />
          <Link to="/" onClick={closeMobile}>
            <div>
              <p className="font-bold tracking-wide text-white">
                NKT Tech Fest
              </p>
              <p className="text-xs text-white/60 -mt-1">Codeathon 2025</p>
            </div>
          </Link>
        </motion.div>

        {/* Desktop nav (only on public route) */}
        {!isAdminRoute && (
          <div className="hidden md:flex gap-6 text-sm">
            <button
              onClick={() => scrollTo("about")}
              className="hover:text-white text-white/70"
            >
              About
            </button>
            <button
              onClick={() => scrollTo("problems")}
              className="hover:text-white text-white/70"
            >
              Problem Statements
            </button>
            <button
              onClick={() => scrollTo("timeline")}
              className="hover:text-white text-white/70"
            >
              Timeline
            </button>
            <button
              onClick={() => scrollTo("prizes")}
              className="hover:text-white text-white/70"
            >
              Prizes
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-white text-white/70"
            >
              FAQ
            </button>
          </div>
        )}

        {/* Right side buttons */}
        <div className="flex items-center gap-3">
          {!isAdminRoute && (
            <GradientButton
              onClick={() => scrollTo("problems")}
              className="text-sm hidden md:inline-flex"
            >
              View Problems
            </GradientButton>
          )}

          <NavLink
            to={isAdminRoute ? "/" : "/admin"}
            className={navLinkClass}
            onClick={closeMobile}
          >
            {isAdminRoute ? "Back to Site" : "Admin"}
          </NavLink>

          {/* Mobile menu button */}
          {!isAdminRoute && (
            <button
              className="md:hidden p-2 rounded-lg border border-white/20 text-white/80"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown (only on public route) */}
      {!isAdminRoute && mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <button
              onClick={() => {
                scrollTo("about");
                closeMobile();
              }}
              className="text-white/80 text-left"
            >
              About
            </button>
            <button
              onClick={() => {
                scrollTo("problems");
                closeMobile();
              }}
              className="text-white/80 text-left"
            >
              Problem Statements
            </button>
            <button
              onClick={() => {
                scrollTo("timeline");
                closeMobile();
              }}
              className="text-white/80 text-left"
            >
              Timeline
            </button>
            <button
              onClick={() => {
                scrollTo("prizes");
                closeMobile();
              }}
              className="text-white/80 text-left"
            >
              Prizes
            </button>
            <button
              onClick={() => {
                scrollTo("faq");
                closeMobile();
              }}
              className="text-white/80 text-left"
            >
              FAQ
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
