import type { Metadata } from "next";

export const metadata: Metadata = { title: "Competitions", description: "Drish Dedhia's competition experience in mathematics, investing, and public speaking." };

const competitions = [
  { name: "Wharton Global High School Investment Competition", year: "2023–2024", kind: "Investing / team", outcome: "Approximately top 10% of 4,300 teams by portfolio value", story: "Across two years of participation, I worked in a five-person team to research market data and build a mock portfolio of stocks and ETFs. In one six-month challenge, we finished in approximately the top 10% by portfolio value. I enjoyed the research, but the lasting lesson was learning to defend a decision, name its risks, and stay willing to revise it when the evidence changes." },
  { name: "ABWA Infinity Mathematics Competition", year: "2023–2024", kind: "Mathematics", outcome: "Individual silver medal · top 25 of 1,620", story: "I earned an individual silver medal in a field of 1,620 and reached the team semifinal stage. The problems did not always yield to the first approach, which made the result especially satisfying. I left more comfortable with staying calm, trying another route, and explaining it under time pressure." },
  { name: "University of Waterloo Euclid Contest", year: "2025", kind: "Mathematics", outcome: "Top 38% globally", story: "I entered Euclid because I wanted to see how my reasoning held up outside familiar classroom questions. The result gave me a useful benchmark; preparing for it reminded me that a clear path to an answer matters as much as the answer itself." },
  { name: "JGU MUN Mumbai Edition", year: "2024", kind: "Debate / diplomacy", outcome: "High commendation · Delegate of Fiji, UN General Assembly", story: "Representing Fiji meant arriving with a well-researched position and then being ready to rethink parts of it as the room changed. I received a high commendation, and came away more confident in speaking up, listening closely, and building an argument with other people rather than simply delivering one." },
];

export default function Competitions() {
  return <>
    <header className="border-b border-[#35515b] bg-[#142832] py-20"><div className="page-wrap"><p className="eyebrow">Competitions / 04</p><h1 className="display mt-4 text-5xl font-extrabold sm:text-7xl">Testing ideas under pressure.</h1><p className="story-lead mt-6 max-w-3xl text-lg">Competitions gave me a deadline, a team to learn from, and a clear result to measure. The result matters; so does the change in how I approached the next problem.</p></div></header>
    <section className="page-wrap story-section grid gap-6">
      {competitions.map((item, i) => <article key={item.name} className="story-card p-7 sm:p-9"><p className="technical text-xs text-[#f4b58d]">{String(i + 1).padStart(2, "0")} / {item.year} / {item.kind.toUpperCase()}</p><h2 className="display mt-3 text-2xl font-extrabold sm:text-3xl">{item.name}</h2><p className="mt-5 inline-block border-l-2 border-[#b75132] pl-4 font-bold text-[#f3f3eb]">{item.outcome}</p><p className="story-lead mt-5 max-w-3xl">{item.story}</p></article>)}
      <div className="rounded-xl border border-[#35515b] bg-[#142832] p-7 sm:p-9"><p className="eyebrow">Earlier school competitions</p><h2 className="display mt-3 text-3xl font-extrabold">A broader record of showing up.</h2><p className="story-lead mt-3 max-w-3xl">My earlier competitions mixed individual problem solving with team sport. Some ended in a medal, while others built the habit of preparing and competing together.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
        ["Asset Talent Search", "Bronze medal"],
        ["International Mathematics Olympiad", "Second runner-up"],
        ["National Science Olympiad", "Second runner-up"],
        ["Secondary Sports Day shot put", "Two gold medals"],
        ["Interschool handball tournament", "Bronze medal"],
        ["Under-14 football tournament", "First runner-up"],
        ["GICLM interschool basketball", "First place under my captainship"],
        ["Christ Academy, AIKYUM & DSO basketball", "School team participation"]
      ].map(([name, result]) => <div key={name} className="story-card p-5"><h3 className="font-extrabold">{name}</h3><p className="mt-2 text-sm text-[#c0cfca]">{result}</p></div>)}</div></div>
    </section>
  </>;
}
