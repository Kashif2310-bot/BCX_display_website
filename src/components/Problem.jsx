import ScrollReveal from './ScrollReveal'

const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M9 15h6" />
        <path d="M9 11h2" />
      </svg>
    ),
    title: 'Paper-Based Process',
    points: [
      '70% of MRV still uses manual data collection',
      'Spreadsheets and paper forms',
      'Months of fieldwork required',
    ],
    stat: '70%',
    statLabel: 'still manual',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l-2-2" />
        <path d="M15 10l2-2" />
        <path d="M9 16l6-6" />
      </svg>
    ),
    title: 'Zero Transparency',
    points: [
      'Buyers can\'t verify carbon credit accuracy',
      'No public audit trail exists',
      'Trust gaps block market growth',
    ],
    stat: '$2B+',
    statLabel: 'lost to fraud & distrust',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Years of Waiting',
    points: [
      '2–5 years from data to credit issuance',
      'Climate action can\'t wait this long',
      'Communities lose income while waiting',
    ],
    stat: '3+ yrs',
    statLabel: 'avg. verification time',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Gatekept System',
    points: [
      '5 organizations control 90% of MRV',
      'Small projects can\'t afford entry',
      'Communities excluded from the process',
    ],
    stat: '5',
    statLabel: 'orgs control everything',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="section-dark py-24 md:py-36 relative overflow-hidden">
      {/* Background orb */}
      <div className="orb orb-blue w-[500px] h-[500px] -top-60 -left-60 opacity-10" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-ocean-400 mb-4">
              The Challenge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Why Blue Carbon MRV is{' '}
              <span className="gradient-text">Broken</span>
            </h2>
            <p className="text-white/40 max-w-xl mx-auto text-base leading-relaxed">
              The current system is slow, expensive, and excludes 
              the communities that need it most.
            </p>
          </div>
        </ScrollReveal>

        {/* Pain Point Cards — simplified with bullet points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-7 h-full group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-red-500/10 text-red-400/80 border border-red-500/10">
                      {point.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-display font-bold text-white/80">
                        {point.stat}
                      </div>
                      <div className="text-[10px] text-white/25 uppercase tracking-wider">
                        {point.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white mb-3">
                    {point.title}
                  </h3>

                  {/* Bullet points instead of paragraph */}
                  <ul className="space-y-1.5">
                    {point.points.map((p, j) => (
                      <li key={j} className="flex items-start gap-2 text-white/35 text-sm">
                        <span className="text-red-400/50 mt-1 text-xs">●</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom connector */}
        <ScrollReveal delay={0.5}>
          <div className="flex items-center justify-center mt-16 gap-4">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-red-500/30" />
            <div className="px-5 py-2.5 rounded-full border border-red-500/20 bg-red-500/5 text-red-400/70 text-sm font-medium">
              This needs to change
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-red-500/30" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
