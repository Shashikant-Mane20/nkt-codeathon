import SectionHeader from "../ui/SectionHeader";

export default function SponsorsSection() {
  const sponsors = ["NKT Coding Club", "NKT Tech Fest/ NKT College", "Workers"];

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <SectionHeader title="Organised By" />
      <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
        {sponsors.map((s) => (
          <div
            key={s}
            className="px-6 py-3 rounded-full bg-white/10 border border-white/20"
          >
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}
