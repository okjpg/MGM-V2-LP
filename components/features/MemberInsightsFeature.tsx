import React from 'react';
import { Card, TactileButton } from '../ui/Card';
import { Trophy, TrendingDown, Star, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

const MemberRow = ({ name, role, score, status, delay, impactText }: any) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="flex items-center justify-between p-3 rounded-xl hover:bg-stone-50 transition-colors group cursor-pointer border border-transparent hover:border-stone-100"
  >
    <div className="flex items-center gap-3">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-stone-200 to-stone-100 flex items-center justify-center font-bold text-stone-600">
          {name.charAt(0)}
        </div>
        {status === 'champion' && (
          <div className="absolute -bottom-1 -right-1 bg-amber-400 text-white p-0.5 rounded-full border-2 border-white">
            <Star size={8} fill="currentColor" />
          </div>
        )}
      </div>
      <div>
        <h4 className="text-sm font-bold text-stone-800">{name}</h4>
        <p className="text-xs text-stone-500">{role}</p>
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="text-right hidden sm:block">
        <div className="text-xs font-bold text-stone-700">{score} {impactText}</div>
        <div className="w-20 h-1 bg-stone-100 rounded-full mt-1 overflow-hidden">
          <div className="h-full bg-indigo-500" style={{ width: `${Math.min(parseInt(score), 100)}%` }}></div>
        </div>
      </div>
      <button className="text-stone-300 hover:text-stone-600 transition-colors">
        <MoreHorizontal size={16} />
      </button>
    </div>
  </motion.div>
)

export const MemberInsightsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      badge: 'Member Health',
      title: 'Spotlight your',
      titleHighlight: 'champions',
      description: "Identify who drives conversation and who's drifting away. MGM scores every member based on sentiment, activity, and influence, so you know exactly who to reward and who to re-engage.",
      btn: 'View Leaderboard',
      card: {
        title: 'Community Health',
        top: 'Top Contributors',
        atRisk: 'At Risk',
        impact: 'Impact'
      },
      alert: {
        title: 'Retention Alert',
        text: "3 key contributors haven't posted in 7 days.",
        link: 'Draft re-engagement message?'
      }
    },
    pt: {
      badge: 'Saúde dos Membros',
      title: 'Destaque seus',
      titleHighlight: 'campeões',
      description: "Identifique quem impulsiona a conversa e quem está se afastando. MGM pontua cada membro com base em sentimento, atividade e influência, para que você saiba exatamente quem recompensar e quem reengajar.",
      btn: 'Ver Tabela de Líderes',
      card: {
        title: 'Saúde da Comunidade',
        top: 'Principais Contribuintes',
        atRisk: 'Em Risco',
        impact: 'Impacto'
      },
      alert: {
        title: 'Alerta de Retenção',
        text: "3 contribuidores chave não postam há 7 dias.",
        link: 'Rascunhar msg de reengajamento?'
      }
    }
  }[lang];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row gap-16 items-center">

        {/* Text Side - Left */}
        <div className="lg:w-1/2 space-y-8">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wide border border-amber-200">
              <Trophy size={14} />
              <span>{t.badge}</span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
              {t.title} <span className="text-amber-500">{t.titleHighlight}</span>.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-stone-600 leading-relaxed">
              {t.description}
            </p>
          </ScrollReveal>

        </div>

        {/* Mockup Side - Right */}
        <div className="lg:w-1/2 w-full perspective-1000">
          <motion.div
            initial={{ rotateY: 5, x: 20, opacity: 0 }}
            whileInView={{ rotateY: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-6 relative overflow-hidden bg-white shadow-2xl border-stone-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-stone-800">{t.card.title}</h3>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-stone-200" />)}
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center text-[10px] font-bold text-stone-500">+42</div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">{t.card.top}</div>
                <MemberRow name="Alex Rivers" role="Product Designer" score="98" status="champion" delay={0.1} impactText={t.card.impact} />
                <MemberRow name="Sarah Chen" role="Engineering Lead" score="94" status="champion" delay={0.2} impactText={t.card.impact} />

                <div className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2 mt-6">{t.card.atRisk}</div>
                <MemberRow name="Mike Ross" role="Customer Success" score="32" status="risk" delay={0.3} impactText={t.card.impact} />
              </div>

              {/* Floating Analysis */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-3"
              >
                <div className="p-2 bg-amber-100 rounded-lg text-amber-600 h-fit">
                  <TrendingDown size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-stone-800">{t.alert.title}</p>
                  <p className="text-xs text-stone-600 mt-1">
                    {t.alert.text} <span className="underline cursor-pointer font-bold hover:text-amber-600 transition-colors">{t.alert.link}</span>
                  </p>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  )
}