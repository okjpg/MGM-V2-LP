import React from 'react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AIChatFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      badge: 'Ask Anything',
      title: 'Your data,',
      titleHighlight: 'conversationalized.',
      description: 'Stop exporting CSVs. Just ask MGM AI natural language questions about your community\'s health, trends, and top performers.',
      questions: ["Show me the most active users in #general", "Why did engagement drop last Tuesday?", "Draft a weekly recap for the executive team"],
      chat: {
        header: 'MGM Intelligence',
        user: 'Which topics are driving the most negative sentiment this week?',
        bot: {
          intro: 'I found 2 main topics causing friction in',
          tag: '#support-vip',
          issues: [
            { title: 'Login Issues', severity: 'High Severity' },
            { title: 'API Rate Limits', severity: 'Medium Severity' }
          ],
          actions: ['Alert Engineering', 'View thread']
        },
        input: 'Ask follow-up question...'
      }
    },
    pt: {
      badge: 'Pergunte Tudo',
      title: 'Seus dados,',
      titleHighlight: 'conversacionais.',
      description: 'Pare de exportar CSVs. Basta perguntar à MGM AI em linguagem natural sobre a saúde, tendências e melhores desempenhos da sua comunidade.',
      questions: ["Mostre os usuários mais ativos no #geral", "Por que o engajamento caiu na terça?", "Rascunhe um resumo semanal para a diretoria"],
      chat: {
        header: 'Inteligência MGM',
        user: 'Quais tópicos estão gerando mais sentimento negativo esta semana?',
        bot: {
          intro: 'Encontrei 2 tópicos principais causando atrito em',
          tag: '#suporte-vip',
          issues: [
            { title: 'Problemas de Login', severity: 'Alta Severidade' },
            { title: 'Limites de Taxa da API', severity: 'Média Severidade' }
          ],
          actions: ['Alertar Engenharia', 'Ver thread']
        },
        input: 'Faça uma pergunta de acompanhamento...'
      }
    }
  }[lang];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-12 md:gap-16">
        
        {/* Text Content - Right on Desktop, Top on Mobile */}
        <div className="w-full lg:w-1/2 space-y-8">
           <ScrollReveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide border border-indigo-100">
               <Sparkles size={14} />
               <span>{t.badge}</span>
             </div>
           </ScrollReveal>
           
           <ScrollReveal delay={0.1}>
             <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
               {t.title} <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">{t.titleHighlight}</span>
             </h2>
           </ScrollReveal>

           <ScrollReveal delay={0.2}>
             <p className="text-lg text-stone-600 leading-relaxed">
               {t.description}
             </p>
           </ScrollReveal>

           <ScrollReveal delay={0.3}>
             <ul className="space-y-4">
               {t.questions.map((item: string, i: number) => (
                 <li key={i} className="flex items-center gap-3 text-stone-700 font-medium">
                   <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">
                     {i + 1}
                   </div>
                   "{item}"
                 </li>
               ))}
             </ul>
           </ScrollReveal>
        </div>

        {/* Mockup - Left on Desktop, Bottom on Mobile */}
        <div className="w-full lg:w-1/2 perspective-1000">
          <motion.div
            initial={{ rotateY: -10, rotateX: 5, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="min-h-[500px] flex flex-col p-0 overflow-hidden shadow-2xl bg-white/80 backdrop-blur-xl border-indigo-50/50">
              {/* Chat Header */}
              <div className="p-4 border-b border-stone-100 flex items-center gap-3 bg-white/50">
                <div className="w-2 h-2 rounded-full bg-rose-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-bold text-stone-400 uppercase tracking-wider">{t.chat.header}</span>
              </div>

              {/* Chat Body */}
              <div className="flex-grow p-6 space-y-6 bg-dot-pattern">
                
                {/* User Message */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-end"
                >
                  <div className="bg-stone-900 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
                    <p className="text-sm">{t.chat.user}</p>
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8, type: "spring", stiffness: 40, damping: 10 }}
                   className="flex items-start gap-4"
                >
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                     <Bot size={18} />
                   </div>
                   <div className="bg-white border border-stone-100 p-5 rounded-2xl rounded-tl-sm shadow-soft max-w-[90%]">
                      <p className="text-sm text-stone-800 mb-4">
                        {t.chat.bot.intro} <span className="font-bold bg-indigo-50 text-indigo-700 px-1 rounded">{t.chat.bot.tag}</span>:
                      </p>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-stone-700">{t.chat.bot.issues[0].title}</span>
                            <span className="text-rose-500 font-bold">{t.chat.bot.issues[0].severity}</span>
                          </div>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-rose-500 h-full w-[85%]" />
                          </div>
                        </div>

                        <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                           <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-stone-700">{t.chat.bot.issues[1].title}</span>
                            <span className="text-amber-500 font-bold">{t.chat.bot.issues[1].severity}</span>
                          </div>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full w-[45%]" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <button className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg font-bold hover:bg-indigo-100 transition-colors">
                          {t.chat.bot.actions[0]}
                        </button>
                         <button className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-lg font-bold hover:bg-stone-200 transition-colors">
                          {t.chat.bot.actions[1]}
                        </button>
                      </div>
                   </div>
                </motion.div>

              </div>

              {/* Chat Input */}
              <div className="p-4 bg-white border-t border-stone-100">
                 <div className="relative">
                   <input 
                     type="text" 
                     placeholder={t.chat.input}
                     className="w-full bg-stone-50 border border-stone-200 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                   />
                   <div className="absolute right-2 top-2 p-1.5 bg-white shadow-sm border border-stone-200 rounded-lg text-indigo-500 cursor-pointer hover:text-indigo-600">
                     <Send size={14} />
                   </div>
                 </div>
              </div>
            </Card>
          </motion.div>
        </div>

      </div>
    </div>
  );
};