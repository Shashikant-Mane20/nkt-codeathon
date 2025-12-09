export default function StatsStrip({ totalProblems = 0 }) {
  const stats = [
    { label: "Duration", value: "6 Hours" },
    { label: "Total Problems", value: totalProblems || "-" },
    { label: "Team Size", value: "1 - 4 Members" },
    { label: "Mode", value: "On-Campus" }
  ];

  return (
    <div className="bg-black/40 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white/80 text-sm">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col">
            <span className="text-white font-semibold">{stat.value}</span>
            <span className="text-white/50 text-xs">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

