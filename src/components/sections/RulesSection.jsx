import SectionHeader from "../ui/SectionHeader";

export default function RulesSection() {
  const rules = [
    "Each problem statement can only be selected by 2 participants.",
    "Individual participation only. No teams.",
    "Code must be original and written during the event.",
    "Use of open-source libraries is allowed.",
    "Final submission must include working code + short documentation.",
    "Judging: Innovation (30%), Technical Implementation (40%), Presentation (30%).",
    "Mentors and faculties will be available during the event.",
  ];

  return (
    <section id="rules" className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader title="Rules & Guidelines" />
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <ul className="space-y-3 text-white/90 text-sm md:text-base">
          {rules.map((rule, idx) => (
            <li key={idx}>✓ {rule}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
