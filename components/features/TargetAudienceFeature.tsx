import React from 'react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Briefcase, GraduationCap, Crown, MessageCircle, ArrowRight, ShieldCheck, Database, LayoutGrid } from 'lucide-react';
import { GlowingEffect } from '../ui/GlowingEffect';

const BentoCard = ({ children, className = "", delay = 0 }: { children?: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 1.0, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`bg-white rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 relative group overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 z-20 pointer-events-none">
       <GlowingEffect 
         spread={40} 
         glow={true} 
         disabled={false} 
         proximity={64} 
         inactiveZone={0.01} 
         borderWidth={3}
         movementDuration={10}
       />
    </div>
    <div className="absolute inset-0 bg-stone-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    <div className="relative z-10 h-full">
      {children}
    </div>
  </motion.div>
);

const AgencyVisual = () => (
  <div className="space-y-3 mt-6">
    {[1, 2, 3].map((i) => (
      <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-stone-100 shadow-sm group-hover:translate-x-2 transition-transform duration-500" style={{ transitionDelay: `${i * 100}ms` }}>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${i === 1 ? 'bg-orange-100 text-orange-600' : i === 2 ? 'bg-blue-100 text-blue-600' : 'bg-stone-100 text-stone-600'}`}>
          {i === 1 ? 'N' : i === 2 ? 'T' : 'F'}
        </div>
        <div className="flex-1">
          <div className="h-2 w-24 bg-stone-200 rounded-full mb-1.5" />
          <div className="h-1.5 w-16 bg-stone-100 rounded-full" />
        </div>
        <div className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold">
          +12%
        </div>
      </div>
    ))}
  </div>
);

const UniversityVisual = ({ safeLabel, modLabel }: { safeLabel: string, modLabel: string }) => (
  <div className="relative h-32 mt-6 flex items-center justify-center">
    <motion.div 
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-0 bg-blue-50 rounded-full blur-2xl opacity-60" 
    />
    <div className="relative bg-white p-4 rounded-2xl shadow-tactile border border-blue-100 text-center">
       <ShieldCheck className="w-8 h-8 text-blue-500 mx-auto mb-2" />
       <div className="text-xs font-bold text-stone-700">{safeLabel}</div>
       <div className="text-[10px] text-stone-400">{modLabel}</div>
    </div>
  </div>
);

const PaidCommunityVisual = () => (
  <div className="mt-8 relative">
    <div className="flex items-end gap-2 h-24 px-4">
      {[40, 65, 50, 85, 95].map((h, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full bg-amber-400 rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity"
        />
      ))}
    </div>
    <div className="absolute top-0 right-4 bg-white/90 backdrop-blur border border-stone-200 px-3 py-1 rounded-full text-xs font-bold text-amber-600 shadow-sm">
      High ROI
    </div>
  </div>
);

const WhatsappVisual = () => (
  <div className="mt-6 flex items-center justify-center gap-4 relative">
     {/* Chat side */}
     <div className="w-40 bg-[#DCF8C6] p-3 rounded-2xl rounded-tr-sm shadow-sm border border-stone-200/50 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
        <div className="h-2 w-20 bg-emerald-600/20 rounded-full mb-2" />
        <div className="h-2 w-28 bg-emerald-600/20 rounded-full" />
     </div>
     
     <ArrowRight className="text-stone-300 group-hover:text-emerald-500 transition-colors" />

     {/* Data side */}
     <div className="w-40 bg-white p-3 rounded-xl shadow-sm border border-stone-200 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
        <div className="flex items-center gap-2 mb-2 border-b border-stone-100 pb-2">
           <Database size={12} className="text-stone-400" />
           <div className="h-2 w-12 bg-stone-200 rounded-full" />
        </div>
        <div className="space-y-1">
           <div className="h-1.5 w-full bg-stone-100 rounded-full" />
           <div className="h-1.5 w-2/3 bg-stone-100 rounded-full" />
        </div>
     </div>
  </div>
);

export const TargetAudienceFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      eyebrow: 'Whatever your ecosystem',
      title: 'MGM gives you',
      titleHighlight: 'superpowers',
      desc: 'From idea to enterprise, MGM adapts to the way you manage people, turning every interaction into an asset.',
      cards: {
        agency: { title: 'Agency Owners', desc: 'Manage multiple client communities from a single HQ. Generate white-label reports that prove your impact.', link: 'Client Portfolio' },
        university: { title: 'Universities', desc: 'Create safe, monitored spaces for students and alumni. Detect bullying or distress signals instantly.', safe: 'Safe Space', mod: 'Moderation Active' },
        paid: { title: 'Paid Communities', desc: 'Reduce churn by identifying at-risk members early. Prove the dollar value of your membership.' },
        whatsapp: { title: 'Companies on WhatsApp', desc: 'Stop losing data in chat logs. Sync WhatsApp groups directly to your CRM. Turn unstructured chaos into structured insights.' }
      }
    },
    pt: {
      eyebrow: 'Qualquer que seja seu ecossistema',
      title: 'MGM te dá',
      titleHighlight: 'superpoderes',
      desc: 'Da ideia à empresa, o MGM se adapta à forma como você gerencia pessoas, transformando cada interação em um ativo.',
      cards: {
        agency: { title: 'Donos de Agência', desc: 'Gerencie múltiplas comunidades de clientes de um único QG. Gere relatórios white-label que provam seu impacto.', link: 'Portfólio de Clientes' },
        university: { title: 'Universidades', desc: 'Crie espaços seguros e monitorados para alunos e ex-alunos. Detecte bullying ou sinais de perigo instantaneamente.', safe: 'Espaço Seguro', mod: 'Moderação Ativa' },
        paid: { title: 'Comunidades Pagas', desc: 'Reduza o churn identificando membros em risco precocemente. Prove o valor financeiro da sua assinatura.' },
        whatsapp: { title: 'Empresas no WhatsApp', desc: 'Pare de perder dados em logs de chat. Sincronize grupos do WhatsApp diretamente com seu CRM. Transforme o caos em insights estruturados.' }
      }
    }
  }[lang];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8 bg-stone-50/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollReveal>
           <h2 className="text-sm font-bold text-stone-500 uppercase tracking-widest mb-4">{t.eyebrow}</h2>
           <h3 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">{t.title} <span className="text-orange-500">{t.titleHighlight}</span>.</h3>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
           <p className="text-lg text-stone-600">
             {t.desc}
           </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1: Agency Owners (Span 2) */}
        <BentoCard className="md:col-span-2 p-8 bg-gradient-to-br from-white to-stone-50" delay={0.1}>
           <div className="flex flex-col md:flex-row gap-8 h-full">
             <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 mb-4">
                    <Briefcase size={20} />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900 mb-2">{t.cards.agency.title}</h4>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {t.cards.agency.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-wide group-hover:gap-3 transition-all cursor-pointer">
                  <span>{t.cards.agency.link}</span> <ArrowRight size={14} />
                </div>
             </div>
             <div className="md:w-1/2 bg-stone-50 rounded-2xl border border-stone-100 p-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                   <LayoutGrid size={16} className="text-stone-300" />
                </div>
                <AgencyVisual />
             </div>
           </div>
        </BentoCard>

        {/* Card 2: Universities (Span 1) */}
        <BentoCard className="md:col-span-1 p-8 bg-white" delay={0.2}>
           <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
             <GraduationCap size={20} />
           </div>
           <h4 className="text-xl font-bold text-stone-900 mb-2">{t.cards.university.title}</h4>
           <p className="text-stone-600 text-sm mb-4">
             {t.cards.university.desc}
           </p>
           <UniversityVisual safeLabel={t.cards.university.safe} modLabel={t.cards.university.mod} />
        </BentoCard>

        {/* Card 3: Paid Communities (Span 1) */}
        <BentoCard className="md:col-span-1 p-8 bg-white" delay={0.3}>
           <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 mb-4">
             <Crown size={20} />
           </div>
           <h4 className="text-xl font-bold text-stone-900 mb-2">{t.cards.paid.title}</h4>
           <p className="text-stone-600 text-sm">
             {t.cards.paid.desc}
           </p>
           <PaidCommunityVisual />
        </BentoCard>

        {/* Card 4: Companies with WhatsApp (Span 2) */}
        <BentoCard className="md:col-span-2 p-8 bg-gradient-to-bl from-white to-stone-50" delay={0.4}>
           <div className="flex flex-col md:flex-row-reverse gap-8 h-full items-center">
             <div className="md:w-1/2 flex flex-col justify-between h-full">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                    <MessageCircle size={20} />
                  </div>
                  <h4 className="text-2xl font-bold text-stone-900 mb-2">{t.cards.whatsapp.title}</h4>
                  <p className="text-stone-600 leading-relaxed text-sm">
                    {t.cards.whatsapp.desc}
                  </p>
                </div>
             </div>
             <div className="md:w-1/2 w-full">
                <WhatsappVisual />
             </div>
           </div>
        </BentoCard>

      </div>
    </div>
  );
};