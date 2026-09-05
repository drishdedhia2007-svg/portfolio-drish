import { getSkillCounts } from "@/lib/projects";

export default function Skills() {
  const skills = getSkillCounts();

  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h1
          className="text-4xl font-semibold text-[#1D2433] text-center mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Skills
        </h1>
        <p
          className="text-center text-[#6E7280] mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          What I have used, and where I have actually used it.
        </p>

        {skills.length === 0 ? (
          <p
            className="text-center text-[#8B93A1]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Skills will appear here automatically as projects are added.
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            {skills.map((item) => (
              <div
                key={item.skill}
                className="flex items-center justify-between border-b border-[#EAEAEC] pb-4"
              >
                <span
                  className="text-lg font-medium text-[#1D2433]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.skill}
                </span>
                <span
                  className="text-sm text-[#8B93A1]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Used in {item.count} {item.count === 1 ? "project" : "projects"}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}