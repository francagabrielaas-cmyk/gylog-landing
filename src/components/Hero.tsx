import { motion, useScroll, useTransform } from 'framer-motion'
import Glow from './Glow'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 20])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8])

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-primary/70 z-10" />
        <div className="absolute inset-0 bg-black/40 z-20" />
        <img
          src="/imagens/background.png"
          alt="Pessoa interagindo com tablet em ambiente logístico"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-30 w-full"
        style={{ opacity }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container-custom py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="rounded-2xl p-8">
              <Glow intensity="high">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-left drop-shadow-lg">
                  Kits Promocionais
                </h1>
              </Glow>
              
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed text-left drop-shadow-md">
                Nós cuidamos da montagem, você foca nas vendas. Solicite orçamento agora!
              </p>
              
              <motion.button
                onClick={scrollToContact}
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Solicitar orçamento para montagem de kits"
              >
                Monte seu kit agora!
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
