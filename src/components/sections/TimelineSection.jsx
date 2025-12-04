import SectionHeader from "../ui/SectionHeader";

const items = [
  { time: "9:00 AM", event: "Registration & Breakfast" },
  { time: "10:00 AM", event: "Opening Ceremony" },
  { time: "11:00 AM", event: "Coding Begins" },
  { time: "1:00 PM", event: "Lunch Break" },
  { time: "6:00 PM", event: "Mentorship Session" },
  { time: "8:00 PM", event: "Dinner" },
  { time: "11:00 AM (Next Day)", event: "Coding Ends & Submissions" },
  { time: "12:00 PM", event: "Presentations" },
  { time: "3:00 PM", event: "Prize Distribution" },
];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="bg-white/10 backdrop-blur-lg py-16 mt-10"
    >
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeader title="Event Timeline" />
        <div className="max-w-2xl mx-auto space-y-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10"
            >
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold min-w-[120px] text-center text-sm">
                {item.time}
              </div>
              <div className="text-white text-sm md:text-base">
                {item.event}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
