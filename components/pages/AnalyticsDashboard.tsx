import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Cell, PieChart, Pie, RadialBarChart, RadialBar 
} from 'recharts';
import { 
  MoreHorizontal, Calendar, Download, Edit3, Plus, ArrowUpRight, ArrowDownRight, 
  Users, MessageSquare, AlertCircle, Clock, Search, Bell, ChevronDown, 
  Zap, Trophy, Target, TrendingUp, AlertTriangle, UserMinus, ThumbsUp, Layout, ChevronLeft
} from 'lucide-react';
import { Card, TactileButton } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

// --- Types & Translations ---

type Language = 'en' | 'pt';

const content = {
  en: {
    header: {
      back: 'Back to Landing',
      demo: 'Live Demo',
      trial: 'Start Free Trial'
    },
    hero: {
      title: 'The Command Center for Modern Communities',
      subtitle: 'See beyond the chat logs. Visualized engagement, sentiment tracking, and churn prediction in one tactile interface.'
    },
    sec1: {
      title: 'The Pulse of Your Group',
      subtitle: 'Stop guessing if your community is healthy. Get a complete, high-level view of engagement trends, active members, and message volume in real-time.',
      totalEng: 'Total Engagement',
      activeMem: 'Active Members',
      volume: 'Volume',
      subtextEng: 'vs 72.3% last month',
      subtextMem: '2,456 total installed',
      subtextVol: 'Messages per week'
    },
    sec2: {
      title: 'Prevent Churn Before It Happens',
      subtitle: 'Our algorithms detect silence patterns and sentiment drops to flag at-risk members days before they leave. Re-engage them with a click.',
      riskTitle: 'Members at Risk',
      detected: 'DETECTED',
      lifespan: 'Member Lifespan',
      daysInactive: 'days inactive',
      btn: 'Send Re-engagement Campaign',
      avgRetention: 'avg retention'
    },
    sec3: {
      title: 'Find Your Golden Hours',
      subtitle: "Don't shout into the void. MGM identifies exactly when your community is online and hungry for content.",
      peakTitle: 'Peak Hours',
      peak: 'Peak',
      bestTime: 'Best Time to Post',
      responseRate: 'Response Rate'
    },
    sec4: {
      title: 'Understand the Vibe',
      subtitle: 'Beyond numbers, MGM understands feelings. Our AI analyzes sentiment across thousands of messages to visualize community morale.',
      healthScore: 'Community Health Score',
      healthDesc: 'Calculated based on sentiment, interaction velocity, and retention.',
      excellent: 'Excellent',
      topSent: 'Top Sentiment',
      riskAlert: 'Risk Alert',
      prediction: 'AI Prediction',
      predText: '"Based on current trends, engagement is projected to increase by',
      predText2: 'next week due to seasonal patterns."'
    },
    footer: {
      title: 'Ready to see your own data?',
      subtitle: 'Connect your community in 2 minutes. No credit card required.',
      cta: 'Start Free Trial',
      back: 'Back to Home'
    }
  },
  pt: {
    header: {
      back: 'Voltar para Landing',
      demo: 'Demo Ao Vivo',
      trial: 'Teste Grátis'
    },
    hero: {
      title: 'O Centro de Comando para Comunidades Modernas',
      subtitle: 'Veja além dos logs de chat. Engajamento visualizado, rastreamento de sentimento e previsão de churn em uma interface tátil.'
    },
    sec1: {
      title: 'O Pulso do Seu Grupo',
      subtitle: 'Pare de adivinhar se sua comunidade é saudável. Obtenha uma visão completa das tendências de engajamento, membros ativos e volume de mensagens em tempo real.',
      totalEng: 'Engajamento Total',
      activeMem: 'Membros Ativos',
      volume: 'Volume',
      subtextEng: 'vs 72.3% mês anterior',
      subtextMem: '2,456 total instalados',
      subtextVol: 'Mensagens por semana'
    },
    sec2: {
      title: 'Previna o Churn Antes Que Aconteça',
      subtitle: 'Nossos algoritmos detectam padrões de silêncio e quedas de sentimento para sinalizar membros em risco dias antes de saírem. Reengaje-os com um clique.',
      riskTitle: 'Membros em Risco',
      detected: 'DETECTADOS',
      lifespan: 'Tempo de Vida',
      daysInactive: 'dias inativo',
      btn: 'Enviar Campanha de Reengajamento',
      avgRetention: 'retenção média'
    },
    sec3: {
      title: 'Encontre Suas Horas de Ouro',
      subtitle: 'Não grite para o vazio. O MGM identifica exatamente quando sua comunidade está online e faminta por conteúdo.',
      peakTitle: 'Horários de Pico',
      peak: 'Pico',
      bestTime: 'Melhor Hora p/ Postar',
      responseRate: 'Taxa de Resposta'
    },
    sec4: {
      title: 'Entenda a Vibe',
      subtitle: 'Além dos números, o MGM entende sentimentos. Nossa IA analisa o sentimento em milhares de mensagens para visualizar o moral da comunidade.',
      healthScore: 'Pontuação de Saúde',
      healthDesc: 'Calculado com base no sentimento, velocidade de interação e retenção.',
      excellent: 'Excelente',
      topSent: 'Melhor Sentimento',
      riskAlert: 'Alerta de Risco',
      prediction: 'Previsão IA',
      predText: '"Com base nas tendências atuais, projeta-se aumento de engajamento de',
      predText2: 'na próxima semana devido a padrões sazonais."'
    },
    footer: {
      title: 'Pronto para ver seus próprios dados?',
      subtitle: 'Conecte sua comunidade em 2 minutos. Sem cartão de crédito.',
      cta: 'Começar Teste Grátis',
      back: 'Voltar ao Início'
    }
  }
};

// --- Mock Data ---

const overviewData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  engagement: 40 + Math.random() * 40,
  members: 2000 + i * 10 + Math.random() * 50,
  messages: 1000 + Math.random() * 500
}));

const peakHoursData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  intensity: Math.random() // 0 to 1
}));

// --- Sub-Components ---

const MetricBig = ({ label, value, subtext, trend, trendValue }: any) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{label}</span>
      <div className={`px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {trendValue}
      </div>
    </div>
    <div className="text-3xl font-bold text-stone-800 tracking-tight">{value}</div>
    <div className="text-xs text-stone-400 mt-1">{subtext}</div>
  </div>
);

const SectionHeader = ({ title, action }: { title: string, action?: string }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-bold text-stone-800">{title}</h3>
    {action && (
       <div className="text-[10px] font-bold bg-stone-100 text-stone-500 px-2 py-1 rounded uppercase tracking-wider">
         {action}
       </div>
    )}
  </div>
);

const RiskMemberRow = ({ name, days, avatar, color, label }: any) => (
  <div className="flex items-center justify-between py-3 border-b border-stone-50 last:border-0">
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${color}`}>
        {avatar}
      </div>
      <div>
        <div className="text-sm font-bold text-stone-700">{name}</div>
        <div className="text-[10px] text-stone-400 flex items-center gap-1">
          <Clock size={10} /> {days} {label}
        </div>
      </div>
    </div>
    <div className="px-2 py-1 bg-stone-100 rounded text-[10px] font-bold text-stone-500 uppercase">
      Risco Alto
    </div>
  </div>
);

const FeatureSection = ({ title, subtitle, children, align = "left" }: { title: string, subtitle: string, children: React.ReactNode, align?: "left" | "right" }) => (
  <div className="py-20 md:py-32 border-b border-stone-100 last:border-0">
    <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
      <div className="lg:w-1/3 space-y-6">
        <ScrollReveal>
          <div className="w-12 h-1 bg-orange-500 mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-stone-600 leading-relaxed font-light">{subtitle}</p>
        </ScrollReveal>
      </div>
      <div className="lg:w-2/3 w-full perspective-1000">
        <ScrollReveal delay={0.2} width="100%">
           {children}
        </ScrollReveal>
      </div>
    </div>
  </div>
);

// --- Main Component ---

interface AnalyticsDashboardProps {
  onBack: () => void;
  lang: Language;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ onBack, lang }) => {
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-900 selection:bg-orange-100 selection:text-orange-900">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={onBack}>
             <div className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-stone-200 flex items-center justify-center transition-colors">
               <ChevronLeft size={18} className="text-stone-600" />
             </div>
             <span className="font-bold text-sm text-stone-600 group-hover:text-stone-900 transition-colors">{t.header.back}</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="hidden md:flex items-center gap-2 text-xs font-bold text-stone-400 uppercase tracking-widest mr-4">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
               {t.header.demo}
             </div>
             <TactileButton primary className="text-sm">{t.header.trial}</TactileButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Hero Title */}
        <div className="pt-20 pb-12 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight mb-8">
               {t.hero.title.split(' ').slice(0, 4).join(' ')} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                {t.hero.title.split(' ').slice(4).join(' ')}
              </span>
            </h1>
            <p className="text-xl text-stone-500 font-light max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>

        {/* SECTION 1: The Overview */}
        <FeatureSection 
          title={t.sec1.title}
          subtitle={t.sec1.subtitle}
          align="left"
        >
          <Card className="p-6 md:p-8 border-stone-200/60 shadow-2xl shadow-stone-200/50 bg-white relative overflow-hidden">
             {/* Decorative blob */}
             <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
             
             <div className="relative z-10">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <MetricBig label={t.sec1.totalEng} value="78.5%" subtext={t.sec1.subtextEng} trend="up" trendValue="8.6%" />
                  <MetricBig label={t.sec1.activeMem} value="2,847" subtext={t.sec1.subtextMem} trend="up" trendValue="15.9%" />
                  <MetricBig label={t.sec1.volume} value="12.4k" subtext={t.sec1.subtextVol} trend="up" trendValue="14.8%" />
               </div>

               <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={overviewData}>
                      <defs>
                        <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                      <XAxis 
                        dataKey="day" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: '#a8a29e', fontSize: 12}} 
                        dy={10} 
                        tickFormatter={(val) => val % 5 === 0 ? `Nov ${val}` : ''}
                      />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)' }}
                        itemStyle={{ color: '#1c1917', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="engagement" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorEngagement)" />
                      <Area type="monotone" dataKey="messages" stroke="#1c1917" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
             </div>
          </Card>
        </FeatureSection>

        {/* SECTION 2: Retention & Risk */}
        <FeatureSection 
          title={t.sec2.title} 
          subtitle={t.sec2.subtitle}
          align="right"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-rose-50/30 border-rose-100">
               <SectionHeader title={t.sec2.riskTitle} action={`4 ${t.sec2.detected}`} />
               <div className="space-y-1">
                  <RiskMemberRow name="Pedro Almeida" days="5" label={t.sec2.daysInactive} avatar="PA" color="bg-white border border-stone-200 text-stone-700" />
                  <RiskMemberRow name="Lucia Mendes" days="3" label={t.sec2.daysInactive} avatar="LM" color="bg-rose-100 text-rose-700" />
                  <RiskMemberRow name="Fernando Souza" days="7" label={t.sec2.daysInactive} avatar="FS" color="bg-rose-100 text-rose-700" />
               </div>
               <div className="mt-4 pt-4 border-t border-rose-100">
                  <TactileButton className="w-full justify-center text-xs h-10 bg-white border-rose-200 text-rose-600 hover:bg-rose-50">
                    {t.sec2.btn}
                  </TactileButton>
               </div>
            </Card>

            <Card className="p-6">
               <SectionHeader title={t.sec2.lifespan} action="+ 15d" />
               <div className="mb-4">
                  <span className="text-4xl font-bold text-stone-900">4m 7d</span>
                  <span className="text-sm text-stone-500 ml-2">{t.sec2.avgRetention}</span>
               </div>
               <div className="space-y-4">
                  {[
                    { l: '< 30 days', v: '156', p: '20%' },
                    { l: '1-3 mo', v: '248', p: '45%' },
                    { l: '> 6 mo', v: '621', p: '90%' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs text-stone-500 mb-1">
                        <span>{item.l}</span>
                        <span className="font-bold">{item.v}</span>
                      </div>
                      <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.p }}
                          transition={{ duration: 1, delay: 0.2 + (i*0.1) }}
                          className="bg-stone-800 h-full rounded-full" 
                        />
                      </div>
                    </div>
                  ))}
               </div>
            </Card>
          </div>
        </FeatureSection>

        {/* SECTION 3: Engagement & Timing */}
        <FeatureSection 
          title={t.sec3.title} 
          subtitle={t.sec3.subtitle}
          align="left"
        >
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                  <SectionHeader title={t.sec3.peakTitle} action={`${t.sec3.peak}: 14h`} />
                  <div className="flex items-end h-32 gap-1 mt-4">
                     {peakHoursData.map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ duration: 0.5, delay: i * 0.02 }}
                          className={`rounded-sm w-full origin-bottom ${h.intensity > 0.8 ? 'bg-orange-500' : h.intensity > 0.5 ? 'bg-orange-300' : 'bg-stone-200'}`}
                          style={{ height: `${h.intensity * 100}%` }}
                        />
                     ))}
                  </div>
                  <div className="flex justify-between text-[10px] text-stone-400 mt-2 font-bold uppercase">
                     <span>00:00</span>
                     <span>12:00</span>
                     <span>23:59</span>
                  </div>
              </Card>

              <div className="space-y-6">
                 <Card className="p-6 flex items-center justify-between">
                    <div>
                       <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{t.sec3.bestTime}</div>
                       <div className="text-2xl font-bold text-stone-900">Tuesday, 14:00</div>
                    </div>
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                       <Zap size={24} />
                    </div>
                 </Card>
                 <Card className="p-6 flex items-center justify-between">
                    <div>
                       <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{t.sec3.responseRate}</div>
                       <div className="text-2xl font-bold text-stone-900">2.3 mins</div>
                    </div>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                       <Clock size={24} />
                    </div>
                 </Card>
              </div>
           </div>
        </FeatureSection>

        {/* SECTION 4: AI & Sentiment */}
        <FeatureSection 
          title={t.sec4.title}
          subtitle={t.sec4.subtitle}
          align="right"
        >
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <Card className="p-8 flex flex-col items-center justify-center text-center">
                 <div className="relative w-48 h-48 mb-6">
                    <svg className="transform -rotate-90 w-48 h-48">
                      <circle cx="96" cy="96" r="88" stroke="#e7e5e4" strokeWidth="12" fill="transparent" />
                      <circle cx="96" cy="96" r="88" stroke="#10b981" strokeWidth="12" fill="transparent" strokeDasharray="552" strokeDashoffset={552 * (1 - 0.85)} strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                       <span className="text-5xl font-bold text-stone-900">85</span>
                       <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest mt-1">{t.sec4.excellent}</span>
                    </div>
                 </div>
                 <h3 className="text-lg font-bold text-stone-800">{t.sec4.healthScore}</h3>
                 <p className="text-sm text-stone-500 mt-2 max-w-xs">{t.sec4.healthDesc}</p>
              </Card>

              <div className="space-y-4">
                 <Card className="p-6 border-l-4 border-l-emerald-500">
                    <div className="flex justify-between items-start">
                       <div>
                          <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">{t.sec4.topSent}</div>
                          <div className="font-bold text-stone-800">Product Launch Feedback</div>
                       </div>
                       <ThumbsUp size={20} className="text-emerald-500" />
                    </div>
                    <div className="mt-4 w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-emerald-500 h-full w-[85%]" />
                    </div>
                 </Card>

                 <Card className="p-6 border-l-4 border-l-rose-500">
                    <div className="flex justify-between items-start">
                       <div>
                          <div className="text-xs font-bold text-rose-600 uppercase tracking-widest mb-1">{t.sec4.riskAlert}</div>
                          <div className="font-bold text-stone-800">Login Issues Discussion</div>
                       </div>
                       <AlertTriangle size={20} className="text-rose-500" />
                    </div>
                    <div className="mt-4 w-full bg-stone-100 h-1.5 rounded-full overflow-hidden">
                       <div className="bg-rose-500 h-full w-[45%]" />
                    </div>
                 </Card>

                 <Card className="p-6 bg-stone-900 text-white border-stone-800">
                    <div className="flex items-center gap-3 mb-2">
                       <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                       <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{t.sec4.prediction}</span>
                    </div>
                    <p className="text-lg font-medium leading-snug">
                       {t.sec4.predText} <span className="text-blue-400">+12%</span> {t.sec4.predText2}
                    </p>
                 </Card>
              </div>
           </div>
        </FeatureSection>

      </main>

      {/* Footer CTA */}
      <footer className="py-24 bg-white border-t border-stone-100 mt-12 text-center">
         <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">{t.footer.title}</h2>
            <p className="text-lg text-stone-500 mb-8 max-w-2xl mx-auto">{t.footer.subtitle}</p>
            <div className="flex justify-center gap-4">
               <TactileButton primary className="px-8 py-4 text-lg h-16 rounded-2xl">{t.footer.cta}</TactileButton>
               <TactileButton className="px-8 py-4 text-lg h-16 rounded-2xl" onClick={onBack}>{t.footer.back}</TactileButton>
            </div>
         </ScrollReveal>
      </footer>

    </div>
  );
};