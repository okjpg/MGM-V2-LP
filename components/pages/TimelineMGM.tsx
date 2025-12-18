import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, BarChart3, MessageSquare, Zap, Brain, Rocket, ChevronRight, Star, Target, TrendingUp, Globe, Code, Bell } from 'lucide-react';
import { Logo } from '../../App';
import { Language } from '../../App';
import { Timeline } from '../ui/Timeline';
import { AnimatedShinyText } from '../ui/AnimatedShinyText';

const content = {
  en: {
    hero: {
      badge: 'Our Journey',
      title: 'Timeline',
      titleHighlight: 'MGM',
      subtitle: 'Follow our evolution from idea to the leading community intelligence platform.',
      cta: 'Start Free Trial',
      stats: [
        { value: '10K+', label: 'Active Users' },
        { value: '50K+', label: 'Communities' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    timeline: [
      {
        title: '2023',
        items: [
          { title: 'The Beginning', desc: 'MGM was born from a simple idea: communities deserve better tools to understand their members.', icon: Sparkles },
          { title: 'First Beta', desc: 'We launched our first beta version with basic analytics for WhatsApp groups.', icon: Rocket },
          { title: '100 Users', desc: 'Reached our first 100 active users, validating the market need.', icon: Users }
        ]
      },
      {
        title: '2024 Q1',
        items: [
          { title: 'AI Integration', desc: 'Introduced our first AI-powered features for sentiment analysis.', icon: Brain },
          { title: 'Dashboard 2.0', desc: 'Complete redesign of our analytics dashboard with real-time data.', icon: BarChart3 },
          { title: '1,000 Communities', desc: 'Milestone: 1,000 communities actively using MGM.', icon: Target }
        ]
      },
      {
        title: '2024 Q2',
        items: [
          { title: 'Churn Prediction', desc: 'Launched predictive analytics to identify members at risk of leaving.', icon: TrendingUp },
          { title: 'Multi-platform', desc: 'Expanded beyond WhatsApp to support Telegram and Discord.', icon: Globe },
          { title: 'Enterprise Plans', desc: 'Introduced enterprise solutions for large organizations.', icon: Star }
        ]
      },
      {
        title: '2024 Q3',
        items: [
          { title: 'Workflows', desc: 'Automated workflows to help community managers save time.', icon: Zap },
          { title: 'API Launch', desc: 'Public API for developers to build integrations.', icon: Code },
          { title: '10K Users', desc: 'Reached 10,000 active users across the platform.', icon: Users }
        ]
      },
      {
        title: '2025',
        items: [
          { title: 'MGM AI 2.0', desc: 'Revolutionary AI assistant that understands context and provides actionable insights.', icon: Brain },
          { title: 'Real-time Alerts', desc: 'Instant notifications for important community events.', icon: Bell },
          { title: 'The Future', desc: 'Continuing to innovate and empower community builders worldwide.', icon: Rocket }
        ]
      }
    ],
    back: 'Back to Home'
  },
  pt: {
    hero: {
      badge: 'Nossa Jornada',
      title: 'Timeline',
      titleHighlight: 'MGM',
      subtitle: 'Acompanhe nossa evolução de uma ideia até a plataforma líder em inteligência de comunidades.',
      cta: 'Começar Grátis',
      stats: [
        { value: '10K+', label: 'Usuários Ativos' },
        { value: '50K+', label: 'Comunidades' },
        { value: '99.9%', label: 'Uptime' }
      ]
    },
    timeline: [
      {
        title: '2023',
        items: [
          { title: 'O Início', desc: 'MGM nasceu de uma ideia simples: comunidades merecem ferramentas melhores para entender seus membros.', icon: Sparkles },
          { title: 'Primeiro Beta', desc: 'Lançamos nossa primeira versão beta com analytics básicos para grupos de WhatsApp.', icon: Rocket },
          { title: '100 Usuários', desc: 'Alcançamos nossos primeiros 100 usuários ativos, validando a necessidade do mercado.', icon: Users }
        ]
      },
      {
        title: '2024 Q1',
        items: [
          { title: 'Integração com IA', desc: 'Introduzimos nossos primeiros recursos com IA para análise de sentimento.', icon: Brain },
          { title: 'Dashboard 2.0', desc: 'Redesign completo do nosso dashboard de analytics com dados em tempo real.', icon: BarChart3 },
          { title: '1.000 Comunidades', desc: 'Marco: 1.000 comunidades usando ativamente o MGM.', icon: Target }
        ]
      },
      {
        title: '2024 Q2',
        items: [
          { title: 'Previsão de Churn', desc: 'Lançamos analytics preditivos para identificar membros em risco de sair.', icon: TrendingUp },
          { title: 'Multi-plataforma', desc: 'Expandimos além do WhatsApp para suportar Telegram e Discord.', icon: Globe },
          { title: 'Planos Enterprise', desc: 'Introduzimos soluções enterprise para grandes organizações.', icon: Star }
        ]
      },
      {
        title: '2024 Q3',
        items: [
          { title: 'Workflows', desc: 'Workflows automatizados para ajudar gerentes de comunidade a economizar tempo.', icon: Zap },
          { title: 'Lançamento da API', desc: 'API pública para desenvolvedores criarem integrações.', icon: Code },
          { title: '10K Usuários', desc: 'Alcançamos 10.000 usuários ativos na plataforma.', icon: Users }
        ]
      },
      {
        title: '2025',
        items: [
          { title: 'MGM AI 2.0', desc: 'Assistente de IA revolucionário que entende contexto e fornece insights acionáveis.', icon: Brain },
          { title: 'Alertas em Tempo Real', desc: 'Notificações instantâneas para eventos importantes da comunidade.', icon: Bell },
          { title: 'O Futuro', desc: 'Continuando a inovar e empoderar construtores de comunidades no mundo todo.', icon: Rocket }
        ]
      }
    ],
    back: 'Voltar ao Início'
  }
};

const TimelineCard = ({ title, desc, icon: Icon, index }: { title: string; desc: string; icon: React.ElementType; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4, transition: { duration: 0.3 } }}
    className="group relative bg-white rounded-[1.5rem] p-6 border border-stone-100 shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)] transition-all duration-500 mb-4 overflow-hidden"
  >
    {/* Hover gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-transparent to-amber-50/0 group-hover:from-orange-50/50 group-hover:to-amber-50/30 transition-all duration-700 pointer-events-none rounded-[1.5rem]" />

    {/* Content */}
    <div className="relative z-10">
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:border-orange-200 group-hover:shadow-lg group-hover:shadow-orange-500/10 transition-all duration-300"
        >
          <Icon className="text-orange-500 group-hover:text-orange-600 transition-colors" size={22} />
        </motion.div>
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-stone-900 mb-2 group-hover:text-stone-800 transition-colors">{title}</h4>
          <p className="text-stone-500 text-sm leading-relaxed group-hover:text-stone-600 transition-colors">{desc}</p>
        </div>
      </div>
    </div>

    {/* Decorative corner */}
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-amber-500/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const StatCard = ({ value, label, delay }: { value: string; label: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -2, scale: 1.02 }}
    className="group text-center px-6 py-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/70 hover:border-stone-200/50 transition-all duration-300"
  >
    <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{value}</div>
    <div className="text-sm text-stone-500 font-medium">{label}</div>
  </motion.div>
);

export const TimelineMGM = ({ lang, onBack, setLang }: { lang: Language; onBack: () => void; setLang?: (l: Language) => void }) => {
  const t = content[lang];
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: lang === 'en' ? 'Home' : 'Início', href: '#', onClick: onBack },
    { name: 'Analytics 2.0', href: '#analytics', onClick: onBack },
    { name: lang === 'en' ? 'Pricing' : 'Preços', href: '#pricing', onClick: onBack },
  ];

  const timelineData = t.timeline.map((period) => ({
    title: period.title,
    content: (
      <div className="space-y-4">
        {period.items.map((item, idx) => (
          <TimelineCard key={idx} title={item.title} desc={item.desc} icon={item.icon} index={idx} />
        ))}
      </div>
    ),
  }));

  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.button
            onClick={onBack}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 z-50 relative hover:opacity-70 transition-opacity"
          >
            <Logo />
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {menuItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick?.(); } : undefined}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -2 }}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            {setLang && (
              <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200/50 mr-2">
                <button onClick={() => setLang('en')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>EN</button>
                <button onClick={() => setLang('pt')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'pt' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>PT</button>
              </div>
            )}
            <a href="#" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3 transition-colors">{lang === 'en' ? 'Login' : 'Entrar'}</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-9 px-5 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all text-sm shadow-lg shadow-stone-900/10"
            >
              {t.hero.cta}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-orange-50/50 to-transparent pointer-events-none z-0 mix-blend-multiply" />

        {/* Floating orbs */}
        <div className="absolute top-40 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-60 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge with Shiny Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm mb-8 cursor-pointer hover:shadow-md hover:bg-white/40 transition-all group"
          >
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Rocket size={10} />
              {lang === 'en' ? 'JOURNEY' : 'JORNADA'}
            </span>
            <AnimatedShinyText className="inline-flex items-center gap-1 text-sm font-medium">
              {t.hero.badge}
            </AnimatedShinyText>
            <ChevronRight size={14} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 mb-6 tracking-tight"
          >
            {t.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {t.hero.stats.map((stat, i) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} delay={0.3 + i * 0.1} />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-stone-300 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-stone-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="pb-24 relative">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              {lang === 'en' ? 'Our Milestones' : 'Nossos Marcos'}
            </h2>
            <p className="text-stone-500 max-w-lg mx-auto">
              {lang === 'en'
                ? 'Every great journey starts with a single step. Here\'s how we\'ve grown.'
                : 'Toda grande jornada começa com um único passo. Veja como crescemos.'}
            </p>
          </motion.div>
        </div>

        <Timeline data={timelineData} />
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-white border-t border-stone-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Noise texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

          {/* Glow effects */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              {lang === 'en' ? 'Join the Journey' : 'Faça Parte da Jornada'}
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              {lang === 'en' ? 'Be part of our story' : 'Faça parte da nossa história'}
            </h2>
            <p className="text-stone-400 mb-10 max-w-xl mx-auto text-lg">
              {lang === 'en'
                ? 'Join thousands of community builders who are shaping the future with MGM.'
                : 'Junte-se a milhares de construtores de comunidades que estão moldando o futuro com o MGM.'}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="h-14 px-10 rounded-full bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-all flex items-center gap-3 mx-auto shadow-2xl"
            >
              {t.hero.cta}
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Back Button */}
      <section className="px-6 pb-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.button
            whileHover={{ scale: 1.02, x: -4 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-stone-200 text-stone-600 hover:bg-stone-50 hover:border-stone-300 hover:text-stone-900 transition-all font-medium shadow-sm"
          >
            <ArrowRight className="rotate-180" size={16} />
            {t.back}
          </motion.button>
        </div>
      </section>
    </div>
  );
};
