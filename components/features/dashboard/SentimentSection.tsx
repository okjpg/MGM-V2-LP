import React from 'react';
import { ThumbsUp, AlertTriangle } from 'lucide-react';
import { Card } from '../../ui/Card';
import { FeatureSection } from './DashboardShared';

export const SentimentSection = ({ t }: { t: any }) => {
  return (
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
  );
};