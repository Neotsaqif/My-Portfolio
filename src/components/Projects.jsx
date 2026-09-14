import { ProjectCoverPlaceholder } from './Placeholders'

// auto-import any image placed in src/assets/projects/ for project covers
// supported files:
//   stematel-art-website.*  -> StematelArt-Project-Website
//   productivity-tracker.* -> Productivity Tracker
//   namilontar.*            -> NamiLontar
const coverImages = import.meta.glob('../assets/projects/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' })

function getCoverImage(title) {
  const map = {
    "StematelArt-Project-Website": "stematel-art-website",
    "Productivity Tracker": "productivity-tracker",
    "NamiLontar": "namilontar",
  }
  const key = map[title]
  if (!key) return null
  const entry = Object.entries(coverImages).find(([path]) => path.includes(`/${key}.`))
  return entry ? entry[1] : null
}

const projects = [
  {
    title: "StematelArt-Project-Website",
    description: "A community-driven art platform for artists to share, discover, and interact with artwork, featuring social engagement, rankings, contests, and artist profiles.",
    tags: ["React", "Tailwind CSS", "Laravel", "REST API"],
    githubUrl: "https://github.com/Neotsaqif/StematelArt-Project-Website"
  },
  {
    title: "Productivity Tracker",
    description: "A clean, minimal workspace app for logging tasks, recording daily write-ups, and generating AI-driven summaries of each day's progress using Gemini.",
    tags: ["React 19", "TypeScript", "Express", "MySQL", "Tailwind CSS 4", "Google Gemini"],
    githubUrl: "https://github.com/Neotsaqif/Productivity-Tracker"
  },
  {
    title: "NamiLontar",
    description: "A Laravel-based web application with MySQL database integration and Midtrans payment gateway support.",
    tags: ["Laravel", "MySQL", "Midtrans", "Payment Gateway"],
    githubUrl: "https://github.com/Neotsaqif/NamiLontar"
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
          <a
            key={project.title}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="group rounded-2xl glass-card overflow-hidden flex flex-col hover:-translate-y-1.5 focus:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 cursor-pointer"
          >
            {(() => {
              const cover = getCoverImage(project.title)
              return cover ? (
                <img
                  src={cover}
                  alt={`${project.title} cover`}
                  className="w-full object-cover border-b border-white/10"
                  style={{ aspectRatio: "16 / 9" }}
                  loading="lazy"
                />
              ) : (
                <ProjectCoverPlaceholder title={project.title} />
              )
            })()}

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
          </a>
        ))}
      </div>
    </section>
  )
}
