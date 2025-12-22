import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Users,
    MessageSquare,
    Activity,
    AlertTriangle,
    Clock,
    BarChart3,
    PieChart,
    Zap,
    Target,
    Heart,
    Calendar,
    ArrowRight,
    ChevronDown,
    CheckCircle2,
    Smile,
    UserCheck,
    Bell,
    ChevronRight
} from 'lucide-react';
import { Logo } from '../../App';
import { Language } from '../../App';
import { SpiralAnimation } from '../animations/SpiralAnimation';
import { PricingFeature } from '../features/PricingFeature';
import { ScrollReveal } from '../ui/ScrollReveal';
import { AnimatedShinyText } from '../ui/AnimatedShinyText';

// Mini chart components for visual appeal
const MiniDonutChart = ({ value, color = 'orange' }: { value: number, color?: string }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
            <circle cx="50" cy="50" r={radius} fill="none" stroke="#fafaf9" strokeWidth="6" strokeLinecap="round" />
            <circle
                cx="50" cy="50" r={radius}
                fill="none"
                stroke={color === 'orange' ? '#f97316' : color === 'green' ? '#22c55e' : '#3b82f6'}
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
            />
        </svg>
    );
};

const MiniBarChart = ({ data }: { data: number[] }) => (
    <div className="flex items-end gap-1.5 h-16">
        {data.map((value, i) => (
            <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${value}%` }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="w-full bg-gradient-to-t from-orange-400 to-orange-300 rounded-full hover:from-orange-500 hover:to-orange-400 transition-colors cursor-pointer"
            />
        ))}
    </div>
);

const MiniAreaChart = ({ trend = 'up' }: { trend?: 'up' | 'down' }) => (
    <svg viewBox="0 0 100 40" className="w-full h-12">
        <defs>
            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor={trend === 'up' ? '#f97316' : '#ef4444'} stopOpacity="0.3" />
                <stop offset="100%" stopColor={trend === 'up' ? '#f97316' : '#ef4444'} stopOpacity="0" />
            </linearGradient>
        </defs>
        <path
            d={trend === 'up'
                ? "M0,35 Q20,30 30,25 T50,20 T70,15 T100,8 L100,40 L0,40 Z"
                : "M0,15 Q20,20 30,25 T50,30 T70,32 T100,35 L100,40 L0,40 Z"
            }
            fill="url(#areaGradient)"
        />
        <motion.path
            d={trend === 'up'
                ? "M0,35 Q20,30 30,25 T50,20 T70,15 T100,8"
                : "M0,15 Q20,20 30,25 T50,30 T70,32 T100,35"
            }
            fill="none"
            stroke={trend === 'up' ? '#f97316' : '#ef4444'}
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        />
    </svg>
);

const HeatmapGrid = () => {
    const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const getIntensity = () => Math.random();

    return (
        <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
                <div key={day} className="text-[10px] text-stone-400 text-center mb-1">{day}</div>
            ))}
            {Array.from({ length: 28 }).map((_, i) => {
                const intensity = getIntensity();
                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.2, zIndex: 10 }}
                        transition={{ delay: i * 0.01 }}
                        className="aspect-square rounded-md cursor-pointer transition-shadow hover:shadow-sm"
                        style={{
                            backgroundColor: `rgba(249, 115, 22, ${intensity * 0.8 + 0.1})`
                        }}
                    />
                );
            })}
        </div>
    );
};

const AvatarStack = ({ count = 5 }: { count?: number }) => (
    <div className="flex -space-x-3 hover:-space-x-1 transition-all duration-300 py-1 pl-1">
        {Array.from({ length: count }).map((_, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-stone-100 border-[3px] border-white ring-1 ring-stone-100 flex items-center justify-center text-xs font-bold text-stone-600 shadow-sm cursor-pointer"
            >
                {String.fromCharCode(65 + i)}
            </motion.div>
        ))}
        <div className="w-10 h-10 rounded-full bg-orange-50 border-[3px] border-white ring-1 ring-orange-100 flex items-center justify-center text-xs font-bold text-orange-600 shadow-sm z-10">
            +12
        </div>
    </div>
);

// Bento Card component
const BentoCard = ({
    children,
    className = '',
    span = 1,
    delay = 0
}: {
    children: React.ReactNode,
    className?: string,
    span?: 1 | 2 | 3,
    delay?: number
}) => {
    const spanClasses = {
        1: '',
        2: 'md:col-span-2',
        3: 'md:col-span-3'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative bg-white rounded-[2rem] p-6 border border-stone-100 shadow-[0_2px_10px_-4px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(28,25,23,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden ${spanClasses[span]} ${className}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-stone-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="relative z-10 h-full flex flex-col">
                {children}
            </div>
        </motion.div>
    );
};

const content = {
    en: {
        hero: {
            badge: 'Analytics Dashboard',
            title: 'Everything you need to understand your community',
            subtitle: 'Powerful analytics tools to monitor engagement, predict churn, and grow your community with data-driven decisions.',
            cta: 'Start Free Trial'
        },
        cards: {
            engagement: { title: 'Total Engagement', value: '78.5%', desc: 'Community participation rate' },
            members: { title: 'New Members', value: '2,847', desc: '+12% from last month' },
            messages: { title: 'Messages', value: '12.4K', desc: 'Messages exchanged' },
            topMembers: { title: 'Top Members', desc: 'Most active community members' },
            heatmap: { title: 'Chat Frequency', desc: 'Activity patterns by day and hour' },
            response: { title: 'Response Rate', value: '65.2%', desc: 'Average response time' },
            churn: { title: 'Churn Risk', value: '4.2%', desc: 'Members at risk of leaving' },
            growth: { title: 'Member Growth', desc: 'New members over time' },
            sentiment: { title: 'Sentiment Analysis', desc: 'Community mood tracking' },
            participation: { title: 'Participation Rate', value: '78.5%', desc: 'Active daily users' },
            sessionTime: { title: 'Avg Session Time', value: '4m 7s', desc: 'Time spent in community' },
            automation: { title: 'Automated Actions', desc: 'Workflows running automatically' },
            events: { title: 'Recent Events', desc: 'Latest community activities' },
            conversions: { title: 'Conversions', desc: 'Goal completions this period' },
            reactions: { title: 'Top Reactions', desc: 'Most used reactions' },
            activeMembers: { title: 'Most Active', desc: 'Highest engagement members' }
        },
        footer: {
            title: 'Ready to calm the chaos?',
            desc: 'Join thousands of community builders who use MGM to turn conversation into conversion.',
            cta: 'Book a Demo'
        }
    },
    pt: {
        hero: {
            badge: 'Dashboard de Analytics',
            title: 'Tudo que você precisa para entender sua comunidade',
            subtitle: 'Ferramentas poderosas de analytics para monitorar engajamento, prever churn e crescer sua comunidade com decisões baseadas em dados.',
            cta: 'Começar Grátis'
        },
        cards: {
            engagement: { title: 'Engajamento Total', value: '78.5%', desc: 'Taxa de participação' },
            members: { title: 'Novos Membros', value: '2,847', desc: '+12% vs mês anterior' },
            messages: { title: 'Mensagens', value: '12.4K', desc: 'Mensagens trocadas' },
            topMembers: { title: 'Top Membros', desc: 'Membros mais ativos da comunidade' },
            heatmap: { title: 'Frequência de Chat', desc: 'Padrões de atividade por dia e hora' },
            response: { title: 'Taxa de Resposta', value: '65.2%', desc: 'Tempo médio de resposta' },
            churn: { title: 'Risco de Churn', value: '4.2%', desc: 'Membros em risco de sair' },
            growth: { title: 'Crescimento', desc: 'Novos membros ao longo do tempo' },
            sentiment: { title: 'Análise de Sentimento', desc: 'Monitoramento do humor da comunidade' },
            participation: { title: 'Taxa de Participação', value: '78.5%', desc: 'Usuários ativos diários' },
            sessionTime: { title: 'Tempo Médio', value: '4m 7s', desc: 'Tempo na comunidade' },
            automation: { title: 'Ações Automáticas', desc: 'Workflows rodando automaticamente' },
            events: { title: 'Eventos Recentes', desc: 'Últimas atividades da comunidade' },
            conversions: { title: 'Conversões', desc: 'Metas atingidas no período' },
            reactions: { title: 'Top Reações', desc: 'Reações mais usadas' },
            activeMembers: { title: 'Mais Ativos', desc: 'Membros com maior engajamento' }
        },
        footer: {
            title: 'Pronto para acalmar o caos?',
            desc: 'Junte-se a milhares de construtores de comunidades que usam o MGM para transformar conversa em conversão.',
            cta: 'Agendar Demo'
        }
    }
};

export const AnalyticsLP = ({ lang, onBack, setLang }: { lang: Language, onBack: () => void, setLang?: (l: Language) => void }) => {
    const t = content[lang];

    const [scrolled, setScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { name: lang === 'en' ? 'Home' : 'Início', href: '#features', onClick: onBack },
        { name: 'Analytics 2.0', href: '#analytics', onClick: () => window.scrollTo(0, 0) },
        { name: lang === 'en' ? 'Pricing' : 'Preços', href: '#pricing', onClick: onBack },
    ];

    return (
        <div className="min-h-screen bg-[#FDFBF7]">
            {/* Header - Same as main page */}
            <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-200/50 py-3' : 'bg-transparent py-5'}`}>
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <button onClick={onBack} className="flex items-center gap-2 z-50 relative hover:opacity-70 transition-opacity">
                        <Logo />
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={item.onClick ? (e) => { e.preventDefault(); item.onClick?.(); } : undefined}
                                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
                            >
                                {item.name}
                            </a>
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
                        <a href="#login" className="text-sm font-medium text-stone-600 hover:text-stone-900 px-3">{lang === 'en' ? 'Login' : 'Entrar'}</a>
                        <button className="h-9 px-5 rounded-full bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all text-sm">
                            {t.hero.cta}
                        </button>
                    </div>
                </div>
            </header>

            {/* Animated Hero Section */}
            <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
                {/* Background Dot Pattern */}
                <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-orange-50/40 to-transparent pointer-events-none z-0 mix-blend-multiply" />

                {/* Background Animation (Transparent Canvas) */}
                <div className="absolute inset-0 z-1">
                    <SpiralAnimation />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center"
                    >
                        <motion.a
                            href="#analytics"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-1 py-1 pr-3 rounded-full bg-white/30 backdrop-blur-md border border-white/40 shadow-sm mb-6 cursor-pointer hover:shadow-md hover:bg-white/40 transition-all group"
                        >
                            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">NEW</span>
                            <AnimatedShinyText className="inline-flex items-center gap-1 text-sm font-medium">
                                {lang === 'en' ? 'MGM AI 2.0 is now live' : 'MGM AI 2.0 está no ar'}
                            </AnimatedShinyText>
                            <ChevronRight size={14} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                        </motion.a>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 mb-4 tracking-tight"
                        >
                            My Group Metrics <span className="text-stone-400">(MGM)</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex items-center justify-center gap-3"
                        >
                            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500">IA 2.0</span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                            className="mt-8 text-lg md:text-xl text-stone-500 max-w-2xl mx-auto"
                        >
                            {t.hero.subtitle}
                        </motion.p>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                            className="mt-8 h-14 px-8 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-all text-lg shadow-lg shadow-orange-500/30"
                        >
                            {t.hero.cta}
                            <ArrowRight className="inline-block ml-2" size={20} />
                        </motion.button>
                    </motion.div>
                </div>

                {/* Bouncing Arrow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="cursor-pointer"
                        onClick={() => window.scrollBy({ top: window.innerHeight * 0.5, behavior: 'smooth' })}
                    >
                        <div className="w-10 h-10 rounded-full bg-stone-900/10 backdrop-blur-sm border border-stone-200 flex items-center justify-center hover:bg-stone-900/20 transition-all">
                            <ChevronDown className="text-stone-600" size={24} />
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Analytics Section Title */}
            <section className="pt-12 pb-8 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6"
                    >
                        <BarChart3 size={16} />
                        {t.hero.badge}
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight"
                    >
                        {t.hero.title}
                    </motion.h2>
                </div>
            </section>

            {/* Bento Grid */}
            <section className="px-6 pb-24">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4">

                    {/* Row 1: Main Metrics */}
                    <BentoCard delay={0.1}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-center justify-center">
                                <TrendingUp className="text-orange-500" size={20} />
                            </div>
                            <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">+5.2%</span>
                        </div>
                        <div className="text-3xl font-bold text-stone-900 mb-1">{t.cards.engagement.value}</div>
                        <div className="text-sm font-medium text-stone-900 mb-1">{t.cards.engagement.title}</div>
                        <div className="text-xs text-stone-400">{t.cards.engagement.desc}</div>
                        <div className="mt-4">
                            <MiniAreaChart trend="up" />
                        </div>
                    </BentoCard>

                    <BentoCard delay={0.15}>
                        <div className="flex items-start justify-between mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-blue-100 shadow-sm flex items-center justify-center">
                                <Users className="text-blue-500" size={20} />
                            </div>
                            <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div className="text-3xl font-bold text-stone-900 mb-1">{t.cards.members.value}</div>
                        <div className="text-sm font-medium text-stone-900 mb-1">{t.cards.members.title}</div>
                        <div className="text-xs text-stone-400">{t.cards.members.desc}</div>
                        <div className="mt-4">
                            <AvatarStack count={4} />
                        </div>
                    </BentoCard>

                    <BentoCard span={3} delay={0.2}>
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="w-10 h-10 rounded-2xl bg-white border border-purple-100 shadow-sm flex items-center justify-center mb-3">
                                    <MessageSquare className="text-purple-500" size={20} />
                                </div>
                                <div className="text-3xl font-bold text-stone-900 mb-1">{t.cards.messages.value}</div>
                                <div className="text-sm font-medium text-stone-900">{t.cards.messages.title}</div>
                            </div>
                            <div className="flex-1 ml-8">
                                <MiniBarChart data={[45, 70, 55, 80, 65, 90, 75, 85, 60, 95]} />
                            </div>
                        </div>
                        <div className="text-xs text-stone-400">{t.cards.messages.desc}</div>
                    </BentoCard>

                    {/* NEW: Main Time Series Chart - Full Width */}
                    <BentoCard span={3} delay={0.22}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-2xl bg-white border border-orange-100 shadow-sm flex items-center justify-center">
                                    <BarChart3 className="text-orange-500" size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-stone-900 tracking-tight">{lang === 'en' ? 'Engagement Overview' : 'Visão Geral de Engajamento'}</div>
                                    <div className="text-xs text-stone-400">{lang === 'en' ? 'Last 30 days activity' : 'Atividade dos últimos 30 dias'}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-medium">12 Nov - 12 Dez</span>
                            </div>
                        </div>
                        <div className="relative w-full h-32">
                            <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="mainChartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,80 Q20,75 40,70 T80,65 T120,55 T160,50 T200,45 T240,40 T280,35 T320,30 T360,25 T400,20 L400,100 L0,100 Z"
                                    fill="url(#mainChartGradient)"
                                />
                                <motion.path
                                    d="M0,80 Q20,75 40,70 T80,65 T120,55 T160,50 T200,45 T240,40 T280,35 T320,30 T360,25 T400,20"
                                    fill="none"
                                    stroke="#f97316"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    vectorEffect="non-scaling-stroke"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2.5, ease: "easeInOut" }}
                                />
                            </svg>
                            {/* Data points overlay - prevents distortion */}
                            <div className="absolute inset-0 top-[1.5%]">
                                {[0, 40, 80, 120, 160, 200, 240, 280, 320, 360, 400].map((x, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-2 h-2 bg-orange-500 rounded-full border border-white shadow-sm"
                                        style={{
                                            left: `${(x / 400) * 100}%`,
                                            top: `${(80 - i * 6)}%`,
                                            transform: 'translate(-50%, -50%)'
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-4 text-[10px] text-stone-400">
                            {['12 Nov', '16 Nov', '20 Nov', '24 Nov', '28 Nov', '02 Dez', '06 Dez', '10 Dez', '12 Dez'].map(date => (
                                <span key={date}>{date}</span>
                            ))}
                        </div>
                    </BentoCard>

                    {/* NEW: Group Messages Widget */}
                    <BentoCard span={2} delay={0.24}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-violet-100 shadow-sm flex items-center justify-center">
                                <MessageSquare className="text-violet-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{lang === 'en' ? 'Group Messages' : 'Mensagens de Grupo'}</div>
                        </div>
                        <div className="text-4xl font-bold text-stone-900 mb-2">72</div>
                        <div className="text-xs text-stone-400 mb-4">{lang === 'en' ? 'Messages today' : 'Mensagens hoje'}</div>
                        <MiniBarChart data={[30, 45, 60, 40, 72, 55, 65]} />
                    </BentoCard>

                    {/* Row 2: Top Members & Heatmap */}
                    <BentoCard span={3} delay={0.25}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-amber-100 shadow-sm flex items-center justify-center">
                                <Target className="text-amber-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.topMembers.title}</div>
                        </div>
                        <div className="space-y-3">
                            {['Maria Silva', 'João Santos', 'Ana Costa'].map((name, i) => (
                                <div key={name} className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-stone-50 transition-colors cursor-pointer border border-transparent hover:border-stone-100">
                                    <span className="text-[10px] font-bold text-stone-300 w-4">{i + 1}</span>
                                    <div className="w-8 h-8 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-xs font-bold text-stone-700 group-hover:scale-110 transition-transform">
                                        {name[0]}
                                    </div>
                                    <span className="text-sm font-medium text-stone-600 flex-1 group-hover:text-stone-900 transition-colors">{name}</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                        <span className="text-xs font-bold text-stone-600">{95 - i * 5}%</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Growth Card (Moved here) */}
                    <BentoCard span={2} delay={0.26}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-cyan-100 shadow-sm flex items-center justify-center">
                                <TrendingUp className="text-cyan-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.growth.title}</div>
                            <span className="ml-auto text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full">+23%</span>
                        </div>
                        <svg viewBox="0 0 200 60" className="w-full h-32">
                            <defs>
                                <linearGradient id="growthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M0,50 Q30,45 50,40 T80,35 T110,25 T140,20 T170,15 T200,8 L200,60 L0,60 Z"
                                fill="url(#growthGradient)"
                            />
                            <motion.path
                                d="M0,50 Q30,45 50,40 T80,35 T110,25 T140,20 T170,15 T200,8"
                                fill="none"
                                stroke="#06b6d4"
                                strokeWidth="3"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
                            />
                        </svg>
                        <div className="text-xs text-stone-400">{t.cards.growth.desc}</div>
                    </BentoCard>

                    {/* Row 3: Response, Churn, Participation, Session Time */}
                    <BentoCard delay={0.26}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-green-100 shadow-sm flex items-center justify-center">
                                <Zap className="text-green-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.response.title}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold text-stone-900">{t.cards.response.value}</div>
                                <div className="text-xs text-stone-400">{t.cards.response.desc}</div>
                            </div>
                            <div className="relative">
                                <MiniDonutChart value={65.2} color="green" />
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-600">
                                    Good
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    <BentoCard delay={0.28}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-red-100 shadow-sm flex items-center justify-center">
                                <AlertTriangle className="text-red-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.churn.title}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold text-stone-900">{t.cards.churn.value}</div>
                                <div className="text-xs text-stone-400">{t.cards.churn.desc}</div>
                            </div>
                            <div className="relative">
                                <MiniDonutChart value={4.2} color="orange" />
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-stone-600">
                                    Low
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    <BentoCard delay={0.3}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-teal-100 shadow-sm flex items-center justify-center">
                                <UserCheck className="text-teal-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.participation.title}</div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-2xl font-bold text-stone-900">{t.cards.participation.value}</div>
                                <div className="text-xs text-stone-400">{t.cards.participation.desc}</div>
                            </div>
                            <div className="relative">
                                <MiniDonutChart value={78.5} color="green" />
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-600">
                                    High
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    <BentoCard delay={0.32}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-indigo-100 shadow-sm flex items-center justify-center">
                                <Clock className="text-indigo-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.sessionTime.title}</div>
                        </div>
                        <div className="text-2xl font-bold text-stone-900 mb-2">{t.cards.sessionTime.value}</div>
                        <div className="space-y-2">
                            {[{ label: 'Mobile', value: 65 }, { label: 'Desktop', value: 35 }].map(item => (
                                <div key={item.label} className="flex items-center gap-2">
                                    <span className="text-xs text-stone-400 w-12">{item.label}</span>
                                    <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.value}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-full bg-indigo-400 rounded-full"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-stone-600">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Row 4: Growth & Sentiment */}


                    <BentoCard delay={0.36}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-pink-100 shadow-sm flex items-center justify-center">
                                <Smile className="text-pink-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.sentiment.title}</div>
                        </div>
                        <div className="space-y-3">
                            {[
                                { label: 'Positivo', value: 68, color: 'bg-green-400' },
                                { label: 'Neutro', value: 24, color: 'bg-stone-300' },
                                { label: 'Negativo', value: 8, color: 'bg-red-400' }
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-3">
                                    <span className="text-xs text-stone-500 w-16">{item.label}</span>
                                    <div className="flex-1 h-3 bg-stone-100 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.value}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                            className={`h-full ${item.color} rounded-full`}
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-stone-600 w-8">{item.value}%</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                    {/* Heatmap */}
                    <BentoCard span={2} delay={0.38}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-rose-100 shadow-sm flex items-center justify-center">
                                <Activity className="text-rose-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{t.cards.heatmap.title}</div>
                        </div>
                        <HeatmapGrid />
                        <div className="text-xs text-stone-400 mt-3">{t.cards.heatmap.desc}</div>
                    </BentoCard>

                    {/* NEW: Smart Alerts - Usage of Home Page feature to fill gap (Span 1) */}
                    <BentoCard delay={0.40}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-rose-100 shadow-sm flex items-center justify-center">
                                <Bell className="text-rose-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{lang === 'en' ? 'Smart Alerts' : 'Alertas'}</div>
                        </div>
                        <div className="text-2xl font-bold text-stone-900 mb-2">3</div>
                        <div className="text-xs text-stone-400 mb-3">{lang === 'en' ? 'New notifications' : 'Novas notificações'}</div>

                        <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-100 w-full hover:bg-amber-100 transition-colors cursor-pointer">
                            <div className="w-5 h-5 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
                                <AlertTriangle size={10} className="text-amber-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-stone-700 truncate">Risco de Churn</div>
                                <div className="text-[9px] text-stone-500 truncate">Time de Design</div>
                            </div>
                            <ChevronDown size={10} className="text-stone-400 -rotate-90" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg border border-green-100 w-full hover:bg-green-100 transition-colors cursor-pointer">
                            <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center shrink-0">
                                <TrendingUp size={10} className="text-green-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-stone-700 truncate">Sinal Viral</div>
                                <div className="text-[9px] text-stone-500 truncate">Post sobre IA</div>
                            </div>
                            <ChevronDown size={10} className="text-stone-400 -rotate-90" />
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-100 w-full hover:bg-blue-100 transition-colors cursor-pointer">
                            <div className="w-5 h-5 rounded-full bg-blue-200 flex items-center justify-center shrink-0">
                                <MessageSquare size={10} className="text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-[10px] font-bold text-stone-700 truncate">Novo Tópico</div>
                                <div className="text-[9px] text-stone-500 truncate">Estratégia 2025</div>
                            </div>
                            <ChevronDown size={10} className="text-stone-400 -rotate-90" />
                        </div>
                    </BentoCard>

                    {/* Users at Risk */}
                    <BentoCard span={2} delay={0.4}>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-2xl bg-white border border-red-100 shadow-sm flex items-center justify-center">
                                <AlertTriangle className="text-red-500" size={16} />
                            </div>
                            <div className="text-sm font-medium text-stone-900">{lang === 'en' ? 'Users at Risk' : 'Usuários em Risco'}</div>
                            <span className="ml-auto text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded-full">3 {lang === 'en' ? 'alerts' : 'alertas'}</span>
                        </div>
                        <div className="space-y-3">
                            {[
                                { name: 'Lucas Oliveira', days: 14, risk: 'high' },
                                { name: 'Mariana Costa', days: 10, risk: 'medium' },
                                { name: 'Bruno Alves', days: 8, risk: 'medium' },
                            ].map((user, i) => (
                                <div key={i} className="group flex items-center gap-3 p-2 rounded-2xl hover:bg-stone-50 transition-colors cursor-pointer border border-transparent hover:border-stone-100">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-2 ${user.risk === 'high' ? 'bg-red-50 text-red-600 ring-red-100' : 'bg-amber-50 text-amber-600 ring-amber-100'} group-hover:scale-110 transition-transform`}>
                                        {user.name[0]}
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900 transition-colors">{user.name}</span>
                                        <div className="text-[10px] text-stone-400 group-hover:text-stone-500">{user.days} {lang === 'en' ? 'days inactive' : 'dias inativo'}</div>
                                    </div>
                                    <div className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${user.risk === 'high' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-amber-50 text-amber-600 border border-amber-100'}`}>
                                        {user.risk === 'high' ? (lang === 'en' ? 'High' : 'Alto') : (lang === 'en' ? 'Medium' : 'Médio')}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                </div>
            </section >

            {/* Pricing Section */}
            < section id="pricing" className="bg-white border-y border-stone-100" >
                <PricingFeature lang={lang} />
            </section >

            {/* Call to Action Footer */}
            <section className="py-24 px-4 bg-white border-t border-stone-100">
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
                                    <rect x="35" y="35" width="30" height="30" rx="6" fill="url(#ctaGrad1)" />
                                    <rect x="10" y="35" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                                    <rect x="70" y="35" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                                    <rect x="35" y="10" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
                                    <rect x="35" y="70" width="20" height="20" rx="4" fill="url(#ctaGrad1)" />
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
                            <h4 className="text-stone-900 font-bold mb-6">{lang === 'en' ? 'Product' : 'Produto'}</h4>
                            <ul className="space-y-4">
                                <li><a href="#" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Features' : 'Funcionalidades'}</a></li>
                                <li><span className="text-orange-600 font-medium">{lang === 'en' ? 'Analytics 2.0' : 'Analytics 2.0'}</span></li>
                                <li><a href="#timeline" className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'Our Journey' : 'Nossa Jornada'}</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-stone-900 font-bold mb-6">{lang === 'en' ? 'Company' : 'Empresa'}</h4>
                            <ul className="space-y-4">
                                <li><a href="#about" onClick={(e) => { e.preventDefault(); onBack(); }} className="hover:text-orange-600 transition-colors">{lang === 'en' ? 'About' : 'Sobre'}</a></li>
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
        </div >
    );
};
