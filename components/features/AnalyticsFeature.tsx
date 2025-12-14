import React from 'react';
import { Card, TactileButton } from '../ui/Card';
import { BarChart2, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip, CartesianGrid } from 'recharts';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 480 },
  { name: 'Fri', value: 600 },
  { name: 'Sat', value: 700 },
  { name: 'Sun', value: 650 },
];

export const AnalyticsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      badge: 'Deep Analytics',
      title: 'Granular data for',
      titleHighlight: 'growth',
      description: 'Understand member lifecycle, retention rates, and sentiment trends with enterprise-grade visualization. We track what matters, so you can prove ROI.',
      stats: { retention: 'Retention', ltv: 'LTV' },
      btn: 'Explore analytics',
      chart: {
        title: 'Growth Velocity',
        sub: 'Active members vs Message volume'
      },
      cards: [
        { label: "New", val: "124" },
        { label: "Active", val: "89%" },
        { label: "Churn", val: "1.2%" }
      ],
      insight: {
        badge: 'Insight detected',
        text: 'Friday engagement is up',
        suffix: 'since last schedule change.'
      }
    },
    pt: {
      badge: 'Análise Profunda',
      title: 'Dados granulares para',
      titleHighlight: 'crescimento',
      description: 'Entenda o ciclo de vida dos membros, taxas de retenção e tendências de sentimento com visualização de nível empresarial. Rastreamos o que importa para provar ROI.',
      stats: { retention: 'Retenção', ltv: 'LTV' },
      btn: 'Explorar analytics',
      chart: {
        title: 'Velocidade de Crescimento',
        sub: 'Membros ativos vs Volume de mensagens'
      },
      cards: [
        { label: "Novos", val: "124" },
        { label: "Ativos", val: "89%" },
        { label: "Churn", val: "1.2%" }
      ],
      insight: {
        badge: 'Insight detectado',
        text: 'Engajamento de sexta subiu',
        suffix: 'desde a última mudança.'
      }
    }
  }[lang];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        
        {/* Text Content - Right on Desktop */}
        <div className="lg:w-1/2 space-y-8">
           <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide border border-emerald-200">
                <BarChart2 size={14} />
                <span>{t.badge}</span>
              </div>
           </ScrollReveal>
           <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                {t.title} <span className="text-emerald-600">{t.titleHighlight}</span>.
              </h2>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
              <p className="text-lg text-stone-600 leading-relaxed">
                {t.description}
              </p>
           </ScrollReveal>
           
           <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl border border-stone-100 shadow-sm">
                   <div className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-1">{t.stats.retention}</div>
                   <div className="text-2xl font-bold text-stone-900">+12%</div>
                </div>
                 <div className="p-4 bg-white rounded-xl border border-stone-100 shadow-sm">
                   <div className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-1">{t.stats.ltv}</div>
                   <div className="text-2xl font-bold text-stone-900">$840</div>
                </div>
              </div>
              <div className="pt-4">
                <TactileButton>{t.btn}</TactileButton>
              </div>
           </ScrollReveal>
        </div>

        {/* Mockup - Left on Desktop */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div
             initial={{ rotateY: -5, rotateX: 5, opacity: 0 }}
             whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <Card className="p-6 md:p-8 bg-gradient-to-br from-white to-stone-50 shadow-2xl border-stone-200">
                {/* Chart Header */}
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h3 className="text-lg font-bold text-stone-800">{t.chart.title}</h3>
                    <p className="text-xs text-stone-500">{t.chart.sub}</p>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded text-sm">
                    <TrendingUp size={14} />
                    <span>+24.5%</span>
                  </div>
                </div>

                {/* Main Chart */}
                <div className="h-64 w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 10}} dy={10} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-2">
                   {t.cards.map((s: any, i: number) => (
                     <div key={i} className="bg-white p-3 rounded-xl border border-stone-100 flex flex-col items-center text-center">
                       <span className="text-[10px] text-stone-400 font-bold uppercase">{s.label}</span>
                       <span className="font-bold text-stone-800 text-lg">{s.val}</span>
                     </div>
                   ))}
                </div>
             </Card>

             {/* Floating Element */}
             <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-6 -left-6 z-20 bg-stone-900 text-white p-4 rounded-xl shadow-xl hidden md:block max-w-[200px]"
             >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold">{t.insight.badge}</span>
                </div>
                <p className="text-xs text-stone-400 leading-snug">
                  {t.insight.text} <span className="text-white font-bold">40%</span> {t.insight.suffix}
                </p>
             </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Helper icon
const ActivityIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
)