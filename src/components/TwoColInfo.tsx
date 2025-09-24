import { motion } from 'framer-motion'
import FeatureBullets from './FeatureBullets'
import { getImagePath } from '../utils/paths'

interface TwoColInfoProps {
  badge: string
  title: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  reverse?: boolean
}

const TwoColInfo = ({
  badge,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reverse = false
}: TwoColInfoProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reverse ? 'lg:grid-flow-col-dense' : ''
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div
            className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
            variants={itemVariants}
          >
            <div className="text-left">
              <span className="badge mb-4">{badge}</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
                {title}
              </h2>
            </div>
            <p className="text-lg text-ink leading-relaxed text-left">
              {description}
            </p>
            <FeatureBullets features={features} />
          </motion.div>

          {/* Image */}
          <motion.div
            className={`${reverse ? 'lg:col-start-1' : ''}`}
            variants={itemVariants}
          >
            <div className="relative">
              <img
                src={getImagePath(imageSrc)}
                alt={imageAlt}
                className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TwoColInfo
