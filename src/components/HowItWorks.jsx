import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const steps = [
  {
    id: 1,
    title: 'Upload',
    subtitle: 'Satellite Data',
    description: 'Satellite images and sensor data from coastal ecosystems are uploaded to the platform.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    color: 'from-ocean-400 to-ocean-300',
    bgColor: 'bg-ocean-400/10',
    borderColor: 'border-ocean-400/30',
  },
  {
    id: 2,
    title: 'AI Analysis',
    subtitle: 'Computer Vision',
    description: 'AI scans the images to identify ecosystem boundaries, check health, and estimate how much carbon is stored.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    color: 'from-cyan-glow to-ocean-300',
    bgColor: 'bg-cyan-glow/10',
    borderColor: 'border-cyan-glow/30',
  },
  {
    id: 3,
    title: 'Multi-Sig Approval',
    subtitle: 'Decentralized Verification',
    description: 'Multiple trusted reviewers must approve the AI report. No single person can pass it alone.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <path d="M20 8v6M23 11h-6" />
      </svg>
    ),
    color: 'from-eco-400 to-eco-300',
    bgColor: 'bg-eco-400/10',
    borderColor: 'border-eco-400/30',
  },
  {
    id: 4,
    title: 'IPFS Storage',
    subtitle: 'Decentralized Pinning',
    description: 'Approved data is stored on IPFS — a decentralized network. Once saved, it can never be altered or deleted.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M2 10h20" />
        <path d="M6 14h.01" />
        <path d="M10 14h.01" />
      </svg>
    ),
    color: 'from-ocean-300 to-ocean-200',
    bgColor: 'bg-ocean-300/10',
    borderColor: 'border-ocean-300/30',
  },
  {
    id: 5,
    title: 'Blockchain',
    subtitle: 'On-Chain Record',
    description: 'A permanent record is written to the Polygon blockchain. Anyone can see and verify it at any time.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="8" y1="12" x2="8" y2="16" />
        <line x1="16" y1="12" x2="16" y2="16" />
      </svg>
    ),
    color: 'from-eco-500 to-eco-400',
    bgColor: 'bg-eco-500/10',
    borderColor: 'border-eco-500/30',
  },
  {
    id: 6,
    title: 'NFT Minting',
    subtitle: 'Carbon Credit NFT',
    description: 'The verified carbon data becomes a unique digital certificate (NFT) that proves this carbon credit is real.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    color: 'from-cyan-glow to-eco-400',
    bgColor: 'bg-cyan-glow/10',
    borderColor: 'border-cyan-glow/30',
  },
  {
    id: 7,
    title: 'Token Issuance',
    subtitle: 'BCX Tokens',
    description: 'Carbon credits become tradeable BCX tokens. Each token represents real, verified carbon stored by coastal ecosystems.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 8h-6a2 2 0 100 4h4a2 2 0 110 4H8" />
        <path d="M12 6v2M12 16v2" />
      </svg>
    ),
    color: 'from-ocean-400 to-eco-500',
    bgColor: 'bg-ocean-400/10',
    borderColor: 'border-ocean-400/30',
  },
  {
    id: 8,
    title: 'Marketplace',
    subtitle: 'Trade & Retire',
    description: 'Buyers can purchase, trade, or retire carbon credits on the marketplace — all fully transparent.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    color: 'from-eco-400 to-cyan-glow',
    bgColor: 'bg-eco-400/10',
    borderColor: 'border-eco-400/30',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="section-gradient py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-cyan w-[400px] h-[400px] top-1/3 -right-40 opacity-[0.06]" />
      <div className="orb orb-green w-[300px] h-[300px] bottom-20 -left-20 opacity-[0.05]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-ocean-300 mb-4">
              Core Flow
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How{' '}
              <span className="gradient-text">BlueCarbonX</span>{' '}
              Works
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              From raw satellite data to tradeable carbon credits — step by step.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Step Navigation — Horizontal scroll on mobile */}
          <ScrollReveal delay={0.2}>
            <div className="flex overflow-x-auto pb-4 mb-10 gap-2 scrollbar-hide justify-start md:justify-center">
              {steps.map((step, i) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    activeStep === i
                      ? `${step.bgColor} ${step.borderColor} text-white shadow-lg`
                      : 'bg-transparent border-white/5 text-white/40 hover:text-white/60 hover:border-white/10'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                    activeStep === i
                      ? `bg-gradient-to-br ${step.color} text-white`
                      : 'bg-white/5 text-white/40'
                  }`}>
                    {step.id}
                  </span>
                  <span className="whitespace-nowrap">{step.title}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Progress bar */}
          <ScrollReveal delay={0.3}>
            <div className="relative h-1 bg-white/5 rounded-full mb-12 max-w-4xl mx-auto overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-ocean-400 via-eco-500 to-cyan-glow"
                initial={{ width: '0%' }}
                animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />
              {/* Dots */}
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-0">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      i <= activeStep
                        ? 'bg-eco-400 shadow-glow-eco scale-100'
                        : 'bg-white/10 scale-75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Step Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden"
            >
              {/* Large step number background */}
              <div className="absolute -top-8 -right-4 text-[180px] font-display font-black text-white/[0.02] leading-none select-none pointer-events-none">
                {steps[activeStep].id}
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center text-white shadow-lg`}>
                  {steps[activeStep].icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-md ${steps[activeStep].bgColor} ${steps[activeStep].borderColor} border`}>
                      Step {steps[activeStep].id}
                    </span>
                    <span className="text-sm text-white/30">
                      {steps[activeStep].subtitle}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-white/50 text-base leading-relaxed max-w-xl">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex justify-between mt-8 pt-6 border-t border-white/5">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white disabled:opacity-20 disabled:hover:text-white/40 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-white disabled:opacity-20 disabled:hover:text-white/40 transition-colors"
                >
                  Next
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mini flow visualization */}
          <ScrollReveal delay={0.4}>
            <div className="flex items-center justify-center mt-12 gap-1 md:gap-2 flex-wrap">
              {steps.map((step, i) => (
                <div key={step.id} className="flex items-center gap-1 md:gap-2">
                  <button
                    onClick={() => setActiveStep(i)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                      i <= activeStep
                        ? 'text-eco-400 bg-eco-500/10'
                        : 'text-white/20'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold ${
                      i <= activeStep
                        ? `bg-gradient-to-br ${step.color} text-white`
                        : 'bg-white/5'
                    }`}>
                      {i < activeStep ? '✓' : step.id}
                    </span>
                    <span className="hidden sm:inline">{step.title}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" 
                      stroke={i < activeStep ? '#00c896' : 'rgba(255,255,255,0.1)'} 
                      strokeWidth="2" className="flex-shrink-0"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
