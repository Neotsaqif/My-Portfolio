export default function Contact() {
  const contacts = [
    {
      label: "Email",
      value: "Neotsaqif@gmail.com",
      href: "mailto:Neotsaqif@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
          <path d="M22 6l-10 7L2 6"></path>
        </svg>
      )
    },
    {
      label: "GitHub",
      value: "github.com/Neotsaqif",
      href: "https://github.com/Neotsaqif",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      label: "Instagram",
      value: "@neotsaqif",
      href: "https://instagram.com/neotsaqif",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      label: "Portfolio",
      value: "neo.neoorzero.co.id",
      href: "https://neo.neoorzero.co.id",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      )
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Get in Touch</h2>
        <div className="w-16 h-px divider-gradient mx-auto mt-4 rounded-full"></div>
        <p className="text-zinc-500 mt-4 text-sm sm:text-base">
          Have a question or want to work together? Reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl glass-card flex items-center gap-4 group hover:-translate-y-1"
          >
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-zinc-300 group-hover:bg-white/[0.08] transition-colors">
              {contact.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-mono font-semibold">{contact.label}</span>
              <span className="text-sm sm:text-base text-zinc-200 font-medium group-hover:text-white transition-colors">{contact.value}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
