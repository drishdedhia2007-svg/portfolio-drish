import { getChildhoodProjects } from "@/lib/projects";

export default function About() {
  const childhoodProjects = getChildhoodProjects();

  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h1
          className="text-4xl font-semibold text-[#1D2433] mb-16 text-center"
          style={{ fontFamily: "var(--font-display)" }}
        >
          About
        </h1>

        <section className="mb-14">
          <h2
            className="text-sm uppercase tracking-wide text-[#D98E4A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Where I Come From
          </h2>
          <p
            className="text-lg text-[#3F4A54] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            My curiosity about engineering did not start in a classroom.
            It started with toy cars, and the question of how they
            actually worked. That question turned into a habit: taking
            apart old appliances just to see their insides, figuring
            out how things worked by pulling them apart and, usually,
            putting them back together. Somewhere in that process, I
            stopped being satisfied with knowing that something works,
            and started needing to know why.
          </p>
        </section>

        <section className="mb-14">
          <h2
            className="text-sm uppercase tracking-wide text-[#D98E4A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Who I Am Today
          </h2>
          <p
            className="text-lg text-[#3F4A54] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I am currently studying B.Sc. Maschinenbau at RWTH Aachen. I
            am still early in narrowing down a specialization, but CAD
            modeling and electronics have consistently pulled my
            attention the most, particularly when a project has
            real world application, not just theoretical value. I am
            part of the chassis department at Ecogenium, working on a
            hydrogen fuel cell vehicle for the Shell Eco-marathon.
            Longer term, I am drawn toward automotive and renewable
            energy systems, though I am deliberately keeping my
            direction open, since I would rather build broad, versatile
            experience early than commit to a lane too soon.
          </p>
        </section>

        <section className="mb-14">
          <h2
            className="text-sm uppercase tracking-wide text-[#D98E4A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Beyond the Workshop
          </h2>
          <p
            className="text-lg text-[#3F4A54] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
            I am a sociable, team oriented person by nature. I play
            volleyball, basketball, and cricket, and I am actively
            working my way toward bigger adrenaline, with skydiving and
            cliff jumping both on my list. I taught myself guitar four
            years ago and still play regularly. Academically, I
            graduated valedictorian of my IB class with a 44 out of 45,
            while also serving as House Captain and co-founding my
            school's Financial Literacy Club, where I taught younger
            students the basics of investing. I am a lifelong Max
            Verstappen fan, and I will happily talk cars with anyone
            who gives me the opening.
          </p>
        </section>

        <section className="mb-20">
          <h2
            className="text-sm uppercase tracking-wide text-[#D98E4A] mb-3"
            style={{ fontFamily: "var(--font-body)" }}
          >
            What I Am Writing
          </h2>
          <p
            className="text-lg text-[#3F4A54] leading-relaxed"
            style={{ fontFamily: "var(--font-body)" }}
          >
                       I also write{" "}
            <a href="https://drishdedhia23.substack.com/?utm_campaign=profile_chips" target="_blank" rel="noopener noreferrer" className="text-[#D98E4A] font-medium hover:underline">Logbook of a Learning Engineer</a>{" "}
            on Substack, a running account of my mistakes and lessons as a complete beginner on a student racing team, written for anyone else starting out in a similar position who could use a more honest, less polished perspective than the usual highlight reel.
          </p>
        </section>

        {childhoodProjects.length > 0 ? (
          <section className="border-t border-[#EAEAEC] pt-14">
            <h2
              className="text-2xl font-semibold text-[#1D2433] mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The Beginning
            </h2>
            <p
              className="text-[#8B93A1] mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Before CAD software, there was newspaper, tape, and a lot
              of trial and error.
            </p>

            <div className="flex flex-col gap-4">
              {childhoodProjects.map(function (project) {
                return (
                  <div
                    key={project.slug}
                    className="flex items-center gap-4 border border-[#EAEAEC] rounded-xl p-4"
                  >
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-16 h-16 object-cover rounded-lg shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 bg-[#F0F1F3] rounded-lg shrink-0" />
                    )}
                    <div>
                      <h3
                        className="font-semibold text-[#1D2433]"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm text-[#8B93A1]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ) : null}
      </div>
    </div>
  );
}