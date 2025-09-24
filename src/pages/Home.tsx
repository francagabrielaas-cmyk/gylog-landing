import Header from '../components/Header'
import Hero from '../components/Hero'
import TwoColInfo from '../components/TwoColInfo'
import PillarsGrid from '../components/PillarsGrid'
import KitTypesSidebar from '../components/KitTypesSidebar'
import PhotoPanel from '../components/PhotoPanel'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

const Home = () => {
  const montagemFeatures = [
    'Equipe especializada',
    'Tecnologia avançada',
    'Precisão',
    'Flexibilidade',
    'Agilidade',
    'Redução de custos'
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <TwoColInfo
          badge="Montagem de Kits"
          title="A Gylog oferece montagem de kits personalizados, integrando processos logísticos com precisão."
          description="Nossa solução otimiza operações, reduz custos e garante eficiência, atendendo às demandas específicas de cada cliente com qualidade e agilidade em todas as etapas."
          features={montagemFeatures}
          imageSrc="/imagens/montagem-de-kits-gylog.png"
          imageAlt="Pessoas em instalação moderna montando produtos cosméticos ou de cuidados pessoais"
        />
        
        <PillarsGrid />
        
        {/* Tipos de Kits Section */}
        <section id="tipos" className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <KitTypesSidebar />
              <PhotoPanel
                imageSrc="/imagens/montagem-de-kits-dois.png"
                imageAlt="Esteira em armazém ou fábrica com vários produtos se movendo"
                className="lg:sticky lg:top-24"
              />
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default Home
