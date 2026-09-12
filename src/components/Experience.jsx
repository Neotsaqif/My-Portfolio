const experiences = [
  {
    role: "Full-Stack Web Developer",
    organization: "Personal & Client Projects",
    bullets: [
      "Build responsive web applications from frontend to backend",
      "Develop REST APIs, authentication, database systems, and CRUD features",
      "Work with React, Laravel, PostgreSQL, and Supabase"
    ]
  },
  {
    role: "Project Manager & Developer",
    organization: "Team PUM",
    bullets: [
      "Coordinate development tasks and project requirements",
      "Manage GitHub workflow and development progress",
      "Contribute to implementation and technical decisions"
    ]
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Experience</h2>
        <div className="w-16 h-px divider-gradient mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-500 mt-4 text-sm sm:text-base">
          My professional roles and development experience.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.role + exp.organization}
            className="p-8 rounded-2xl glass-card relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-zinc-300 to-zinc-400"></div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <span className="px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono w-fit">
                {exp.organization}
              </span>
            </div>

            <ul className="space-y-2.5 mt-4">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0"></span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}