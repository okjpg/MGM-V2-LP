import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layout, Menu, X, ChevronRight, Globe } from 'lucide-react';
import { DashboardHero } from './components/features/DashboardHero';
import { SummariesFeature } from './components/features/SummariesFeature';
import { AlertsFeature } from './components/features/AlertsFeature';
import { AnalyticsFeature } from './components/features/AnalyticsFeature';
import { AIChatFeature } from './components/features/AIChatFeature';
import { IntegrationsFeature } from './components/features/IntegrationsFeature';
import { PricingFeature } from './components/features/PricingFeature';
import { MemberInsightsFeature } from './components/features/MemberInsightsFeature';
import { WorkflowsFeature } from './components/features/WorkflowsFeature';
import { TargetAudienceFeature } from './components/features/TargetAudienceFeature';
import { TactileButton } from './components/ui/Card';
import { ScrollReveal } from './components/ui/ScrollReveal';
import { ContainerScroll } from './components/ui/ContainerScroll';
import { AnalyticsDashboard } from './components/pages/AnalyticsDashboard';

export type Language = 'en' | 'pt';

const content = {
  en: {
    nav: {
      features: 'Features',
      analytics: 'Analytics',
      pricing: 'Pricing',
      dashboard: 'View Dashboard Demo',
      back: 'Back to Home'
    },
    hero: {
      new: 'New: AI Analysis 2.0',
      title1: 'Community insights',
      title2: 'that actually matter.',
      subtitle: 'MGM turns noisy chat logs into actionable intelligence. Monitor, summarize, and grow with tactile precision.',
      ctaLive: 'View Live Dashboard',
      ctaFeatures: 'See Features',
      trusted: 'Trusted by 500+ Community Managers'
    },
    footer: {
      title: 'Ready to calm the chaos?',
      desc: 'Join thousands of community builders who use MGM to turn conversation into conversion.',
      cta: 'View Live Dashboard',
      product: 'Product',
      company: 'Company',
      rights: 'All rights reserved.'
    }
  },
  pt: {
    nav: {
      features: 'Funcionalidades',
      analytics: 'Análise',
      pricing: 'Preços',
      dashboard: 'Ver Demo do Painel',
      back: 'Voltar ao Início'
    },
    hero: {
      new: 'Novo: Análise IA 2.0',
      title1: 'Insights de comunidade',
      title2: 'que realmente importam.',
      subtitle: 'O MGM transforma logs de chat ruidosos em inteligência acionável. Monitore, resuma e cresça com precisão tátil.',
      ctaLive: 'Ver Painel Ao Vivo',
      ctaFeatures: 'Ver Funcionalidades',
      trusted: 'Confiado por mais de 500 Gestores'
    },
    footer: {
      title: 'Pronto para acalmar o caos?',
      desc: 'Junte-se a milhares de construtores de comunidades que usam o MGM para transformar conversa em conversão.',
      cta: 'Ver Painel Ao Vivo',
      product: 'Produto',
      company: 'Empresa',
      rights: 'Todos os direitos reservados.'
    }
  }
};

interface NavbarProps {
  onToggleDashboard: () => void;
  onLogoClick: () => void;
  isDashboardActive: boolean;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar = ({ onToggleDashboard, onLogoClick, isDashboardActive, lang, setLang }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = content[lang].nav;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={onLogoClick}>
           <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
             <Layout size={18} fill="currentColor" stroke="none" />
           </div>
           <span className="font-bold text-xl tracking-tight text-stone-900">MyGroupMetrics</span>
        </div>
        
        {!isDashboardActive && (
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">{t.features}</a>
            <a href="#analytics" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">{t.analytics}</a>
            <a href="#pricing" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">{t.pricing}</a>
          </div>
        )}

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-stone-100 rounded-full p-1 border border-stone-200">
             <button 
               onClick={() => setLang('en')} 
               className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
             >
               EN
             </button>
             <button 
               onClick={() => setLang('pt')} 
               className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'pt' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}
             >
               PT
             </button>
          </div>
          <TactileButton onClick={onToggleDashboard} primary={isDashboardActive}>
             {isDashboardActive ? t.back : t.dashboard}
          </TactileButton>
        </div>

        <div className="md:hidden flex items-center gap-4">
           <div className="flex items-center bg-stone-100 rounded-full p-1 border border-stone-200">
             <button 
               onClick={() => setLang('en')} 
               className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400'}`}
             >
               EN
             </button>
             <button 
               onClick={() => setLang('pt')} 
               className={`px-2 py-1 rounded-full text-[10px] font-bold transition-all ${lang === 'pt' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400'}`}
             >
               PT
             </button>
          </div>
          <button className="p-2 text-stone-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-stone-100 p-6 flex flex-col gap-6 md:hidden shadow-2xl overflow-hidden"
          >
            <a href="#features" onClick={() => setIsOpen(false)} className="font-medium text-lg text-stone-800">{t.features}</a>
            <a href="#analytics" onClick={() => setIsOpen(false)} className="font-medium text-lg text-stone-800">{t.analytics}</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="font-medium text-lg text-stone-800">{t.pricing}</a>
            <hr className="border-stone-100"/>
            <TactileButton onClick={() => { onToggleDashboard(); setIsOpen(false); }} primary className="justify-center py-3">
               {isDashboardActive ? t.back : t.dashboard}
            </TactileButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroText = ({ onViewDashboard, lang }: { onViewDashboard: () => void, lang: Language }) => {
  const t = content[lang].hero;
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-16 text-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] bg-gradient-to-b from-orange-100/40 to-transparent rounded-[100%] blur-3xl -z-10" />
      
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm cursor-pointer hover:border-orange-200"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>{t.new}</span>
          <ChevronRight size={14} className="text-stone-400" />
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 tracking-tight mb-6 md:mb-8 max-w-5xl mx-auto leading-[1.05]">
          {t.title1} <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">{t.title2}</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-stone-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-2">
          {t.subtitle}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <TactileButton onClick={onViewDashboard} primary className="w-full sm:w-auto px-8 py-4 text-lg h-14 rounded-2xl justify-center">
             {t.ctaLive}
          </TactileButton>
          <TactileButton className="w-full sm:w-auto px-8 py-4 text-lg h-14 rounded-2xl flex items-center justify-center gap-2">
            {t.ctaFeatures} <ChevronRight size={16} />
          </TactileButton>
        </div>

        <p className="mt-8 text-xs text-stone-400 uppercase tracking-widest font-semibold">
          {t.trusted}
        </p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [showDashboard, setShowDashboard] = useState(false);
  const [lang, setLang] = useState<Language>('en');

  const t = content[lang];

  const handleLogoClick = () => {
    setShowDashboard(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleDashboard = () => {
    setShowDashboard(!showDashboard);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showDashboard) {
    return (
      <div className="min-h-screen bg-[#FDFBF7]">
        <Navbar 
          onToggleDashboard={handleToggleDashboard} 
          onLogoClick={handleLogoClick} 
          isDashboardActive={true} 
          lang={lang}
          setLang={setLang}
        />
        <div className="pt-20">
          <AnalyticsDashboard onBack={handleLogoClick} lang={lang} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900 bg-dot-pattern overflow-x-hidden">
      <Navbar 
        onToggleDashboard={handleToggleDashboard} 
        onLogoClick={handleLogoClick} 
        isDashboardActive={false} 
        lang={lang}
        setLang={setLang}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 origin-left z-50" 
        style={{ scaleX }}
      />

      <main>
        {/* Main Dashboard Hero Feature */}
        <section className="relative z-10 pt-20">
          <ContainerScroll titleComponent={<HeroText onViewDashboard={() => setShowDashboard(true)} lang={lang} />}>
            <DashboardHero lang={lang} />
          </ContainerScroll>
        </section>

        <section className="mb-0 mt-12 md:mt-20 relative z-20">
          <IntegrationsFeature lang={lang} />
        </section>

        {/* Features Sections */}
        <section id="features" className="bg-white border-y border-stone-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SummariesFeature lang={lang} />
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-stone-50/50 to-white">
           <AIChatFeature lang={lang} />
        </section>

        <section className="relative">
           <AlertsFeature lang={lang} />
        </section>

        <section id="analytics" className="bg-white border-y border-stone-100">
           <AnalyticsFeature lang={lang} />
        </section>

        <section className="relative">
           <MemberInsightsFeature lang={lang} />
        </section>

        <section className="bg-white border-y border-stone-100">
           <WorkflowsFeature lang={lang} />
        </section>

        <section className="relative bg-stone-50/20 border-t border-stone-100">
          <TargetAudienceFeature lang={lang} />
        </section>

        <section id="pricing" className="bg-[#FDFBF7]">
          <PricingFeature lang={lang} />
        </section>

        {/* Call to Action Footer */}
        <section className="py-24 px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-stone-900 rounded-[2.5rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/30 blur-[100px] rounded-full"></div>
               
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">{t.footer.title}</h2>
                 <p className="text-lg md:text-xl text-stone-400 mb-8 md:mb-10 max-w-2xl mx-auto">{t.footer.desc}</p>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   onClick={() => setShowDashboard(true)}
                   className="bg-white text-stone-900 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full md:w-auto"
                 >
                   {t.footer.cta}
                 </motion.button>
               </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="bg-white text-stone-500 py-20 border-t border-stone-200">
           <div className="max-w-7xl mx-auto px-4 md:px-8">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 mb-6 text-stone-900">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white">
                      <Layout size={18} fill="currentColor" stroke="none" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">MyGroupMetrics</span>
                 </div>
                 <p className="max-w-sm text-lg font-light">
                   The operating system for modern communities. <br/>Built for calmness in a chaotic world.
                 </p>
               </div>
               <div>
                 <h4 className="text-stone-900 font-bold mb-6">{t.footer.product}</h4>
                 <ul className="space-y-4">
                   <li><a href="#" className="hover:text-orange-600 transition-colors">{t.nav.features}</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Integrations</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">{t.nav.pricing}</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-stone-900 font-bold mb-6">{t.footer.company}</h4>
                 <ul className="space-y-4">
                   <li><a href="#" className="hover:text-orange-600 transition-colors">About</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Blog</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Contact</a></li>
                 </ul>
               </div>
             </div>
             <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-sm">
               <p className="mb-4 md:mb-0">&copy; 2024 MyGroupMetrics Inc. {t.footer.rights}</p>
               <div className="flex gap-6">
                 <a href="#" className="hover:text-stone-900">Privacy</a>
                 <a href="#" className="hover:text-stone-900">Terms</a>
               </div>
             </div>
           </div>
        </footer>
      </main>
    </div>
  );
}
