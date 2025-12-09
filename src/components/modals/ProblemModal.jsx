import { motion } from "framer-motion";

function Row({ label, value }) {
  if (!value) return null;
  return (
    <tr className="border-b border-white/10">
      <td className="bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 w-32 md:w-40">
        {label}
      </td>
      <td className="px-3 py-2 text-xs md:text-sm text-white/80 whitespace-pre-wrap">
        {value}
      </td>
    </tr>
  );
}

function Section({ title, text, code }) {
  if (!text) return null;
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-white mb-1">{title}</h4>
      <div
        className={
          "bg-black/30 border border-white/20 rounded-xl px-3 py-2 text-xs md:text-sm text-white/80 whitespace-pre-wrap " +
          (code ? "font-mono" : "")
        }
      >
        {text}
      </div>
    </div>
  );
}

export default function ProblemModal({ open, problem, onClose }) {
  if (!open || !problem) return null;
  const p = problem.full || {};

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <motion.div

      
        className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 w-full max-w-3xl border border-purple-400/50 shadow-xl max-h-[90vh] overflow-y-auto"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <div className="flex justify-between items-start gap-4 mb-3">
          <div>
            <p className="text-xs text-purple-200 mb-1">
              Problem #{problem.id} {p.track ? `• ${p.track}` : ""}
            </p>
            <h3 className="text-2xl font-bold text-white">{problem.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-xl border border-white/40 text-white/80 text-xs hover:bg-white/10"
          >
            Close
          </button>
        </div>

        <p className="text-white/80 text-sm mb-4">
          {problem.description}
        </p>

        <div className="rounded-2xl border border-white/20 overflow-hidden mb-5">
          <table className="w-full text-left text-xs md:text-sm">
            <tbody>
              <Row label="Code" value={p.code} />
              <Row label="Category" value={p.track} />
              <Row label="Level" value={p.level} />
              {/* <Row label="Tags" value={problem.tags.join(", ")} /> */}
              <Row
                label="Evaluation Criteria"
                value={
                  p.evaluationCriteria ||
                  "Details will be explained during problem briefing."
                }
              />
            </tbody>
          </table>
        </div>

        <Section title="Problem Statement" text={p.problemStatement} />
        {/* <Section title="Input Format" text={p.inputFormat} />
        <Section title="Output Format" text={p.outputFormat} />
        <Section title="Constraints" text={p.constraints} />
        <Section title="Sample Input" text={p.sampleInput} code />
        <Section title="Sample Output" text={p.sampleOutput} code /> */}
        <Section title="Resources / Notes" text={p.resources} />
      </motion.div>
    </div>
  );
}
