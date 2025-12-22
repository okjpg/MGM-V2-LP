import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Heart,
    Shield,
    Zap,
    Users,
    Sparkles,
    ArrowRight,
    MessageSquare,
    Target,
    Code,
    Layers,
    Award,
    Fingerprint,
    Linkedin
} from 'lucide-react';
import { Logo, Language } from '../../App';
import { GradualSpacing } from '../ui/GradualSpacing';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedShinyText } from '../ui/AnimatedShinyText';

const content = {
    en: {
        hero: {
            badge: 'Crafted with Passion',
            title: 'Built for calmness in a chaotic world.',
            subtitle: 'We believe community intelligence doesn\'t have to be overwhelming. Every pixel and line of code is designed to bring clarity to the conversation.'
        },
        philosophy: {
            title: 'Our Essence',
            subtitle: 'The core values that drive MGM.',
            items: [
                {
                    title: 'Tactile Precision',
                    desc: 'Data shouldn\'t just be numbers. It should feel close, actionable, and human.',
                    icon: Fingerprint
                },
                {
                    title: 'Intentional Calm',
                    desc: 'We filter the noise so you can focus on what truly matters: your people.',
                    icon: Shield
                },
                {
                    title: 'Radical Simplicity',
                    desc: 'Sophisticated technology, delivered through a minimalist interface.',
                    icon: Zap
                }
            ]
        },
        craft: {
            title: 'Award-Winning Craftsmanship',
            desc: 'MGM isn\'t just software; it\'s a work of digital art. Designed by world-class creators to provide an experience that is as beautiful as it is powerful.',
            stat: '100% Custom Design'
        },
        story: {
            title: 'The Journey',
            subtitle: 'From a simple Telegram frustration to the operating system for modern communities.',
            milestones: [
                { year: '2023', title: 'The Spark', desc: 'Bruno feels the pain of managing 1,000+ members alone.' },
                { year: '2023', title: 'Launch', desc: 'André builds the first bot in 48 hours. Virality begins.' },
                { year: '2024', title: 'The Pivot', desc: 'MGM transforms from a bot into a complete intelligence platform.' },
                { year: '2024', title: 'Go Live', desc: 'Market validation and consolidation as community analytics leader.' },
                { year: '2025', title: 'MGM 2.0', desc: 'A new era of AI-driven community management launches.' },
                { year: '2026', title: 'MGM 3.0', desc: 'The future of community intelligence with autonomy (novo).' }
            ]
        },
        founders: {
            title: 'The Team',
            subtitle: 'Meet the builders behind the metrics.',
            items: [
                {
                    name: 'Bruno Okamoto',
                    role: 'Co-founder & CEO',
                    image: '/founders/bruno.jpg',
                    linkedin: 'https://linkedin.com/in/brunookamoto'
                },
                {
                    name: 'Ygor Mattos',
                    role: 'Co-founder & CTO',
                    image: '/founders/ygor.jpg',
                    linkedin: 'https://linkedin.com/in/ygormattos'
                },
                {
                    name: 'Vitor Pereira',
                    role: 'Product',
                    image: '/founders/vitor.jpg',
                    linkedin: 'https://linkedin.com/in/vitorpereira'
                },
                {
                    name: 'Daniel',
                    role: 'Engineering',
                    image: '/founders/daniel.jpg',
                    linkedin: 'https://linkedin.com/in/daniel'
                }
            ]
        },
        footer: {
            title: 'Experience the MGM Difference',
            cta: 'Book a Demo'
        },
        back: 'Back to Home'
    },
    pt: {
        hero: {
            badge: 'Criado com Paixão',
            title: 'Construído para calma em um mundo caótico.',
            subtitle: 'Acreditamos que a inteligência de comunidade não precisa ser esmagadora. Cada pixel e linha de código é projetado para trazer clareza à conversa.'
        },
        philosophy: {
            title: 'Nossa Essência',
            subtitle: 'Os valores fundamentais que movem o MGM.',
            items: [
                {
                    title: 'Precisão Tátil',
                    desc: 'Dados não devem ser apenas números. Devem ser próximos, acionáveis e humanos.',
                    icon: Fingerprint
                },
                {
                    title: 'Calma Intencional',
                    desc: 'Filtramos o ruído para que você possa focar no que realmente importa: suas pessoas.',
                    icon: Shield
                },
                {
                    title: 'Simplicidade Radical',
                    desc: 'Tecnologia sofisticada, entregue através de uma interface minimalista.',
                    icon: Zap
                }
            ]
        },
        craft: {
            title: 'Artesanato Premiado',
            desc: 'O MGM não é apenas um software; é uma obra de arte digital. Projetado por criadores de classe mundial para proporcionar uma experiência que é tão bela quanto poderosa.',
            stat: 'Design 100% Autoral'
        },
        story: {
            title: 'A Jornada',
            subtitle: 'De uma simples frustração no Telegram ao sistema operacional para comunidades modernas.',
            milestones: [
                { year: '2023', title: 'A Fagulha', desc: 'Bruno sente a dor de gerir 1.000+ membros sozinho.' },
                { year: '2023', title: 'Lançamento', desc: 'André constrói o primeiro bot em 48 horas. A viralidade começa.' },
                { year: '2024', title: 'O Pivot', desc: 'MGM se transforma de um bot em uma plataforma completa de inteligência.' },
                { year: '2024', title: 'Go Live', desc: 'Validação pelo mercado e consolidação como líder em analytics.' },
                { year: '2025', title: 'MGM 2.0', desc: 'Uma nova era de gestão de comunidades movida por IA.' },
                { year: '2026', title: 'MGM 3.0', desc: 'O futuro da inteligência de comunidades com autonomia (novo).' }
            ]
        },
        founders: {
            title: 'O Time',
            subtitle: 'Conheça os construtores por trás das métricas.',
            items: [
                {
                    name: 'Bruno Okamoto',
                    role: 'Co-fundador & CEO',
                    image: '/founders/bruno.jpg',
                    linkedin: 'https://linkedin.com/in/brunookamoto'
                },
                {
                    name: 'Ygor Mattos',
                    role: 'Co-fundador & CTO',
                    image: '/founders/ygor.jpg',
                    linkedin: 'https://linkedin.com/in/ygormattos'
                },
                {
                    name: 'Vitor Pereira',
                    role: 'Produto',
                    image: '/founders/vitor.jpg',
                    linkedin: 'https://linkedin.com/in/vitorpereira'
                },
                {
                    name: 'Daniel',
                    role: 'Engenharia',
                    image: '/founders/daniel.jpg',
                    linkedin: 'https://linkedin.com/in/daniel'
                }
            ]
        },
        footer: {
            title: 'Experimente a Diferença MGM',
            cta: 'Agendar Demo'
        },
        back: 'Voltar ao Início'
    }
};

const MilestoneCard = ({ milestone, index, isLast }: any) => (
    <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.8 }}
        className="flex gap-8 items-center"
    >
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center bg-white shadow-sm font-bold text-stone-900 z-10">
                {milestone.year}
            </div>
            {!isLast && <div className="w-px h-16 bg-stone-100" />}
        </div>
        <div className="flex-1 pb-8">
            <h4 className="text-xl font-bold text-stone-900 mb-1">{milestone.title}</h4>
            <p className="text-stone-500 font-light">{milestone.desc}</p>
        </div>
    </motion.div>
);

export const AboutMGM = ({ lang, onBack, setLang }: { lang: Language; onBack: () => void; setLang?: (l: Language) => void }) => {
    const t = content[lang];
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div className="min-h-screen bg-[#FDFBF7] selection:bg-orange-100 selection:text-orange-900">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />
                <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-orange-50/30 to-transparent" />
            </div>

            {/* Header */}
            <header className="fixed top-0 w-full z-50 py-6 px-6 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <button onClick={onBack} className="hover:opacity-70 transition-opacity">
                        <Logo />
                    </button>

                    <div className="flex items-center gap-6">
                        {setLang && (
                            <div className="flex items-center bg-stone-100/50 rounded-full p-1 border border-stone-200/50">
                                <button onClick={() => setLang('en')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>EN</button>
                                <button onClick={() => setLang('pt')} className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${lang === 'pt' ? 'bg-white shadow-sm text-stone-900' : 'text-stone-400 hover:text-stone-600'}`}>PT</button>
                            </div>
                        )}
                        <button
                            onClick={onBack}
                            className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                        >
                            {lang === 'en' ? 'Back' : 'Voltar'}
                        </button>
                    </div>
                </div>
            </header>

            <main className="relative z-10">
                {/* Hero Section */}
                <section className="pt-48 pb-32 px-6">
                    <motion.div
                        style={{ opacity, scale }}
                        className="max-w-5xl mx-auto text-center"
                    >
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full bg-white border border-stone-100 shadow-sm mb-8">
                                <div className="bg-orange-500 rounded-full p-1 text-white">
                                    <Heart size={10} fill="currentColor" />
                                </div>
                                <AnimatedShinyText className="text-[10px] font-bold tracking-wider uppercase">
                                    {t.hero.badge}
                                </AnimatedShinyText>
                            </div>
                        </ScrollReveal>

                        <GradualSpacing
                            text={t.hero.title}
                            className="text-5xl md:text-8xl font-semibold text-stone-900 tracking-tighter leading-tight mb-8"
                        />

                        <ScrollReveal delay={0.4}>
                            <p className="text-xl md:text-2xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
                                {t.hero.subtitle}
                            </p>
                        </ScrollReveal>
                    </motion.div>
                </section>

                {/* Philosophy Grid */}
                <section className="py-24 px-6 bg-white border-y border-stone-100">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="md:col-span-1">
                                <ScrollReveal>
                                    <h2 className="text-4xl font-bold text-stone-900 mb-4">{t.philosophy.title}</h2>
                                    <p className="text-stone-500 text-lg font-light leading-relaxed">
                                        {t.philosophy.subtitle}
                                    </p>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {t.philosophy.items.map((item, i) => (
                                    <ScrollReveal key={item.title} delay={0.1 * i}>
                                        <div className="p-8 rounded-[2rem] bg-stone-50 border border-stone-100 hover:border-orange-200 transition-all group duration-500">
                                            <div className="w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-stone-900 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                                                <item.icon size={24} />
                                            </div>
                                            <h3 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h3>
                                            <p className="text-stone-500 text-sm font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Award Listing / Craft Section */}
                <section className="py-32 px-6 overflow-hidden">
                    <div className="max-w-7xl mx-auto relative">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                            <ScrollReveal>
                                <div className="relative">
                                    <div className="w-20 h-20 bg-orange-500 rounded-2xl rotate-12 absolute -top-10 -left-10 opacity-10 animate-pulse" />
                                    <Award size={64} className="text-orange-500 mb-8" />
                                    <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 tracking-tight">
                                        {t.craft.title}
                                    </h2>
                                    <p className="text-xl text-stone-500 font-light leading-relaxed mb-12">
                                        {t.craft.desc}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-px w-12 bg-stone-900" />
                                        <span className="text-sm font-bold text-stone-900 uppercase tracking-widest">{t.craft.stat}</span>
                                    </div>
                                </div>
                            </ScrollReveal>

                            <div className="relative aspect-square">
                                <ScrollReveal delay={0.2}>
                                    <div className="absolute inset-0 bg-gradient-to-br from-stone-900 to-stone-800 rounded-[3rem] border border-stone-800 shadow-2xl overflow-hidden group">
                                        {/* Video Background - scaled up to hide watermark */}
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover opacity-80 scale-110 -translate-y-[5%]"
                                        >
                                            <source src="/login-bg.mp4" type="video/mp4" />
                                        </video>
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-stone-900/30" />
                                    </div>
                                </ScrollReveal>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Founders Section */}
                <section className="py-16 px-6 bg-stone-900 text-white rounded-[3rem] mx-4 mb-24 overflow-hidden relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
                    <div className="max-w-6xl mx-auto relative z-10">
                        <ScrollReveal>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-3">{t.founders.title}</h2>
                                <p className="text-stone-400 text-base font-light">{t.founders.subtitle}</p>
                            </div>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            {t.founders.items.map((founder, i) => (
                                <ScrollReveal key={founder.name} delay={0.1 * i}>
                                    <div className="group text-center">
                                        <div className="aspect-square rounded-2xl bg-stone-800 mb-4 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                                            {/* Placeholder for image */}
                                            <div className="absolute inset-0 flex items-center justify-center text-stone-600 font-bold text-lg">
                                                {founder.name.split(' ')[0]}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold mb-1">{founder.name}</h3>
                                        <p className="text-orange-500 font-medium text-xs mb-3 tracking-wider uppercase">{founder.role}</p>
                                        <a
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-stone-800 hover:bg-orange-500 transition-all duration-300"
                                        >
                                            <Linkedin size={14} />
                                        </a>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Simplified Story Timeline */}
                <section className="py-24 px-6 mb-24">
                    <div className="max-w-4xl mx-auto">
                        <ScrollReveal>
                            <h2 className="text-4xl font-bold text-stone-900 mb-16">{t.story.title}</h2>
                        </ScrollReveal>
                        <div className="space-y-0">
                            {t.story.milestones.map((milestone, i) => (
                                <MilestoneCard
                                    key={milestone.title}
                                    milestone={milestone}
                                    index={i}
                                    isLast={i === t.story.milestones.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 px-6">
                    <ScrollReveal>
                        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border border-stone-100 p-12 md:p-24 text-center shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px] -mr-32 -mt-32 transition-all duration-1000 group-hover:scale-150" />
                            <div className="relative z-10">
                                <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-8 tracking-tight">
                                    {t.footer.title}
                                </h2>
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(249, 115, 22, 0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="h-16 px-12 rounded-full bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all flex items-center gap-3 mx-auto"
                                >
                                    {t.footer.cta}
                                    <ArrowRight size={20} />
                                </motion.button>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* Bottom Back Button */}
                <section className="pb-32 px-6 text-center">
                    <button
                        onClick={onBack}
                        className="px-8 py-4 rounded-full border border-stone-200 text-stone-500 hover:text-stone-900 hover:border-stone-300 transition-all font-medium inline-flex items-center gap-2"
                    >
                        <ArrowRight className="rotate-180" size={16} />
                        {t.back}
                    </button>
                </section>
            </main>

            <footer className="py-12 border-t border-stone-100 bg-white">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <Logo className="opacity-50 grayscale" />
                    <p className="text-stone-400 text-sm font-light">
                        &copy; 2024 MyGroupMetrics Inc. Crafted for modern communities.
                    </p>
                </div>
            </footer>
        </div>
    );
};
