import React, { useState } from 'react';
import { Card, TactileButton } from '../ui/Card';
import { ShieldAlert, ArrowUpRight, Bell, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const AlertRow = ({ severity, title, time, active, onClick, alertDesc }: any) => (
  <motion.div
    layout
    onClick={onClick}
    className={`p-4 rounded-xl border mb-3 cursor-pointer transition-all ${active ? 'bg-white border-rose-200 shadow-lg ring-1 ring-rose-500/20' : 'bg-stone-50/50 border-stone-100 hover:bg-white hover:border-stone-200'}`}
  >
    <div className="flex justify-between items-start mb-1">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${severity === 'critical' ? 'bg-rose-500 animate-pulse' : 'bg-amber-400'}`} />
        <span className="text-sm font-bold text-stone-800">{title}</span>
      </div>
      <span className="text-[10px] text-stone-400 font-mono">{time}</span>
    </div>
    <div className="pl-4">
      <p className="text-xs text-stone-500 line-clamp-1">{alertDesc}</p>
    </div>
  </motion.div>
);

export const AlertsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState(0);

  const t = {
    en: {
      badge: 'Intelligent Alerts',
      title: 'Never miss a',
      titleHighlight: 'critical beat',
      description: 'MGM monitors your community 24/7. It detects urgency, sentiment drops, and operational bottlenecks, flagging them instantly so you can act before fires spread.',
      checks: ['Sentiment drops', 'Keyword spikes', 'Mod fatigue'],
      btn: 'Configure alerts',
      monitorTitle: 'Live Monitor',
      updates: 'Updates realtime',
      mockAlerts: [
        { title: 'Product Beta', time: 'Just now', desc: 'Abnormal sentiment drop detected in last hour.' },
        { title: 'Support VIP', time: '12m ago', desc: 'High volume of unanswered questions.' },
        { title: 'General Chat', time: '45m ago', desc: 'Competitor name mentioned 5x.' }
      ],
      detail: {
        badge: 'Analysis',
        text: 'Detected a 45% increase in negative keywords "crash", "broken", "refund" within the last 15 minutes in',
        btn: 'View Conversation'
      }
    },
    pt: {
      badge: 'Alertas Inteligentes',
      title: 'Nunca perca um',
      titleHighlight: 'momento crítico',
      description: 'MGM monitora sua comunidade 24/7. Detecta urgência, quedas de sentimento e gargalos operacionais, sinalizando instantaneamente para você agir antes que o fogo se espalhe.',
      checks: ['Queda de sentimento', 'Picos de palavras-chave', 'Fadiga de mods'],
      btn: 'Configurar alertas',
      monitorTitle: 'Monitor Ao Vivo',
      updates: 'Atualizações em tempo real',
      mockAlerts: [
        { title: 'Beta Produto', time: 'Agora', desc: 'Queda anormal de sentimento detectada na última hora.' },
        { title: 'Suporte VIP', time: '12m atrás', desc: 'Alto volume de perguntas sem resposta.' },
        { title: 'Chat Geral', time: '45m atrás', desc: 'Nome de concorrente mencionado 5x.' }
      ],
      detail: {
        badge: 'Análise',
        text: 'Detectado aumento de 45% em palavras negativas "crash", "quebrado", "reembolso" nos últimos 15 min em',
        btn: 'Ver Conversa'
      }
    }
  }[lang];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Text Side - Left */}
        <div className="lg:w-1/2 space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wide border border-rose-100">
              <ShieldAlert size={14} />
              <span>{t.badge}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              {t.title} <span className="text-rose-500">{t.titleHighlight}</span>.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex gap-4 pt-2">
              {t.checks.map((check: string, i: number) => (
                <div key={i} className="flex items-center gap-2 text-stone-700 font-medium text-sm">
                  <CheckCircle2 size={16} className="text-rose-500" />
                  <span>{check}</span>
                </div>
              ))}
            </div>

          </ScrollReveal>
        </div>

        {/* Mockup Side - Right */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div
            initial={{ rotateY: 5, rotateX: 5, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 z-20 bg-rose-500 text-white p-4 rounded-2xl shadow-xl shadow-rose-500/30 hidden md:block"
            >
              <Bell className="w-6 h-6" fill="currentColor" />
            </motion.div>

            <Card className="min-h-[400px] bg-white/50 backdrop-blur-sm border-stone-200/60 p-6 relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-stone-800 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  {t.monitorTitle}
                </h3>
                <div className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">{t.updates}</div>
              </div>

              <div className="space-y-2">
                <AlertRow title={t.mockAlerts[0].title} time={t.mockAlerts[0].time} alertDesc={t.mockAlerts[0].desc} severity="critical" active={activeTab === 0} onClick={() => setActiveTab(0)} />
                <AlertRow title={t.mockAlerts[1].title} time={t.mockAlerts[1].time} alertDesc={t.mockAlerts[1].desc} severity="medium" active={activeTab === 1} onClick={() => setActiveTab(1)} />
                <AlertRow title={t.mockAlerts[2].title} time={t.mockAlerts[2].time} alertDesc={t.mockAlerts[2].desc} severity="low" active={activeTab === 2} onClick={() => setActiveTab(2)} />
              </div>

              {/* Active Alert Detail */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-rose-50 rounded-xl border border-rose-100"
              >
                <div className="flex items-center gap-2 mb-2 text-rose-700 text-xs font-bold uppercase tracking-wider">
                  <ShieldAlert size={12} />
                  <span>{t.detail.badge}</span>
                </div>
                <p className="text-sm text-stone-700 mb-3">
                  {t.detail.text} <strong>#{t.mockAlerts[0].title.toLowerCase().replace(' ', '-')}</strong>.
                </p>
                <button className="w-full py-2 bg-white border border-rose-200 text-rose-600 rounded-lg text-xs font-bold hover:bg-rose-100 transition-colors">
                  {t.detail.btn}
                </button>
              </motion.div>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  );
};