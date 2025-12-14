import React from 'react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';

export const AIChatFeature: React.FC = () => {
  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center gap-16">
        
        {/* Left: Content */}
        <div className="md:w-1/2 space-y-8 order-2 md:order-1">
           <ScrollReveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wide border border-indigo-100">
               <Sparkles size={14} />
               <span>Ask Anything</span>
             </div>
           </ScrollReveal>
           
           <ScrollReveal delay={0.1}>
             <h2 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight">
               Your data, <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">conversationalized.</span>
             </h2>
           </ScrollReveal>

           <ScrollReveal delay={0.2}>
             <p className="text-lg text-stone-600 leading-relaxed">
               Stop exporting CSVs. Just ask MGM AI natural language questions about your community's health, trends, and top performers.
             </p>
           </ScrollReveal>

           <ScrollReveal delay={0.3}>
             <ul className="space-y-4">
               {["Show me the most active users in #general", "Why did engagement drop last Tuesday?", "Draft a weekly recap for the executive team"].map((item, i) => (
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

        {/* Right: Mockup */}
        <div className="md:w-1/2 w-full perspective-1000 order-1 md:order-2">
          <motion.div
            initial={{ rotateY: 10, rotateX: 5, opacity: 0 }}
            whileInView={{ rotateY: 0, rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="min-h-[500px] flex flex-col p-0 overflow-hidden shadow-2xl bg-white/80 backdrop-blur-xl border-indigo-50/50">
              {/* Chat Header */}
              <div className="p-4 border-b border-stone-100 flex items-center gap-3 bg-white/50">
                <div className="w-2 h-2 rounded-full bg-rose-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-bold text-stone-400 uppercase tracking-wider">MGM Intelligence</span>
              </div>

              {/* Chat Body */}
              <div className="flex-grow p-6 space-y-6 bg-dot-pattern">
                
                {/* User Message */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-end"
                >
                  <div className="bg-stone-900 text-white px-5 py-3 rounded-2xl rounded-tr-sm max-w-[80%] shadow-lg">
                    <p className="text-sm">Which topics are driving the most negative sentiment this week?</p>
                  </div>
                </motion.div>

                {/* AI Response */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.95 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 0.8, type: "spring", stiffness: 50 }}
                   className="flex items-start gap-4"
                >
                   <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                     <Bot size={18} />
                   </div>
                   <div className="bg-white border border-stone-100 p-5 rounded-2xl rounded-tl-sm shadow-soft max-w-[90%]">
                      <p className="text-sm text-stone-800 mb-4">
                        I found 2 main topics causing friction in <span className="font-bold bg-indigo-50 text-indigo-700 px-1 rounded">#support-vip</span>:
                      </p>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                          <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-stone-700">Login Issues</span>
                            <span className="text-rose-500 font-bold">High Severity</span>
                          </div>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-rose-500 h-full w-[85%]" />
                          </div>
                        </div>

                        <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                           <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-stone-700">API Rate Limits</span>
                            <span className="text-amber-500 font-bold">Medium Severity</span>
                          </div>
                          <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-amber-500 h-full w-[45%]" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <button className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1.5 rounded-lg font-bold hover:bg-indigo-100 transition-colors">
                          Alert Engineering
                        </button>
                         <button className="text-xs bg-stone-100 text-stone-600 px-3 py-1.5 rounded-lg font-bold hover:bg-stone-200 transition-colors">
                          View thread
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
                     placeholder="Ask follow-up question..." 
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
