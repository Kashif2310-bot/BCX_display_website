export default function Footer() {
  return (
    <footer className="relative bg-ocean-950 border-t border-white/5 py-16">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo and tagline */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-3 group">
              <img
                src="/logo.svg"
                alt="BlueCarbonX"
                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-display font-bold text-base tracking-tight">
                <span className="text-white">BlueCarbon</span>
                <span className="gradient-text">X</span>
              </span>
            </a>
            <p className="text-white/25 text-sm max-w-xs leading-relaxed">
              AI-Driven Blockchain Framework for Transparent Blue Carbon MRV.
              Built for climate. Built for trust.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-3">
                Navigate
              </h4>
              <div className="flex flex-col gap-2">
                {['About', 'Problem', 'Solution', 'How It Works'].map((link) => (
                  <a
                    key={link}
                    href={`#${link === 'About' ? 'understanding' : link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-3">
                More
              </h4>
              <div className="flex flex-col gap-2">
                {['Technology', 'Impact', 'GitHub', 'Docs'].map((link) => (
                  <a
                    key={link}
                    href={link === 'GitHub' || link === 'Docs' ? '#' : `#${link === 'Technology' ? 'tech-stack' : link.toLowerCase()}`}
                    className="text-sm text-white/30 hover:text-white/60 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack badges */}
          <div className="flex flex-col items-end gap-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
              Powered By
            </h4>
            <div className="flex flex-wrap gap-2 justify-end">
              {['Polygon', 'IPFS', 'React', 'AI/ML'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-white/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © 2026 BlueCarbonX. Built with 🌊 for the planet.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-eco-400 animate-pulse" />
              Protecting Blue Carbon Ecosystems
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
