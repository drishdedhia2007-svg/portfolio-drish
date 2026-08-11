import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-4xl font-bold text-black">Drish Dedhia</h1>
      <p className="text-xl text-zinc-600 mt-2">
        Mechanical Engineering Student at RWTH Aachen
      </p>
      <p className="text-base text-zinc-500 mt-6 max-w-md">
        Hey there, I'm an aspiring Mechanical Engineer keeping a record of my journey: from
        childhood builds to CAD design and manufacturing and lots more to follow!
      </p>
      <p className="text-sm text-zinc-400 mt-2 max-w-md">
        Look around to see how I built, or am building, my real-time engineering
        projects; some for fun, some for FUNctionality ;p
      </p>
      <Link
        href="/projects"
        className="mt-8 rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-zinc-800 transition-colors"
      >
        View Projects
      </Link>
    </div>
  );
}