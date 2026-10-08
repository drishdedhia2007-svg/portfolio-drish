import type { Metadata } from "next";

export const metadata: Metadata = { title: "Research papers", description: "Read Drish Dedhia's research in physics, mathematics, chemistry, and economics, with full PDFs." };

const papers = [
  {
    field: "Physics / electromagnetic induction", title: "How magnet arrangement changes an induction response", pdf: "/papers/magnetic-induction.pdf",
    question: "I compared several Halbach-style magnet configurations and rotation speeds to see how field arrangement influences the voltage induced in a coil.",
    result: "Within my apparatus, induced voltage rose with both configuration order and rotational speed; the higher-order arrangements showed a steeper response to speed.",
    setback: "The rotor could wobble, magnetic spacing was difficult to make perfectly symmetric, and measurements varied. I treated those as limits on the strength of the conclusion and identified a more rigid, controlled rig as the next step."
  },
  {
    field: "Physics / experimental mechanics", title: "When my projectile hypothesis failed", pdf: "/papers/projectile-windage.pdf",
    question: "I tested whether increasing windage, the gap between a marble and its launch tube, would reduce its range.",
    result: "The trend in this spring-driven, low-speed setup did not follow my prediction. The result forced me to revisit an assumption borrowed from high-speed ballistics.",
    setback: "Launch angle, spring deformation, friction, and camera timing could all change the measured range. I examined those sources of error and proposed better alignment and measurement for a repeat study."
  },
  {
    field: "Mathematics / signal analysis", title: "What a guitar string looks like in frequency space", pdf: "/papers/fourier-guitar.pdf",
    question: "Using Fourier analysis, I decomposed recordings of a guitar's high and low E strings and compared their harmonic structure.",
    result: "The model made a familiar sound measurable; the high E fundamental was around 318 Hz, and one low E harmonic comparison was within 0.07% of the expected relation.",
    setback: "A hand-built series and noisy recorded waveforms cannot reproduce a real instrument perfectly. I discussed approximation error, convergence behaviour, and what a longer recording could improve."
  },
  {
    field: "Economics / policy analysis", title: "Three policy choices, three different trade-offs", pdf: "/papers/economic-policy.pdf",
    question: "I studied a minimum-wage increase in Washington, inflation and interest-rate policy in Türkiye, and Kazakhstan's wheat-export pressures.",
    result: "Across the three cases, I used economic models to make competing effects visible: worker income and employer costs, inflation control and growth, producer support and international competition.",
    setback: "News reports and simplified models could not establish every causal effect. I kept the conclusions conditional and considered the groups who may gain or lose from each choice."
  },
  {
    field: "Chemistry / combustion / working draft", title: "Do cooking oils release different amounts of heat?", pdf: "/papers/cooking-oils-draft.pdf",
    question: "I used spirit-lamp calorimetry to compare five cooking oils and explore a possible relationship between fatty-acid saturation and measured combustion energy.",
    result: "The draft reports different heat-release estimates, but its own graph does not follow a simple saturation ranking: sunflower oil appears near the top despite being rich in polyunsaturated fats.",
    setback: "Commercial oils contain mixed fatty acids, and heat loss from an open flame makes a direct molecular explanation uncertain. This working draft records the method and its limits; its central relationship remains unresolved."
  }
];

export default function Research() {
  return <>
    <header className="page-header"><div className="page-wrap inner-header"><p className="eyebrow">Research papers / experiments and models</p><h1 className="display">Questions worth <em>measuring.</em></h1><p className="story-lead">These papers let me follow a question beyond the first neat answer: design an experiment, work through a model, and occasionally discover that my original idea was wrong. The full PDFs are here; the chemistry paper is marked as a working draft.</p></div></header>
    <section className="page-wrap research-list" aria-label="Research papers">{papers.map((paper, i) => <article key={paper.pdf} className="research-row"><div className="research-row-index"><span className="technical">{String(i + 1).padStart(2, "0")} / {paper.field.toUpperCase()}</span><a href={paper.pdf} target="_blank" rel="noopener noreferrer" className="text-link">{paper.pdf.includes("draft") ? "Read the draft PDF" : "Read the full PDF"} ↗</a></div><div><h2>{paper.title}</h2><div className="research-notes"><div><h3 className="eyebrow">The question</h3><p>{paper.question}</p></div><div><h3 className="eyebrow">What I found</h3><p>{paper.result}</p></div><div><h3 className="eyebrow">The limitation</h3><p>{paper.setback}</p></div></div></div></article>)}</section>
  </>;
}
