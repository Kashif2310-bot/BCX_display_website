import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const technologies = [
  {
    category: 'Artificial Intelligence',
    items: [
      {
        name: 'Computer Vision',
        description: 'Satellite image analysis for ecosystem detection and health monitoring',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        ),
        gradient: 'from-ocean-400 to-cyan-glow',
      },
      {
        name: 'Carbon Quantification',
        description: 'ML models estimating carbon sequestration from biomass data',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        ),
        gradient: 'from-cyan-glow to-eco-400',
      },
    ],
    color: 'ocean-400',
  },
  {
    category: 'Blockchain',
    items: [
      {
        name: 'Polygon Network',
        description: 'Low-cost, high-speed L2 for transaction recording and smart contracts',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
            <path d="M12 12v4M8 12v4M16 12v4" />
          </svg>
        ),
        gradient: 'from-eco-500 to-eco-300',
      },
      {
        name: 'Smart Contracts',
        description: 'Automated verification rules, credit issuance, and marketplace logic',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
            <path d="M14 2v6h6M10 13l2 2 4-4" />
          </svg>
        ),
        gradient: 'from-eco-400 to-cyan-glow',
      },
    ],
    color: 'eco-500',
  },
  {
    category: 'Decentralized Storage',
    items: [
      {
        name: 'IPFS Protocol',
        description: 'Content-addressed storage ensuring data permanence and integrity',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <path d="M2 10h20M6 14h.01M10 14h.01M14 14h.01" />
          </svg>
        ),
        gradient: 'from-ocean-300 to-ocean-200',
      },
    ],
    color: 'ocean-300',
  },
  {
    category: 'Governance',
    items: [
      {
        name: 'Multi-Sig Protocol',
        description: 'M-of-N stakeholder approval for tamper-proof verification consensus',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        ),
        gradient: 'from-cyan-glow to-ocean-400',
      },
      {
        name: 'DAO Framework',
        description: 'Community-driven governance for protocol upgrades and policy changes',
        icon: (
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
        ),
        gradient: 'from-ocean-400 to-eco-500',
      },
    ],
    color: 'cyan-glow',
  },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="section-dark py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-blue w-[500px] h-[500px] -bottom-40 right-0 opacity-[0.06]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-ocean-300 mb-4">
              Technology
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built on{' '}
              <span className="gradient-text">Cutting-Edge</span>{' '}
              Tech
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              A carefully chosen stack that maximizes transparency, performance, and decentralization.
            </p>
          </div>
        </ScrollReveal>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, catIndex) => (
            <ScrollReveal key={catIndex} delay={catIndex * 0.1}>
              <div className="glass-card p-8 h-full">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.15em] text-white/30 mb-6">
                  {tech.category}
                </h3>
                <div className="space-y-5">
                  {tech.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-4 group cursor-default"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white/90 shadow-lg group-hover:shadow-glow-cyan transition-shadow duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-display text-base font-semibold text-white group-hover:text-eco-300 transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-white/35 text-sm leading-relaxed mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Architecture visual */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="glass-card-static p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="text-xs text-white/20 ml-2 font-mono">architecture.sol</span>
              </div>
              <div className="font-mono text-sm text-white/40 space-y-1 overflow-x-auto">
                <p><span className="text-ocean-300">contract</span> <span className="text-eco-400">BlueCarbonX</span> {'{'}</p>
                <p className="pl-4"><span className="text-white/25">// AI-verified satellite data → IPFS CID</span></p>
                <p className="pl-4"><span className="text-ocean-300">function</span> <span className="text-cyan-bright">submitReport</span>(<span className="text-white/50">bytes32 ipfsCID, uint256 carbonTons</span>)</p>
                <p className="pl-4"><span className="text-white/25">// Multi-sig consensus verification</span></p>
                <p className="pl-4"><span className="text-ocean-300">function</span> <span className="text-cyan-bright">approveReport</span>(<span className="text-white/50">uint256 reportId</span>) <span className="text-eco-400">onlyValidator</span></p>
                <p className="pl-4"><span className="text-white/25">// Mint carbon credit NFT + BCX tokens</span></p>
                <p className="pl-4"><span className="text-ocean-300">function</span> <span className="text-cyan-bright">mintCredits</span>(<span className="text-white/50">uint256 reportId</span>) <span className="text-eco-400">onlyApproved</span></p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
