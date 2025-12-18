import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Layout, ArrowRight, PlayCircle, ChevronRight } from 'lucide-react';
import { AnimatedShinyText } from './components/ui/AnimatedShinyText';
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
import { ScrollReveal } from './components/ui/ScrollReveal';
import { GradualSpacing } from './components/ui/GradualSpacing';

import { cn } from './lib/utils';

export type Language = 'en' | 'pt';

const content = {
  en: {
    hero: {
      title: 'Community intelligence, simplified.',
      highlight: 'intelligence',
      subtitle: 'MGM transforms noisy chat logs into actionable insights. Monitor sentiment, predict churn, and grow your community with tactile precision.',
      cta: 'Book a Demo',
      login: 'Login',
      new: 'MGM AI 2.0 is now live'
    },
    footer: {
      title: 'Ready to calm the chaos?',
      desc: 'Join thousands of community builders who use MGM to turn conversation into conversion.',
      cta: 'Book a Demo',
      product: 'Product',
      company: 'Company',
      rights: 'All rights reserved.'
    }
  },
  pt: {
    hero: {
      title: 'Inteligência de comunidade, simplificada.',
      highlight: 'Inteligência',
      subtitle: 'MGM transforma grupos de whatsapp em insights acionáveis. Monitore sentimento, preveja churn e cresça sua comunidade de dados.',
      cta: 'Agendar Demo',
      login: 'Entrar',
      new: 'MGM AI 2.0 está no ar'
    },
    footer: {
      title: 'Pronto para acalmar o caos?',
      desc: 'Junte-se a milhares de construtores de comunidades que usam o MGM para transformar conversa em conversão.',
      cta: 'Agendar Demo',
      product: 'Produto',
      company: 'Empresa',
      rights: 'Todos os direitos reservados.'
    }
  }
};

// --- Minimal Button Component for Hero ---
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline', size?: 'default' | 'sm' | 'lg', asChild?: boolean }>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    const variants = {
      default: "bg-stone-900 text-stone-50 hover:bg-stone-800 shadow-sm",
      outline: "border border-stone-200 bg-white hover:bg-stone-50 hover:text-stone-900"
    };
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// --- Logo Component ---
export const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
        <Layout size={18} fill="currentColor" stroke="none" />
      </div>
      <span className="font-bold text-xl tracking-tight text-stone-900">MGM</span>
    </div>
  )
}

// --- New Ultra-Modern Hero Section ---
export const HeroSection = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = content[lang].hero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: lang === 'en' ? 'Home' : 'Início', href: '#features' },
    { name: 'Analytics 2.0', href: '#analytics' },
    { name: lang === 'en' ? 'Pricing' : 'Preços', href: '#pricing' },
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#FDFBF7]">
      {/* Background Dot Pattern (Matched to Global) */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-orange-50/40 to-transparent pointer-events-none z-0 mix-blend-multiply" />

      {/* Sticky Navigation */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 z-50 relative">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">{item.name}</a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200/50 mr-2">
              <button onClick={() => setLang('en')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>EN</button>
              <button onClick={() => setLang('pt')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'pt' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>PT</button>
            </div>
            <a href="#" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3">{t.login}</a>
            <Button variant="default" size="sm" className="rounded-full px-5 h-9">{t.cta}</Button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden z-50 p-2 text-stone-900" onClick={() => setMenuState(!menuState)}>
            {menuState ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuState && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-stone-100 p-6 md:hidden shadow-xl flex flex-col gap-4 animate-in slide-in-from-top-5">
            {menuItems.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-medium text-stone-900" onClick={() => setMenuState(false)}>{item.name}</a>
            ))}
            <div className="h-px bg-stone-100 w-full my-2" />
            <Button className="w-full">{t.cta}</Button>
          </div>
        )}
      </header>

      <main className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

          {/* Announcement Pill */}
          <motion.a
            href="#analytics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm mb-8 cursor-pointer hover:shadow-md hover:bg-white/40 transition-all group"
          >
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
            <AnimatedShinyText className="inline-flex items-center gap-1 text-sm font-medium">
              {t.new}
            </AnimatedShinyText>
            <ChevronRight size={14} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>

          {/* Headline with Gradual Spacing and Highlight */}
          <GradualSpacing
            text={t.title}
            highlight={t.highlight}
            highlightClassName="!text-orange-500"
            className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-stone-900 leading-[1.05]"
          />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-stone-500 max-w-2xl mb-10 leading-relaxed font-light mt-4"
          >
            {t.subtitle}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-20"
          >
            <button className="h-12 px-8 rounded-full bg-stone-900 text-white font-semibold hover:bg-stone-800 transition-all flex items-center gap-2 shadow-xl shadow-stone-900/20 hover:scale-105 active:scale-95 duration-200">
              {t.cta} <ArrowRight size={16} />
            </button>
            <button className="h-12 px-8 rounded-full bg-white border border-stone-200 text-stone-600 font-semibold hover:bg-stone-50 transition-all flex items-center gap-2 hover:border-stone-300 hover:text-stone-900 hover:scale-105 active:scale-95 duration-200 shadow-sm">
              <PlayCircle size={18} /> {lang === 'en' ? 'Watch Demo' : 'Ver Demo'}
            </button>
          </motion.div>

          {/* Dashboard Container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-6xl mx-auto perspective-1000"
          >
            {/* Glow Behind */}
            <div className="absolute -inset-4 bg-gradient-to-b from-orange-500/20 to-transparent blur-3xl opacity-40 rounded-[3rem] pointer-events-none" />

            {/* Bezel */}
            <div className="relative rounded-[1.5rem] bg-gradient-to-b from-stone-100 to-stone-200/50 p-2 ring-1 ring-inset ring-stone-900/5 lg:rounded-[2rem] lg:p-3 shadow-2xl">
              {/* Inner Screen */}
              <div className="rounded-[1.2rem] lg:rounded-[1.7rem] bg-white overflow-hidden border border-stone-200/60 shadow-inner">
                <DashboardHero lang={lang} />
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [currentPage, setCurrentPage] = useState<'home' | 'analytics' | 'timeline'>('home');

  const t = content[lang];

  // Hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#analytics') {
        setCurrentPage('analytics');
        window.scrollTo(0, 0);
      } else if (hash === '#timeline') {
        setCurrentPage('timeline');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToAnalytics = () => {
    window.location.hash = 'analytics';
    window.scrollTo(0, 0);
  };

  const navigateToHome = () => {
    window.location.hash = '';
  };

  // Lazy load pages
  const AnalyticsLP = React.lazy(() => import('./components/pages/AnalyticsLP').then(m => ({ default: m.AnalyticsLP })));
  const TimelineMGM = React.lazy(() => import('./components/pages/TimelineMGM').then(m => ({ default: m.TimelineMGM })));

  if (currentPage === 'analytics') {
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center"><div className="animate-pulse text-stone-400">Loading...</div></div>}>
        <AnalyticsLP lang={lang} onBack={navigateToHome} setLang={setLang} />
      </React.Suspense>
    );
  }

  if (currentPage === 'timeline') {
    return (
      <React.Suspense fallback={<div className="min-h-screen bg-[#FDFBF7] flex items-center justify-center"><div className="animate-pulse text-stone-400">Loading...</div></div>}>
        <TimelineMGM lang={lang} onBack={navigateToHome} setLang={setLang} />
      </React.Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900 bg-dot-pattern overflow-x-hidden">

      <main>
        {/* Main Dashboard Hero Feature */}
        <HeroSection lang={lang} setLang={setLang} />

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
              {/* Noise texture */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none" />

              {/* Rotating Logo Background - Ultra Modern */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Outer slow rotation */}
                <motion.div
                  className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="ctaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0.03" />
                      </linearGradient>
                    </defs>
                    {/* Dashboard grid pattern */}
                    <rect x="35" y="35" width="30" height="30" rx="6" fill="url(#ctaGrad1)" />
                    <rect x="10" y="35" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                    <rect x="70" y="35" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                    <rect x="35" y="10" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                    <rect x="35" y="70" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                    {/* Corner accents */}
                    <rect x="12" y="12" width="12" height="12" rx="3" fill="url(#ctaGrad1)" />
                    <rect x="76" y="12" width="12" height="12" rx="3" fill="url(#ctaGrad1)" />
                    <rect x="12" y="76" width="12" height="12" rx="3" fill="url(#ctaGrad1)" />
                    <rect x="76" y="76" width="12" height="12" rx="3" fill="url(#ctaGrad1)" />
                  </svg>
                </motion.div>

                {/* Inner counter rotation */}
                <motion.div
                  className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px]"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
                >
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <linearGradient id="ctaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    <rect x="40" y="40" width="20" height="20" rx="4" fill="url(#ctaGrad2)" />
                    <rect x="20" y="25" width="15" height="15" rx="3" fill="url(#ctaGrad2)" />
                    <rect x="65" y="25" width="15" height="15" rx="3" fill="url(#ctaGrad2)" />
                    <rect x="20" y="60" width="15" height="15" rx="3" fill="url(#ctaGrad2)" />
                    <rect x="65" y="60" width="15" height="15" rx="3" fill="url(#ctaGrad2)" />
                  </svg>
                </motion.div>

                {/* Breathing center glow */}
                <motion.div
                  className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0.1) 30%, transparent 70%)'
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Secondary pulse ring */}
                <motion.div
                  className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-orange-500/10"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">{t.footer.title}</h2>
                <p className="text-lg md:text-xl text-stone-400 mb-8 md:mb-10 max-w-2xl mx-auto">{t.footer.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 50px -5px rgba(255,255,255,0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="bg-white text-stone-900 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg hover:bg-stone-50 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full md:w-auto"
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
                  <span className="font-bold text-xl tracking-tight">MGM</span>
                </div>
                <p className="max-w-sm text-lg font-light">
                  The operating system for modern communities. <br />Built for calmness in a chaotic world.
                </p>
              </div>
              <div>
                <h4 className="text-stone-900 font-bold mb-6">{t.footer.product}</h4>
                <ul className="space-y-4">
                  <li><a href="#features" className="hover:text-orange-600 transition-colors">Features</a></li>
                  <li><a href="#pricing" className="hover:text-orange-600 transition-colors">Pricing</a></li>
                  <li><a href="#timeline" className="hover:text-orange-600 transition-colors">Timeline MGM</a></li>
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