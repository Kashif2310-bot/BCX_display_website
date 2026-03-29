import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const blueCarbonFacts = [
  {
    icon: '🌿',
    title: 'Mangroves',
    text: 'Coastal trees with tangled roots that grow in saltwater.',
  },
  {
    icon: '🌊',
    title: 'Seagrass',
    text: 'Underwater meadows on shallow ocean floors.',
  },
  {
    icon: '🏝️',
    title: 'Salt Marshes',
    text: 'Grassy wetlands found along coastlines worldwide.',
  },
]

const whyItFails = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
      </svg>
    ),
    title: 'Manual & Slow',
    text: 'Data is collected by hand using paper forms. It takes years.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l-2-2M15 10l2-2M9 16l6-6" />
      </svg>
    ),
    title: 'No Trust',
    text: 'People can\'t verify if the data is accurate or honest.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Too Expensive',
    text: 'Small communities can\'t afford the verification process.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Communities Left Out',
    text: 'People who protect these ecosystems get no reward.',
  },
]

export default function Understanding() {
  return (
    <section id="understanding" className="section-gradient py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-green w-[500px] h-[500px] -top-40 right-0 opacity-[0.06]" />
      <div className="orb orb-blue w-[300px] h-[300px] bottom-0 -left-20 opacity-[0.05]" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-eco-400 mb-4">
              Start Here
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Understanding the{' '}
              <span className="gradient-text">Problem</span>
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto text-lg leading-relaxed">
              Before we explain the solution, let&apos;s understand the basics.
              <br className="hidden sm:block" />
              No technical background needed.
            </p>
          </div>
        </ScrollReveal>

        {/* ─── WHAT IS BLUE CARBON ─── */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🌍</span>
              <h3 className="font-display text-2xl font-bold text-white">
                What is Blue Carbon?
              </h3>
            </div>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              <span className="text-eco-400 font-medium">Blue carbon</span> is the carbon captured and stored by
              ocean and coastal ecosystems. These are living systems along our coastlines that
              naturally absorb CO₂ from the atmosphere.
            </p>

            {/* Three ecosystem types */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {blueCarbonFacts.map((eco, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 text-center"
                >
                  <span className="text-4xl block mb-3">{eco.icon}</span>
                  <h4 className="font-display font-semibold text-white text-base mb-1">{eco.title}</h4>
                  <p className="text-white/35 text-sm">{eco.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Key stat */}
            <div className="flex items-center gap-4 bg-eco-500/[0.08] border border-eco-500/20 rounded-xl p-4">
              <span className="text-3xl">⚡</span>
              <p className="text-white/60 text-sm leading-relaxed">
                <span className="text-eco-400 font-semibold">These ecosystems capture up to 5× more carbon than land forests</span>
                {' '}— yet they cover less than 2% of the ocean floor. Protecting them is one of our most powerful climate tools.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── WHAT IS MRV ─── */}
        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">📋</span>
              <h3 className="font-display text-2xl font-bold text-white">
                What is MRV?
              </h3>
            </div>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              MRV stands for <span className="text-ocean-300 font-medium">Monitoring, Reporting, and Verification</span>.
              It&apos;s how we <em>prove</em> that blue carbon ecosystems are actually storing carbon.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  letter: 'M',
                  word: 'Monitoring',
                  desc: 'Measure the ecosystem — how big is it? How healthy?',
                  color: 'from-ocean-400 to-ocean-300',
                },
                {
                  letter: 'R',
                  word: 'Reporting',
                  desc: 'Document the data — how much carbon is being stored?',
                  color: 'from-eco-500 to-eco-400',
                },
                {
                  letter: 'V',
                  word: 'Verification',
                  desc: 'Prove it\'s accurate — can we trust this data?',
                  color: 'from-cyan-glow to-ocean-300',
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-display font-bold text-xl mb-3 shadow-lg`}>
                    {item.letter}
                  </div>
                  <h4 className="font-display font-semibold text-white text-base mb-1">{item.word}</h4>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-white/[0.03] border border-white/[0.06] rounded-xl p-4">
              <p className="text-white/40 text-sm leading-relaxed">
                💡 <span className="text-white/60">Think of it like a receipt.</span> When someone buys carbon credits,
                MRV is the proof that real carbon was actually captured. Without it, there&apos;s no trust.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ─── WHY CURRENT SYSTEMS FAIL ─── */}
        <ScrollReveal delay={0.3}>
          <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">❌</span>
              <h3 className="font-display text-2xl font-bold text-white">
                Why Current Systems Fail
              </h3>
            </div>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              Today&apos;s MRV process is broken. It was designed decades ago and hasn&apos;t kept up with technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyItFails.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-red-500/[0.04] border border-red-500/10 rounded-xl p-5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 text-red-400/80 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-white/35 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* ─── TRANSITION TO SOLUTION ─── */}
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-eco-500/30" />
              <div className="px-5 py-2.5 rounded-full border border-eco-500/20 bg-eco-500/5 text-eco-400 text-sm font-medium">
                There&apos;s a better way ↓
              </div>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-eco-500/30" />
            </div>
            <p className="text-white/30 text-sm max-w-lg mx-auto">
              What if we could use AI to analyze satellite images, blockchain to make data tamper-proof,
              and multi-signature governance to ensure trust — all automatically?
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
