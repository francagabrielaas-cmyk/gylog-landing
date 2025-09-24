import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contato" className="bg-primary text-white">
      <div className="container-custom section-padding">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contato:</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a
                  href="mailto:gabriela.augusto@gylog.com"
                  className="hover:text-accent transition-colors duration-200"
                >
                  gabriela.augusto@gylog.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a
                  href="https://wa.me/5511911566511"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200"
                >
                  (11) 91156-6511
                </a>
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <button
              onClick={scrollToTop}
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Voltar ao topo"
            >
              <img
                src="/logo/logo-gylog.png"
                alt="Gylog Logo"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </button>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Certificações de qualidade:</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition-colors duration-300">
                <img
                  src="/certificacoes/inmetro.png"
                  alt="Certificação INMETRO"
                  className="h-12 w-auto mx-auto mb-2"
                />
                <div className="text-xs font-semibold">INMETRO</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition-colors duration-300">
                <img
                  src="/certificacoes/anvisa.png"
                  alt="Certificação ANVISA"
                  className="h-12 w-auto mx-auto mb-2"
                />
                <div className="text-xs font-semibold">ANVISA</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition-colors duration-300">
                <img
                  src="/certificacoes/sgs.png"
                  alt="Certificação SGS"
                  className="h-12 w-auto mx-auto mb-2"
                />
                <div className="text-xs font-semibold">SGS</div>
              </div>
              <div className="bg-white/20 rounded-lg p-3 text-center hover:bg-white/30 transition-colors duration-300">
                <img
                  src="/certificacoes/smeta.png"
                  alt="Certificação SMETA"
                  className="h-12 w-auto mx-auto mb-2"
                />
                <div className="text-xs font-semibold">SMETA</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          className="border-t border-white/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-white/70 text-sm">
            ©2023 gylog logistica
          </p>
          <a
            href="#"
            className="text-white/70 hover:text-accent transition-colors duration-200 text-sm"
          >
            Política de Privacidade
          </a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
