import type { Metadata } from "next";

export const metadata: Metadata = { title: "Competitions", description: "Drish Dedhia's competition experience in mathematics, investing, and public speaking." };

const competitions = [
  { name: "Wharton Global High School Investment Competition", year: "2023–2024", kind: "Investing / team", outcome: "Around 400th of 4,300 teams by portfolio value", story: "Across two years of participation, I worked in a five-person team to research market data and build a mock portfolio of stocks and ETFs. One six-month challenge placed us in roughly the top tenth by portfolio value. The deeper lesson was that a decision needs a reason, a risk view, and the patience to revisit both." },
  { name: "ABWA Infinity Mathematics Competition", year: "2023–2024", kind: "Mathematics", outcome: "Individual silver medal · top 25 of 1,620", story: "I progressed through a demanding field of mathematics competitors and reached the team semifinal stage. It strengthened my comfort with unfamiliar problems under a deadline and rewarded persistence more than any single shortcut." },
  { name: "University of Waterloo Euclid Contest", year: "2025", kind: "Mathematics", outcome: "Top 38% globally", story: "I entered the Euclid contest to test my mathematical reasoning beyond familiar classroom questions. The result marked a useful benchmark, and the preparation taught me to explain the route to an answer as clearly as the answer itself." },
  { name: "JGU MUN Mumbai Edition", year: "2024", kind: "Debate / diplomacy", outcome: "High commendation · Delegate of Fiji, UN General Assembly", story: "Representing Fiji made me research a position, listen in real time, and respond with a coherent argument. The commendation recognized that work, while the event sharpened my ability to speak with confidence and still adapt to another delegate's stronger point." },
];

export default function Competitions() {
  return <>
    <header className="border-b border-[#b9c3bd] bg-[#dce1dc] py-20"><div className="page-wrap"><p className="eyebrow">Competitions / 04</p><h1 className="display mt-4 text-5xl font-extrabold sm:text-7xl">Testing ideas under pressure.</h1><p className="story-lead mt-6 max-w-3xl text-lg">Competitions gave me a deadline, a team to learn from, and a clear result to measure. The result matters; so does the change in how I approached the next problem.</p></div></header>
    <section className="page-wrap story-section grid gap-6">
      {competitions.map((item, i) => <article key={item.name} className="story-card p-7 sm:p-9"><p className="technical text-xs text-[#a74727]">{String(i + 1).padStart(2, "0")} / {item.year} / {item.kind.toUpperCase()}</p><h2 className="display mt-3 text-2xl font-extrabold sm:text-3xl">{item.name}</h2><p className="mt-5 inline-block border-l-2 border-[#b75132] pl-4 font-bold text-[#263d46]">{item.outcome}</p><p className="story-lead mt-5 max-w-3xl">{item.story}</p></article>)}
      <div className="rounded-xl border border-[#b9c3bd] bg-[#dce1dc] p-7 sm:p-9"><p className="eyebrow">Earlier school competitions</p><h2 className="display mt-3 text-3xl font-extrabold">A broader record of showing up.</h2><p className="story-lead mt-3 max-w-3xl">My earlier competitions mixed individual problem solving with team sport. Some ended in a medal, while others built the habit of preparing and competing together.</p><div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{[
        ["Asset Talent Search", "Bronze medal"],
        ["International Mathematics Olympiad", "Second runner-up"],
        ["National Science Olympiad", "Second runner-up"],
        ["Secondary Sports Day shot put", "Two gold medals"],
        ["Interschool handball tournament", "Bronze medal"],
        ["Under-14 football tournament", "First runner-up"],
        ["GICLM interschool basketball", "First place under my captainship"],
        ["Christ Academy, AIKYUM & DSO basketball", "School team participation"]
      ].map(([name, result]) => <div key={name} className="story-card p-5"><h3 className="font-extrabold">{name}</h3><p className="mt-2 text-sm text-[#53666a]">{result}</p></div>)}</div></div>
    </section>
  </>;
}
