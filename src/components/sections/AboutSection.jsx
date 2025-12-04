import SectionHeader from "../ui/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader
        title="About the Codeathon"
        subtitle="A hackathon-style coding marathon designed exclusively for NKT students."
      />
      <div className="grid md:grid-cols-2 gap-8 text-white/85">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-xl font-semibold text-white mb-3">
            What is this?
          </h3>
          <p className="text-sm md:text-base text-white/80 leading-relaxed">
            NKT Tech Fest Codeathon is a 6-hour coding sprint where students
            solve real campus challenges – from navigation and attendance to
            mental health and energy optimization.
          </p>
          <p className="mt-3 text-sm md:text-base text-white/80">
            Each problem can have only 2 participants, making it competitive and
            focused. You&apos;ll ideate, prototype, and present your solution to
            a jury.
          </p>
        </div>
        <div className="space-y-4 text-sm md:text-base text-white/80">
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <p> Individual participation only</p>
            <p> Choose exactly one problem statement</p>
            <p> Use any tech stack (web, mobile, AI, IoT, etc.)</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
            <p>📌 Judging Criteria:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Innovation – 30%</li>
              <li>Technical Implementation – 40%</li>
              <li>Presentation & Impact – 30%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
