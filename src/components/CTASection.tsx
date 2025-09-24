import { motion } from 'framer-motion'
import PhotoPanel from './PhotoPanel'

const CTASection = () => {
  const openWhatsApp = () => {
    const phoneNumber = '5511911566511'
    const message = 'Olá! Gostaria de solicitar um orçamento para montagem de kits promocionais.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PhotoPanel
              imageSrc="/imagens/montagem-de-kits.png"
              imageAlt="Trabalhadores em coletes laranja trabalhando em esteira com caixas de papelão em armazém"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Pronto para montar seus kits com quem entende de logística?
            </h2>
            
            <div className="space-y-4 text-lg text-ink">
              <p>Seu kit, do seu jeito, entregue com a nossa eficiência!</p>
              <p>Chega de dor de cabeça.</p>
              <p>A Gylog cuida da montagem e da entrega.</p>
            </div>

            <motion.button
              onClick={openWhatsApp}
              className="btn-secondary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Falar com equipe via WhatsApp e receber orçamento personalizado"
            >
              Fale agora com nosso time e receba seu orçamento personalizado.
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
