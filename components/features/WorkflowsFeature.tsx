import React from 'react';
import { Card } from '../ui/Card';
import { 
  GitBranch, Bell, AlertTriangle, CheckCircle, TrendingUp, 
  Filter, Download, Plus, MoreHorizontal 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell 
} from 'recharts';

const alertData = [
  { day: '01', low: 4, med: 5, high: 2 },
  { day: '03', low: 3, med: 4, high: 1 },
  { day: '05', low: 5, med: 6, high: 4 },
  { day: '07', low: 4, med: 3, high: 3 },
  { day: '09', low: 6, med: 5, high: 5 },
  { day: '11', low: 4, med: 4, high: 3 },
  { day: '13', low: 5, med: 6, high: 6 },
  { day: '15', low: 3, med: 3, high: 2 },
  { day: '17', low: 4, med: 5, high: 2 },
  { day: '19', low: 5, med: 6, high: 4 },
  { day: '21', low: 6, med: 4, high: 3 },
  { day: '23', low: 4, med: 3, high: 2 },
];

const MetricCard = ({ label, value, trend, icon: Icon, color }: any) => (
  <div className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex flex-col justify-between h-full">
    <div className="flex justify-between items-start mb-2">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{label}</span>
      <div className={`p-1.5 rounded-full ${color.bg} ${color.text}`}>
        <Icon size={12} />
      </div>
    </div>
    <div>
      <div className="text-xl font-bold text-stone-800">{value}</div>
      <div className={`text-[10px] font-bold mt-1 flex items-center gap-1 ${trend.positive ? 'text-emerald-500' : 'text-rose-500'}`}>
        <TrendingUp size={10} className={trend.positive ? '' : 'rotate-180'} />
        {trend.val}
      </div>
    </div>
  </div>
);

export const WorkflowsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      badge: 'Automated Workflows',
      title: 'Community management on',
      titleHighlight: 'autopilot',
      description: "Set up intelligent workflows to welcome new members, re-engage ghosts, or flag toxicity. It’s like having a 24/7 moderator who never sleeps.",
      widget: {
        title: 'Smart Alerts',
        subtitle: 'Executive view of critical trends',
        filters: 'Filters',
        export: 'Export',
        new: 'New',
        timeline: 'Alert Timeline',
        metrics: {
          groups: 'Groups w/ Alerts',
          today: 'Alerts Today',
          crit: 'Critical',
          res: 'Resolution Rate'
        },
        legend: { c: 'Critical', m: 'Medium', l: 'Low' }
      }
    },
    pt: {
      badge: 'Fluxos Automatizados',
      title: 'Gestão de comunidade no',
      titleHighlight: 'piloto automático',
      description: "Configure fluxos inteligentes para boas-vindas, reengajar fantasmas ou sinalizar toxicidade. É como ter um moderador 24/7 que nunca dorme.",
      widget: {
        title: 'Alertas Inteligentes',
        subtitle: 'Visão executiva de alertas e tendências',
        filters: 'Filtros',
        export: 'Exportar',
        new: 'Novo',
        timeline: 'Timeline de Alertas',
        metrics: {
          groups: 'Grupos com Alertas',
          today: 'Alertas Hoje',
          crit: 'Críticos',
          res: 'Taxa Resolução'
        },
        legend: { c: 'Críticos', m: 'Médios', l: 'Baixos' }
      }
    }
  }[lang];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-8">
           <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide border border-blue-200">
                <GitBranch size={14} />
                <span>{t.badge}</span>
              </div>
           </ScrollReveal>
           <ScrollReveal delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
                {t.title} <span className="text-blue-500">{t.titleHighlight}</span>.
              </h2>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
              <p className="text-lg text-stone-600 leading-relaxed">
                {t.description}
              </p>
           </ScrollReveal>
        </div>

        {/* Mockup - Smart Alerts Widget */}
        <div className="lg:w-1/2 w-full perspective-1000">
           <motion.div 
             initial={{ rotateX: 5, opacity: 0 }}
             whileInView={{ rotateX: 0, opacity: 1 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative p-6 rounded-[1.5rem] bg-white border border-stone-200 shadow-2xl overflow-hidden"
           >
             {/* Header */}
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div className="flex items-start gap-3">
                   <div className="p-2 bg-orange-100 text-orange-600 rounded-lg">
                      <Bell size={20} />
                   </div>
                   <div>
                      <h3 className="font-bold text-stone-800 text-lg">{t.widget.title}</h3>
                      <p className="text-xs text-stone-500">{t.widget.subtitle}</p>
                   </div>
                </div>
                <div className="flex gap-2">
                   <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-stone-200 text-stone-600 text-xs font-bold hover:bg-stone-50">
                      <Filter size={12} /> <span className="hidden sm:inline">{t.widget.filters}</span>
                   </button>
                   <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-orange-500 text-white text-xs font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20">
                      <Plus size={12} /> {t.widget.new}
                   </button>
                </div>
             </div>

             {/* Metrics Row */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <MetricCard 
                  label={t.widget.metrics.groups} 
                  value="133" 
                  trend={{ val: "12%", positive: true }} 
                  icon={Bell} 
                  color={{ bg: 'bg-stone-100', text: 'text-stone-600' }}
                />
                <MetricCard 
                  label={t.widget.metrics.today} 
                  value="24" 
                  trend={{ val: "8%", positive: false }} 
                  icon={Bell} 
                  color={{ bg: 'bg-rose-50', text: 'text-rose-500' }}
                />
                <MetricCard 
                  label={t.widget.metrics.crit} 
                  value="45" 
                  trend={{ val: "-", positive: false }} 
                  icon={AlertTriangle} 
                  color={{ bg: 'bg-rose-100', text: 'text-rose-600' }}
                />
                <MetricCard 
                  label={t.widget.metrics.res} 
                  value="87" 
                  trend={{ val: "15%", positive: true }} 
                  icon={CheckCircle} 
                  color={{ bg: 'bg-emerald-100', text: 'text-emerald-600' }}
                />
             </div>

             {/* Timeline Chart */}
             <div className="bg-stone-50/50 rounded-xl p-4 border border-stone-100">
                <div className="flex justify-between items-center mb-4">
                   <h4 className="font-bold text-sm text-stone-800">{t.widget.timeline}</h4>
                   <div className="flex gap-1">
                      <span className="px-2 py-0.5 bg-white border border-stone-200 text-[10px] font-bold text-stone-400 rounded cursor-pointer">7D</span>
                      <span className="px-2 py-0.5 bg-orange-500 text-white text-[10px] font-bold rounded cursor-pointer">30D</span>
                      <span className="px-2 py-0.5 bg-white border border-stone-200 text-[10px] font-bold text-stone-400 rounded cursor-pointer">90D</span>
                   </div>
                </div>

                <div className="h-48 w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={alertData} margin={{ top: 5, right: 0, left: -25, bottom: 0 }}>
                         <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                         <XAxis 
                            dataKey="day" 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#a8a29e', fontSize: 10}} 
                            dy={10} 
                            tickFormatter={(val) => `${val} Dec`}
                         />
                         <YAxis 
                            axisLine={false} 
                            tickLine={false} 
                            tick={{fill: '#a8a29e', fontSize: 10}} 
                         />
                         <Tooltip 
                            cursor={{ fill: '#f5f5f4' }}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }}
                         />
                         <Bar dataKey="low" stackId="a" fill="#3b82f6" radius={[0, 0, 0, 0]} barSize={12} />
                         <Bar dataKey="med" stackId="a" fill="#f59e0b" radius={[0, 0, 0, 0]} barSize={12} />
                         <Bar dataKey="high" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} barSize={12} />
                      </BarChart>
                   </ResponsiveContainer>
                </div>

                <div className="flex justify-center gap-4 mt-4">
                   <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <span className="text-[10px] font-bold text-stone-500 uppercase">{t.widget.legend.c}</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <span className="text-[10px] font-bold text-stone-500 uppercase">{t.widget.legend.m}</span>
                   </div>
                   <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-[10px] font-bold text-stone-500 uppercase">{t.widget.legend.l}</span>
                   </div>
                </div>
             </div>

           </motion.div>
        </div>

      </div>
    </div>
  )
}
