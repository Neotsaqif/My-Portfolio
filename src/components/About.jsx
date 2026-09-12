export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
        <div className="w-16 h-px divider-gradient mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="p-8 sm:p-10 rounded-2xl glass-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-justify relative z-10 font-normal">
          I'm Tsaqif Neoclovin, a Full-Stack Web Developer and digital artist who enjoys turning ideas into functional, modern, and useful digital products. I work across both frontend and backend development, with experience in technologies such as HTML, CSS, JavaScript, React, TypeScript, Tailwind CSS, Laravel, PHP, and PostgreSQL. I'm interested in building complete applications, from designing user interfaces and APIs to managing databases, authentication, deployment, and system architecture. I also use AI-assisted development to improve my workflow, speed up implementation, and explore better ways to solve technical problems. My goal is to become a stronger and more reliable Full-Stack Web Developer by continuously building real-world projects and improving my engineering skills. Outside programming, I enjoy digital art, drawing, photography, and creative design. I like combining technical and creative skills to build products that are both functional and visually appealing.
        </p>
      </div>
    </section>
  )
}
