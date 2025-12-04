import { motion } from "framer-motion";

const difficultyColor = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800"
};

export default function ProblemCard({ problem, onViewDetails }) {
  return (
    <motion.div
      className={
        "bg-white/10 backdrop-blur-xl rounded-2xl p-5 border-2 border-white/15 " +
        "hover:border-purple-400 transition-all hover:scale-[1.02] shadow-lg"
      }
      whileHover={{ y: -4 }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-white">#{problem.id}</h3>
        <span
          className={
            "px-3 py-1 rounded-full text-xs font-semibold " +
            (difficultyColor[problem.difficulty] ||
              "bg-gray-100 text-gray-800")
          }
        >
          {problem.difficulty}
        </span>
      </div>
      <h4 className="text-lg font-semibold text-white mb-2">
        {problem.title}
      </h4>
      <p className="text-white/80 text-sm mb-3">{problem.description}</p>
      <div className="flex flex-wrap gap-2 mb-3">
        {problem.tags.map((tag) => (
          <span
            key={tag}
            className="bg-purple-500/30 text-purple-100 px-3 py-1 rounded-full text-xs"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-end text-sm mt-2">
        <button
          onClick={onViewDetails}
          className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-1.5 rounded-lg font-semibold text-xs"
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
