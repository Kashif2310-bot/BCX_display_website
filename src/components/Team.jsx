import { motion } from 'framer-motion'
import ScrollReveal from './ScrollReveal'

const team = [
  {
    name: 'Kashif Ahmed',
    role: 'Project Lead',
    bio: 'Full-stack architect driving the vision of transparent blue carbon MRV through AI and blockchain convergence.',
    gradient: 'from-ocean-400 to-eco-500',
    initials: 'KA',
  },
  {
    name: 'Sarah Chen',
    role: 'AI / ML Engineer',
    bio: 'Computer vision specialist building satellite imagery analysis pipelines for ecosystem detection and carbon quantification.',
    gradient: 'from-eco-500 to-cyan-glow',
    initials: 'SC',
  },
  {
    name: 'David Okonkwo',
    role: 'Blockchain Developer',
    bio: 'Smart contract architect designing multi-sig governance, NFT minting, and marketplace logic on Polygon.',
    gradient: 'from-cyan-glow to-ocean-300',
    initials: 'DO',
  },
  {
    name: 'Maria Santos',
    role: 'Climate Scientist',
    bio: 'Blue carbon domain expert ensuring accurate MRV methodology and alignment with international carbon standards.',
    gradient: 'from-ocean-300 to-eco-400',
    initials: 'MS',
  },
  {
    name: 'Alex Kim',
    role: 'Frontend Engineer',
    bio: 'User experience engineer crafting intuitive interfaces for data upload, verification tracking, and marketplace interactions.',
    gradient: 'from-eco-400 to-ocean-400',
    initials: 'AK',
  },
  {
    name: 'Priya Sharma',
    role: 'DevOps & IPFS',
    bio: 'Infrastructure engineer managing decentralized storage, CI/CD pipelines, and system performance optimization.',
    gradient: 'from-ocean-400 to-cyan-glow',
    initials: 'PS',
  },
]

export default function Team() {
  return (
    <section id="team" className="section-dark py-24 md:py-36 relative overflow-hidden">
      <div className="orb orb-blue w-[400px] h-[400px] top-0 left-1/3 opacity-[0.05]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-ocean-300 mb-4">
              The Team
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Built by{' '}
              <span className="gradient-text">Passionate</span>{' '}
              Minds
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">
              A cross-disciplinary team united by the mission to make blue carbon MRV transparent, efficient, and accessible.
            </p>
          </div>
        </ScrollReveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-8 group relative overflow-hidden"
              >
                {/* Hover glow gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500 rounded-[20px]`} />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-glow-cyan transition-all duration-300 group-hover:scale-105`}>
                    <span className="text-white font-display font-bold text-lg">
                      {member.initials}
                    </span>
                  </div>

                  {/* Info */}
                  <h3 className="font-display text-lg font-semibold text-white mb-1 group-hover:text-eco-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium gradient-text-eco mb-3">
                    {member.role}
                  </p>
                  <p className="text-white/35 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Social links placeholder */}
                  <div className="flex gap-3 mt-5 pt-5 border-t border-white/5">
                    <a href="#" className="text-white/20 hover:text-ocean-300 transition-colors duration-300" aria-label="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white/20 hover:text-ocean-300 transition-colors duration-300" aria-label="LinkedIn">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white/20 hover:text-ocean-300 transition-colors duration-300" aria-label="Twitter">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
