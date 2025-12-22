import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Rocket, Target, Users, Zap, MessageSquare, ChevronRight } from 'lucide-react';
import { Logo } from '../../App';
import { Language } from '../../App';

const content = {
  en: {
    hero: {
      badge: 'About Us',
      title: 'We build tools for',
      titleHighlight: 'community builders',
      subtitle: 'We believe the best communities deserve the best tools. That\'s why we created MGM.'
    },
    mission: {
      title: 'Our Mission',
      text: 'Transform the way people manage and grow their communities, bringing clarity to chaos and turning conversations into real connections.'
    },
    story: {
      title: 'Our Story',
      paragraphs: [
        'It all started when Bruno\'s Telegram community hit 1,000 members. With 400-500 messages daily, it became impossible to follow. The irony was cruel: the more the community grew, the less people engaged.',
        'What if there was a way to summarize topics and send them to members? This idea led Bruno to find André, and together they built the first prototype in just 2 days.',
        'After many pivots, interviews, and learnings, MGM was born — a complete intelligence platform for communities that helps thousands of managers understand and grow their groups.'
      ]
    },
    values: {
      title: 'Our Values',
      items: [
        { icon: Heart, title: 'Community First', desc: 'Every decision starts with: how does this help communities?' },
        { icon: Zap, title: 'Radical Simplicity', desc: 'Powerful tools don\'t have to be complicated.' },
        { icon: Target, title: 'Data-Driven', desc: 'We believe in decisions based on facts, not assumptions.' },
        { icon: Users, title: 'Transparency', desc: 'We build in public and share our journey.' }
      ]
    },
    team: {
      title: 'Meet the Team',
      subtitle: 'The people behind MGM',
      members: [
        { name: 'Bruno Okamoto', role: 'Co-founder & CEO' },
        { name: 'Ygor Mattos', role: 'Co-founder & CTO' },
        { name: 'Vitor Pereira', role: 'Product' },
        { name: 'Daniel', role: 'Engineering' }
      ]
    },
    cta: {
      title: 'Want to be part of this journey?',
      desc: 'Join thousands of community builders who use MGM.',
      button: 'Book a Demo'
    },
    footer: {
      product: 'Product',
      company: 'Company'
    }
  },
  pt: {
    hero: {
      badge: 'Sobre Nós',
      title: 'Construímos ferramentas para',
      titleHighlight: 'construtores de comunidades',
      subtitle: 'Acreditamos que as melhores comunidades merecem as melhores ferramentas. Por isso criamos o MGM.'
    },
    mission: {
      title: 'Nossa Missão',
      text: 'Transformar a forma como as pessoas gerenciam e crescem suas comunidades, trazendo clareza ao caos e transformando conversas em conexões reais.'
    },
    story: {
      title: 'Nossa História',
      paragraphs: [
        'Tudo começou quando a comunidade do Bruno no Telegram bateu 1.000 membros. Com 400-500 mensagens por dia, ficou impossível acompanhar. A ironia era cruel: quanto mais a comunidade crescia, menos as pessoas engajavam.',
        'E se existisse uma forma de resumir os assuntos e enviar para os membros? Essa ideia levou Bruno a encontrar André, e juntos construíram o primeiro protótipo em apenas 2 dias.',
        'Depois de muitos pivots, entrevistas e aprendizados, nasceu o MGM — uma plataforma completa de inteligência para comunidades que ajuda milhares de gestores a entender e crescer seus grupos.'
      ]
    },
    values: {
      title: 'Nossos Valores',
      items: [
        { icon: Heart, title: 'Comunidade em Primeiro', desc: 'Toda decisão começa com: como isso ajuda comunidades?' },
        { icon: Zap, title: 'Simplicidade Radical', desc: 'Ferramentas poderosas não precisam ser complicadas.' },
        { icon: Target, title: 'Orientado por Dados', desc: 'Acreditamos em decisões baseadas em fatos, não suposições.' },
        { icon: Users, title: 'Transparência', desc: 'Construímos em público e compartilhamos nossa jornada.' }
      ]
    },
    team: {
      title: 'Conheça o Time',
      subtitle: 'As pessoas por trás do MGM',
      members: [
        { name: 'Bruno Okamoto', role: 'Co-fundador & CEO' },
        { name: 'Ygor Mattos', role: 'Co-fundador & CTO' },
        { name: 'Vitor Pereira', role: 'Produto' },
        { name: 'Daniel', role: 'Engenharia' }
      ]
    },
    cta: {
      title: 'Quer fazer parte dessa jornada?',
      desc: 'Junte-se a milhares de construtores de comunidades que usam o MGM.',
      button: 'Agendar Demo'
    },
    footer: {
      product: 'Produto',
      company: 'Empresa'
    }
  }
};

// Team member initials for placeholder avatars
const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

// Generate a consistent color based on name
const getAvatarColor = (name: string) => {
  const colors = [
    'from-orange-400 to-amber-500',
    'from-blue-400 to-indigo-500',
    'from-emerald-400 to-teal-500',
    'from-purple-400 to-pink-500'
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

export const AboutPage = ({ lang, onBack, setLang }: { lang: Language; onBack: () => void; setLang?: (l: Language) => void }) => {
  const t = content[lang];
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: lang === 'en' ? 'Home' : 'Início', href: '#', onClick: onBack },
    { name: 'Analytics 2.0', href: '#analytics' },
    { name: lang === 'en' ? 'Our Journey' : 'Nossa Jornada', href: '#timeline' },
  ];

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
            <a href="#login" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3 transition-colors">{lang === 'en' ? 'Login' : 'Entrar'}</a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-9 px-5 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all text-sm shadow-lg shadow-stone-900/10"
            >
              {t.cta.button}
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-orange-50/40 to-transparent pointer-events-none z-0 mix-blend-multiply" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-stone-200/50 shadow-sm text-sm font-medium text-stone-600">
              <Users size={16} className="text-orange-500" />
              {t.hero.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 tracking-tight leading-[1.1]"
          >
            {t.hero.title}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400">
              {t.hero.titleHighlight}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white border-y border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-orange-500 uppercase tracking-wider mb-4">{t.mission.title}</h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-stone-800 leading-relaxed">
              {t.mission.text}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{t.story.title}</h2>
          </motion.div>

          <div className="space-y-8">
            {t.story.paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="text-lg md:text-xl text-stone-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Link to full story */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href="#timeline"
              className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors group"
            >
              {lang === 'en' ? 'Read the full journey' : 'Leia a jornada completa'}
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{t.values.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.values.items.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 border border-stone-200/60 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{value.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">{t.team.title}</h2>
            <p className="text-stone-500 text-lg">{t.team.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.team.members.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                {/* Avatar placeholder */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`w-28 h-28 md:w-32 md:h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${getAvatarColor(member.name)} flex items-center justify-center shadow-lg cursor-pointer`}
                >
                  <span className="text-white text-2xl md:text-3xl font-bold">
                    {getInitials(member.name)}
                  </span>
                </motion.div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">{member.name}</h3>
                <p className="text-stone-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white border-t border-stone-100">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 rounded-[2rem] p-12 md:p-16 text-center relative overflow-hidden">
            {/* Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-orange-500/20 blur-[100px] rounded-full" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta.title}</h2>
              <p className="text-stone-400 mb-8 max-w-xl mx-auto">{t.cta.desc}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-14 px-10 rounded-full bg-white text-stone-900 font-semibold hover:bg-stone-100 transition-all flex items-center gap-3 mx-auto shadow-2xl"
              >
                {t.cta.button}
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-stone-500 py-20 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <Logo />
              </div>
              <p className="max-w-sm text-lg font-light">
                {lang === 'en'
                  ? 'The operating system for modern communities. Built for calmness in a chaotic world.'
                  : 'O sistema operacional para comunidades modernas. Construído para calma em um mundo caótico.'}
              </p>
            </div>
            <div>
              <h4 className="text-stone-900 font-bold mb-6">{t.footer.product}</h4>
              <ul className="space-y-4">
                <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Features' : 'Funcionalidades'}</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Pricing' : 'Preços'}</a></li>
                <li><a href="#timeline" className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Our Journey' : 'Nossa Jornada'}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-stone-900 font-bold mb-6">{t.footer.company}</h4>
              <ul className="space-y-4">
                <li><span className="text-orange-600 font-medium">{lang === 'en' ? 'About' : 'Sobre'}</span></li>
                <li><a href="https://mygroupmetrics.com/blog" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">Blog</a></li>
                <li><a href="https://wa.me/5511980905374" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Contact' : 'Contato'}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="mb-4 md:mb-0">&copy; 2024 MyGroupMetrics Inc. {lang === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-stone-900">{lang === 'en' ? 'Privacy' : 'Privacidade'}</a>
              <a href="#" className="hover:text-stone-900">{lang === 'en' ? 'Terms' : 'Termos'}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
