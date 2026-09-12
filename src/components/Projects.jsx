import { ProjectCoverPlaceholder } from './Placeholders'

const projects = [
  {
    title: "StematelArt-Project-Website",
    description: "A community-driven art platform for artists to share, discover, and interact with artwork, featuring social engagement, rankings, contests, and artist profiles.",
    tags: ["React", "Tailwind CSS", "Laravel", "REST API"]
  },
  {
    title: "kedai-rasa-kita-pos-website",
    description: "A web-based POS system for Kedai Rasa Kita, featuring sales checkout, inventory management, product and category management, transaction history, reporting, and role-based access.",
    tags: ["React", "PHP", "PostgreSQL", "POS System"]
  },
  {
    title: "NamiLontar",
    description: "A Laravel-based web application with MySQL database integration and Midtrans payment gateway support.",
    tags: ["Laravel", "MySQL", "Midtrans", "Payment Gateway"]
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
        <div className="w-16 h-px divider-gradient mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          A collection of web applications and digital platforms I've developed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-2xl glass-card overflow-hidden flex flex-col hover:-translate-y-1.5"
          >
            <ProjectCoverPlaceholder title={project.title} />

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-zinc-200 transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-zinc-300 text-xs font-mono"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
