import { motion } from 'framer-motion'

interface BadgedHeadingProps {
  badge: string
  title: string
  className?: string
}

const BadgedHeading = ({ badge, title, className = '' }: BadgedHeadingProps) => {
  return (
    <motion.div
      className={`text-left ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span className="badge mb-4">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
        {title}
      </h2>
    </motion.div>
  )
}

export default BadgedHeading
