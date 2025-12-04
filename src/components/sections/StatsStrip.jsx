export default function StatsStrip({ totalProblems = 0 }) {
  const stats = [
    { label: "Duration", value: "6 hrs" },
    { label: "Total Problems", value: totalProblems || "-" },
    {
      label: "Max Participants (2 per problem)",
      value: totalProblems ? totalProblems * 2 : "-"
    },
    { label: "Mode", value: "On-Campus" }
  ];

  return (
    <div className="bg-black/40 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white/80 text-sm">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-white font-semibold">{s.value}</span>
            <span className="text-white/50 text-xs">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
