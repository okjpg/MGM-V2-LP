import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { TactileButton } from '../ui/Card';
import { ScrollReveal } from '../ui/ScrollReveal';

// Feature Components
import { OverviewSection } from '../features/dashboard/OverviewSection';
import { RetentionSection } from '../features/dashboard/RetentionSection';
import { TimingSection } from '../features/dashboard/TimingSection';
import { SentimentSection } from '../features/dashboard/SentimentSection';

// --- Types & Translations ---

type Language = 'en' | 'pt';

const content = {
  en: {
    header: {
      back: 'Back to Landing',
      demo: 'Book a Demo',
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
    widgets: {
      topMembers: 'Top Members',
      topics: 'Trending Topics',
      recs: 'AI Recommendations',
      leaders: 'Future Leaders',
      comparison: 'Period Comparison',
      msgs: 'msgs',
      apply: 'Apply',
      potential: 'High Potential',
      last7: 'Last 7 days'
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
      demo: 'Agendar Demo',
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
    widgets: {
      topMembers: 'Top Membros',
      topics: 'Temas em Alta',
      recs: 'Recomendações IA',
      leaders: 'Futuros Líderes',
      comparison: 'Comparação de Períodos',
      msgs: 'msgs',
      apply: 'Aplicar',
      potential: 'Alto Potencial',
      last7: 'Últimos 7 dias'
    },
    footer: {
      title: 'Pronto para ver seus próprios dados?',
      subtitle: 'Conecte sua comunidade em 2 minutos. Sem cartão de crédito.',
      cta: 'Começar Teste Grátis',
      back: 'Voltar ao Início'
    }
  }
};

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

        {/* Modular Feature Sections */}
        <OverviewSection t={t} />
        <RetentionSection t={t} />
        <TimingSection t={t} />
        <SentimentSection t={t} />

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