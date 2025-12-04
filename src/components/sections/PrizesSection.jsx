import SectionHeader from "../ui/SectionHeader";

export default function PrizesSection() {
  const prizes = [
    { place: "🥇 1st Prize", reward: "₹10,000 + Trophy + Certificate" },
    { place: "🥈 2nd Prize", reward: "₹6,000 + Medal + Certificate" },
    { place: "🥉 3rd Prize", reward: "₹3,000 + Certificate" },
  ];

  return (
    <section id="prizes" className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader
        title="Prizes & Rewards"
        subtitle="Win exciting prizes along with recognition and implementation opportunities."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {prizes.map((p) => (
          <div
            key={p.place}
            className="bg-white/10 border border-yellow-400/40 rounded-2xl p-6 text-center text-white shadow-lg"
          >
            <h3 className="text-2xl mb-2">{p.place}</h3>
            <p className="text-sm text-white/80">{p.reward}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-white/70 text-sm">
        All participants receive participation certificates. Exceptional teams
        may get a chance to pilot their solution on campus.
      </p>
    </section>
  );
}
