import SectionHeader from "../ui/SectionHeader";

export default function FAQSection() {
  const faqs = [
    {
      q: "Who can participate?",
      a: "Any NKT student (FY, SY, TY, PG) from any stream with basic coding knowledge can participate.",
    },
    {
      q: "Can I choose more than one problem statement?",
      a: "No. You must choose exactly one problem and stick to it for the full event.",
    },
    {
      q: "What tech stack can I use?",
      a: "Any: web, mobile, AI/ML, IoT, Python, Java, JS, etc. as long as you can demo it.",
    },
    {
      q: "Do I need to bring my own laptop?",
      a: "Yes, participants must bring their own laptops and chargers.",
    },
  ];

  return (
    <section id="faq" className="max-w-6xl mx-auto px-4 py-16">
      <SectionHeader title="Frequently Asked Questions" />
      <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="bg-white/10 rounded-2xl p-5 border border-white/15"
          >
            <h3 className="text-white font-semibold mb-2">❓ {f.q}</h3>
            <p className="text-white/75">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
