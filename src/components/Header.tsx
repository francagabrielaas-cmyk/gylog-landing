import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    const phoneNumber = '5511911566511'
    const message = 'Olá! Gostaria de solicitar um orçamento para montagem de kits promocionais.'
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/logo/logo-gylog.png"
              alt="Gylog Logo"
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              Sobre nós
            </button>
            <button
              onClick={() => scrollToSection('montagem')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              Montagem de Kits
            </button>
            <button
              onClick={() => scrollToSection('pilares')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              Por que escolher a Gylog?
            </button>
            <button
              onClick={() => scrollToSection('tipos')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              Tipos de Kits
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-primary hover:text-accent transition-colors duration-200 font-medium"
            >
              Fale Conosco
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={openWhatsApp}
              className="btn-primary"
              aria-label="Solicitar orçamento via WhatsApp"
            >
              Orçar Agora!
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-accent transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-primary hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                Sobre nós
              </button>
              <button
                onClick={() => scrollToSection('montagem')}
                className="block w-full text-left text-primary hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                Montagem de Kits
              </button>
              <button
                onClick={() => scrollToSection('pilares')}
                className="block w-full text-left text-primary hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                Por que escolher a Gylog?
              </button>
              <button
                onClick={() => scrollToSection('tipos')}
                className="block w-full text-left text-primary hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                Tipos de Kits
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-primary hover:text-accent transition-colors duration-200 font-medium py-2"
              >
                Fale Conosco
              </button>
              <button
                onClick={openWhatsApp}
                className="btn-primary w-full mt-4"
                aria-label="Solicitar orçamento via WhatsApp"
              >
                Orçar Agora!
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
