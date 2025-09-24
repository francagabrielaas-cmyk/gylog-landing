import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowProps {
  children: ReactNode
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

const Glow = ({ children, className = '', intensity = 'medium' }: GlowProps) => {
  const intensityClasses = {
    low: 'opacity-30',
    medium: 'opacity-50',
    high: 'opacity-70'
  }

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/30 to-accent/30 blur-xl ${intensityClasses[intensity]} -z-10`}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      {children}
    </div>
  )
}

export default Glow
