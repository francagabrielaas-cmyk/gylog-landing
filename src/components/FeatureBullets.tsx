import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

interface FeatureBulletsProps {
  features: string[]
  className?: string
}

const FeatureBullets = ({ features, className = '' }: FeatureBulletsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-left ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex items-center space-x-3"
          variants={itemVariants}
        >
          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
          <span className="text-ink font-medium">{feature}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default FeatureBullets
