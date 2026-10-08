import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Writing", description: "The Logbook of a Learning Engineer: Drish Dedhia's notes from learning hydrogen mobility engineering with Ecogenium." };

const entries = [
  { number: "03", date: "20 September 2026", title: "Entry Three: Why Am I Looking for Shortcuts?", note: "I chose to design a hotwire cutter for the team instead of buying one, and began working through the frame, circuitry, and CAD model.", href: "https://drishdedhia23.substack.com/p/entry-three-why-am-i-looking-for" },
  { number: "02", date: "10 September 2026", title: "Entry Two: Bent Angles and Better Questions", note: "A carbon fibre test piece cured at the wrong angle. We looked at what the result meant and how to test the method before committing to a larger part.", href: "https://drishdedhia23.substack.com/p/entry-two-bent-angles-and-better" },
  { number: "01", date: "1 August 2026", title: "Entry 1: Learning to Speak Carbon Fibre", note: "My first hands-on carbon fibre session, from fibre orientation and vacuum bagging to a leak we could not find on the first try.", href: "https://drishdedhia23.substack.com/p/entry-1-learning-to-speak-carbon" },
];

export default function Writing() {
  return <>
    <header className="writing-hero"><div className="page-wrap writing-hero-inner"><div><p className="eyebrow">Writing / The Logbook of a Learning Engineer</p><h1 className="display">Notes from the <em>workbench.</em></h1><p>I joined Ecogenium&apos;s chassis team with more questions than answers. Instead of waiting for a polished ending, I started a logbook of the small mistakes, new terms, and moments of understanding along the way.</p><div className="flex flex-wrap gap-3"><a className="button-primary" href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer">Visit the Substack ↗</a><Link className="button-light" href="/experience#ecogenium">Meet the team ↗</Link></div></div><div className="writing-graphic" aria-hidden="true"><span>THE<br/>LOGBOOK</span><small>OF A LEARNING ENGINEER</small><i>✳</i><b>01<br/>02<br/>03</b></div></div></header>
    <section className="page-wrap story-section"><div className="writing-intro" data-reveal><div><p className="eyebrow">The published entries</p><h2 className="display">The story so far.</h2></div><p>The logbook is a real-time record of learning hydrogen mobility engineering at Ecogenium. These entries are on Substack, where I can keep adding to the story as the work changes.</p></div><div className="writing-list">{entries.map(entry => <a className="writing-entry" data-reveal href={entry.href} target="_blank" rel="noopener noreferrer" key={entry.number}><span className="writing-entry-index">{entry.number} / LOGBOOK</span><span><span className="writing-entry-date">{entry.date}</span><strong>{entry.title}</strong><span className="writing-entry-note">{entry.note}</span></span><span className="writing-entry-arrow" aria-hidden="true">↗</span></a>)}</div></section>
  </>;
}
