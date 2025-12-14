import React from 'react';
import { Card } from '../ui/Card';
import { GitBranch, Zap, Mail, Clock, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const WorkflowNode = ({ icon: Icon, title, sub, color, delay }: any) => (
  <motion.div 
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.4 }}
    className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm flex items-center gap-4 relative z-10 w-full max-w-sm mx-auto"
  >
     <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center text-white shadow-sm`}>
       <Icon size={20} />
     </div>
     <div>
       <div className="font-bold text-sm text-stone-800">{title}</div>
       <div className="text-xs text-stone-500">{sub}</div>
     </div>
  </motion.div>
)

const Connector = ({ delay }: { delay: number }) => (
  <motion.div 
    initial={{ height: 0 }}
    whileInView={{ height: 32 }}
    transition={{ delay, duration: 0.4 }}
    className="w-0.5 bg-stone-300 mx-auto my-1"
  />
)

export const WorkflowsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      badge: 'Automated Workflows',
      title: 'Community management on',
      titleHighlight: 'autopilot',
      description: "Set up intelligent workflows to welcome new members, re-engage ghosts, or flag toxicity. It’s like having a 24/7 moderator who never sleeps.",
      nodes: [
        { title: 'Trigger: New Member', sub: 'When someone joins #general' },
        { title: 'Delay: 1 Hour', sub: 'Wait for initial activity' },
        { title: 'Action: Send DM', sub: "Send 'Welcome Guide' template" }
      ],
      active: 'Workflow Active'
    },
    pt: {
      badge: 'Fluxos Automatizados',
      title: 'Gestão de comunidade no',
      titleHighlight: 'piloto automático',
      description: "Configure fluxos inteligentes para boas-vindas, reengajar fantasmas ou sinalizar toxicidade. É como ter um moderador 24/7 que nunca dorme.",
      nodes: [
        { title: 'Gatilho: Novo Membro', sub: 'Quando alguém entra em #geral' },
        { title: 'Espera: 1 Hora', sub: 'Aguardar atividade inicial' },
        { title: 'Ação: Enviar DM', sub: "Enviar modelo 'Guia de Boas-vindas'" }
      ],
      active: 'Fluxo Ativo'
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

        {/* Mockup */}
        <div className="lg:w-1/2 w-full perspective-1000">
           <div className="relative p-8 rounded-[2rem] bg-stone-50/50 border border-stone-100 overflow-hidden">
             
             {/* Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

             <div className="relative flex flex-col items-center">
                <WorkflowNode 
                  icon={Zap} 
                  title={t.nodes[0].title} 
                  sub={t.nodes[0].sub}
                  color="bg-stone-800"
                  delay={0}
                />
                
                <Connector delay={0.3} />
                
                <WorkflowNode 
                  icon={Clock} 
                  title={t.nodes[1].title} 
                  sub={t.nodes[1].sub}
                  color="bg-amber-500"
                  delay={0.4}
                />
                
                <Connector delay={0.7} />
                
                <WorkflowNode 
                  icon={Mail} 
                  title={t.nodes[2].title} 
                  sub={t.nodes[2].sub}
                  color="bg-blue-500"
                  delay={0.8}
                />

                <Connector delay={1.1} />

                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 border border-emerald-200 shadow-sm mt-2"
                >
                  <CheckCircle size={14} />
                  <span>{t.active}</span>
                </motion.div>
             </div>
           </div>
        </div>

      </div>
    </div>
  )
}