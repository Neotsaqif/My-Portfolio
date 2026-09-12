import { SkillLogoPlaceholder } from './Placeholders'

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["PHP", "Laravel", "REST API", "Authentication & Authorization"]
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "Supabase", "SQL"]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills & Tech Stack</h2>
        <div className="w-16 h-px divider-gradient mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Technologies and tools I use to build scalable web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-2xl glass-card group hover:-translate-y-1"
          >
            <h3 className="text-lg font-bold text-zinc-200 mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400 shadow-[0_0_10px_rgba(255,255,255,0.3)]"></span>
              {category.title}
            </h3>

            <div className="space-y-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3.5 p-2.5 rounded-xl bg-black/30 border border-white/5 hover:border-white/15 transition-colors backdrop-blur-md"
                >
                  <SkillLogoPlaceholder name={skill} />
                  <span className="text-sm font-medium text-zinc-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
