import { motion } from 'framer-motion'
import { MapPin, Globe, Users, Settings, BarChart3, CheckCircle } from 'lucide-react'
import Glow from './Glow'

interface Pillar {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

const pillars: Pillar[] = [
  {
    icon: MapPin,
    title: 'Localização privilegiada',
    description: 'Estamos posicionados em um dos principais polos logísticos do país, com fácil acesso às principais rodovias, garantindo mais agilidade e eficiência.'
  },
  {
    icon: Globe,
    title: 'Tecnologia avançada',
    description: 'Uso de sistemas integrados que otimizam o processo e asseguram controle em tempo real.'
  },
  {
    icon: Users,
    title: 'Equipe especializada',
    description: 'Profissionais capacitados para entregar excelência e agilidade em cada etapa da montagem.'
  },
  {
    icon: Settings,
    title: 'Personalização completa',
    description: 'Soluções ajustadas às necessidades específicas de cada cliente, garantindo kits montados com precisão.'
  },
  {
    icon: BarChart3,
    title: 'Eficiência operacional',
    description: 'Redução de custos e prazos com processos eficientes e planejados estrategicamente.'
  },
  {
    icon: CheckCircle,
    title: 'Qualidade garantida',
    description: 'Rigorosos padrões de controle que asseguram a conformidade e qualidade dos kits entregues.'
  }
]

const PillarsGrid = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="pilares" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-left">
            Por que escolher a Gylog?
          </h2>
          <p className="text-lg text-ink max-w-3xl text-left">
            Conheça os pilares que fazem da Gylog a melhor escolha para montagem de seus kits promocionais
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon
            return (
              <motion.div
                key={index}
                className="card card-hover p-6 group cursor-pointer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Glow intensity="low" className="group-hover:opacity-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-ink leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Glow>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default PillarsGrid
