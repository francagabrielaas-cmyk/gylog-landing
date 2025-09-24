import { motion } from 'framer-motion'
import { getImagePath } from '../utils/paths'

interface PhotoPanelProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

const PhotoPanel = ({ imageSrc, imageAlt, className = '' }: PhotoPanelProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={getImagePath(imageSrc)}
          alt={imageAlt}
          className="w-full h-80 lg:h-96 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-accent rounded-full animate-pulse" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
      </div>
    </motion.div>
  )
}

export default PhotoPanel
