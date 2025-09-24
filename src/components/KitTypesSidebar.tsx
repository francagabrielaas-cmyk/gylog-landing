import { motion } from 'framer-motion'
import { Heart, Sparkles, BookOpen, Droplets, Gift, Plus } from 'lucide-react'

interface KitType {
  icon: React.ComponentType<{ className?: string }>
  label: string
  isLast?: boolean
}

const kitTypes: KitType[] = [
  { icon: Heart, label: 'Kits Pets' },
  { icon: Sparkles, label: 'Kits de Beleza' },
  { icon: BookOpen, label: 'Kits de Livros' },
  { icon: Droplets, label: 'Kits de Limpeza' },
  { icon: Gift, label: 'Brindes Corporativos' },
  { icon: Plus, label: 'E muito mais!', isLast: true }
]

const KitTypesSidebar = () => {
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

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-left">
        <span className="badge mb-4">Tipos de Kits Que Montamos</span>
        <div className="space-y-3">
          {kitTypes.map((kitType, index) => {
            const IconComponent = kitType.icon
            return (
              <motion.button
                key={index}
                className={`w-full flex items-center space-x-3 p-4 rounded-xl border border-gray-200 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 text-left group ${
                  kitType.isLast ? 'font-semibold text-primary' : 'text-ink'
                }`}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                {!kitType.isLast && (
                  <IconComponent className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                )}
                {kitType.isLast && (
                  <Plus className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                )}
                <span className="font-medium">{kitType.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>

      <motion.button
        onClick={scrollToContact}
        className="btn-primary w-full mt-8"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Solicitar orçamento personalizado"
      >
        Quero meu orçamento!
      </motion.button>
    </motion.div>
  )
}

export default KitTypesSidebar
