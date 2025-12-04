import { motion } from "framer-motion";
import { Clock, Users, Trophy } from "lucide-react";
import GradientButton from "../ui/GradientButton";
import GlowOrb from "../ui/GlowOrb";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center">
      <GlowOrb className="w-72 h-72 -top-10 -left-10" />
      <GlowOrb className="w-80 h-80 bottom-[-4rem] right-0 bg-blue-500" />

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            NKT Tech Fest
            <span className="block mt-2">Codeathon 2025</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-white/80 max-w-xl"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            6 hours. 10 real-world problem statements. Limited seats. Build
            solutions that can actually be deployed on campus.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-wrap gap-4 text-sm text-white/80"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Clock className="w-4 h-4" />
              <span>6 Hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              <span>20 Participants</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Trophy className="w-4 h-4" />
              <span>10 Problem Statements</span>
            </div>
          </motion.div>

          <div className="mt-8 flex gap-4">
            <GradientButton
              onClick={() =>
                document
                  .getElementById("problems")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Choose Problem & Register 🚀
            </GradientButton>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-6 py-3 rounded-xl border border-white/30 text-white/80 hover:bg-white/10 transition-all"
            >
              Event Details
            </button>
          </div>
        </div>

        <motion.div
          className="hidden md:flex flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20">
            <p className="text-sm text-purple-200">Why join?</p>
            <p className="mt-2 text-white/90 text-lg">
              Work on campus-level problems, mentored by faculties & seniors.
              Top teams get exposure, prizes, and implementation chances.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-4 rounded-xl text-center border border-purple-400/40">
              <p className="text-3xl font-bold">₹</p>
              <p className="text-sm text-white/70 mt-1">Exciting Cash Prizes</p>
            </div>
            <div className="bg-white/10 p-4 rounded-xl text-center border border-blue-400/40">
              <p className="text-2xl font-bold">Certificate</p>
              <p className="text-xs text-white/70 mt-1">
                For All Participants
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
