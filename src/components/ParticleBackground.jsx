import { useEffect, useRef } from 'react'

export default function ParticleBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let particles = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const handleMouse = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouse)

    // Create particles
    const PARTICLE_COUNT = Math.min(120, Math.floor(window.innerWidth / 15))
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 0.5,
        color: Math.random() > 0.5 
          ? `rgba(0, 180, 216, ${Math.random() * 0.5 + 0.1})`
          : `rgba(0, 200, 150, ${Math.random() * 0.4 + 0.1})`,
        baseOpacity: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const opacity = (1 - dist / 150) * 0.12
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 245, 212, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw and update particles
      particles.forEach((p) => {
        // Mouse interaction
        const dmx = mouseX - p.x
        const dmy = mouseY - p.y
        const mouseDist = Math.sqrt(dmx * dmx + dmy * dmy)
        if (mouseDist < 200) {
          const force = (200 - mouseDist) / 200
          p.vx -= (dmx / mouseDist) * force * 0.02
          p.vy -= (dmy / mouseDist) * force * 0.02
        }

        p.x += p.vx
        p.y += p.vy

        // Dampen velocity
        p.vx *= 0.999
        p.vy *= 0.999

        // Wrap edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Subtle glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2)
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3)
        grd.addColorStop(0, p.color.replace(/[\d.]+\)$/, '0.15)'))
        grd.addColorStop(1, 'transparent')
        ctx.fillStyle = grd
        ctx.fill()
      })

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="particle-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
