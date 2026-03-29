import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const startTime = Date.now()
    const tick = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className="counter-value">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  {
    value: 83,
    suffix: 'M',
    prefix: '',
    label: 'Hectares of Blue Carbon Ecosystems',
    sublabel: 'Mangroves, seagrass & salt marshes globally',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    gradient: 'from-ocean-400 to-ocean-300',
  },
  {
    value: 10,
    suffix: '×',
    prefix: '',
    label: 'Faster Verification',
    sublabel: 'Compared to traditional MRV processes',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    gradient: 'from-eco-500 to-eco-400',
  },
  {
    value: 95,
    suffix: '%',
    prefix: '',
    label: 'AI Accuracy',
    sublabel: 'Computer vision ecosystem detection rate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    gradient: 'from-cyan-glow to-ocean-300',
  },
  {
    value: 100,
    suffix: '%',
    prefix: '',
    label: 'On-Chain Transparency',
    sublabel: 'Every verification step publicly auditable',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    gradient: 'from-ocean-300 to-eco-400',
  },
]

const impactAreas = [
  {
    title: 'Climate Action',
    description: 'Accelerating blue carbon credit issuance to fund ecosystem conservation and restoration at scale.',
    icon: '🌊',
    gradient: 'from-ocean-400/20 to-ocean-300/5',
  },
  {
    title: 'Community Empowerment',
    description: 'Giving coastal communities direct access to carbon markets, ensuring fair compensation for stewardship.',
    icon: '🤝',
    gradient: 'from-eco-500/20 to-eco-300/5',
  },
  {
    title: 'Radical Transparency',
    description: 'Making every step — from satellite data to credit retirement — visible, verifiable, and trustworthy.',
    icon: '🔍',
    gradient: 'from-cyan-glow/20 to-ocean-400/5',
  },
]

export default function Impact() {
  return (
    <section id="impact" className="section-gradient py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-green w-[500px] h-[500px] top-20 -left-40 opacity-[0.07]" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-[0.05]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-eco-400 mb-4">
              Impact
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Real-World{' '}
              <span className="gradient-text">Impact</span>
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              BlueCarbonX isn&apos;t just technology — it&apos;s a catalyst for climate action, community empowerment, and trust.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card p-6 text-center group">
                <div className={`inline-flex w-12 h-12 rounded-xl mb-4 bg-gradient-to-br ${stat.gradient} items-center justify-center text-white`}>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <div className="text-sm text-white/60 font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-white/25">
                  {stat.sublabel}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {impactAreas.map((area, i) => (
            <ScrollReveal key={i} delay={0.4 + i * 0.12}>
              <div className="glass-card p-8 h-full group relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />
                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{area.icon}</span>
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
