import ScrollReveal from './ScrollReveal'

const pillars = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#grad-ai)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-ai" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#48cae4" />
            <stop offset="100%" stopColor="#00f5d4" />
          </linearGradient>
        </defs>
        <path d="M12 2a4 4 0 014 4c0 1.95-1.4 3.58-3.25 3.93" />
        <path d="M8.56 6.22A4 4 0 0112 2" />
        <circle cx="12" cy="14" r="4" />
        <path d="M12 18v4" />
        <path d="M8 22h8" />
        <path d="M7 10.5L4 12" />
        <path d="M17 10.5l3 1.5" />
      </svg>
    ),
    title: 'AI Analysis',
    subtitle: 'Computer Vision',
    description:
      'AI analyzes satellite images to detect ecosystems, measure health, and estimate carbon stored — with 95%+ accuracy.',
    gradient: 'from-ocean-400/20 to-cyan-glow/10',
    borderColor: 'border-ocean-400/20',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#grad-bc)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-bc" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#00f5d4" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <path d="M2 12h20" />
        <path d="M7 12v5" />
        <path d="M12 12v5" />
        <path d="M17 12v5" />
      </svg>
    ),
    title: 'Blockchain',
    subtitle: 'Polygon Network',
    description:
      'Every data point is recorded on-chain. Anyone can verify it. Nothing can be altered or hidden.',
    gradient: 'from-eco-500/20 to-eco-300/10',
    borderColor: 'border-eco-500/20',
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="url(#grad-ms)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <defs>
          <linearGradient id="grad-ms" x1="0" y1="0" x2="24" y2="24">
            <stop offset="0%" stopColor="#90e0ef" />
            <stop offset="100%" stopColor="#48cae4" />
          </linearGradient>
        </defs>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Multi-Sig',
    subtitle: 'Decentralized Governance',
    description:
      'Multiple stakeholders must approve each step. No single entity can control or manipulate the process.',
    gradient: 'from-ocean-300/20 to-ocean-200/10',
    borderColor: 'border-ocean-300/20',
  },
]

export default function Solution() {
  return (
    <section id="solution" className="section-dark py-24 md:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-green w-[500px] h-[500px] top-0 right-0 opacity-[0.08]" />
      <div className="orb orb-cyan w-[300px] h-[300px] bottom-0 left-1/4 opacity-[0.06]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-eco-400 mb-4">
              The Solution
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Meet{' '}
              <span className="gradient-text">BlueCarbonX</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg leading-relaxed">
              Three technologies working together to make blue carbon verification
              fast, transparent, and trustworthy.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`glass-card p-8 h-full group relative overflow-hidden`}>
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`}
                />

                <div className="relative z-10">
                  <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${pillar.gradient} border ${pillar.borderColor} mb-6`}>
                    {pillar.icon}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-eco-400/80 font-medium mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom connector */}
        <ScrollReveal delay={0.5}>
          <div className="flex items-center justify-center mt-16 gap-4">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-eco-500/30" />
            <div className="px-5 py-2.5 rounded-full border border-eco-500/20 bg-eco-500/5 text-eco-400 text-sm font-medium">
              The Future of MRV ✦
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-eco-500/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
