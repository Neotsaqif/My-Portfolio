import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <div className="relative min-h-screen bg-[#050505] text-zinc-50 selection:bg-white/20 selection:text-white">
      {/* Ambient atmospheric glows - neutral/silver */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.015] blur-[180px] rounded-full"></div>
        <div className="absolute top-20 -right-60 w-[500px] h-[500px] bg-white/[0.012] blur-[160px] rounded-full"></div>
        <div className="absolute bottom-10 -left-60 w-[500px] h-[500px] bg-white/[0.012] blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.008] blur-[200px] rounded-full"></div>
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Tsaqif Neoclovin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App