import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock } from 'lucide-react';
import { Card } from '../../ui/Card';
import { FeatureSection, SectionHeader, peakHoursData } from './DashboardShared';

export const TimingSection = ({ t }: { t: any }) => {
  return (
    <FeatureSection 
      title={t.sec3.title} 
      subtitle={t.sec3.subtitle}
      align="left"
    >
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
              <SectionHeader title={t.sec3.peakTitle} action={`${t.sec3.peak}: 14h`} />
              <div className="flex items-end h-32 gap-1 mt-4">
                 {peakHoursData.map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.02 }}
                      className={`rounded-sm w-full origin-bottom ${h.intensity > 0.8 ? 'bg-orange-500' : h.intensity > 0.5 ? 'bg-orange-300' : 'bg-stone-200'}`}
                      style={{ height: `${h.intensity * 100}%` }}
                    />
                 ))}
              </div>
              <div className="flex justify-between text-[10px] text-stone-400 mt-2 font-bold uppercase">
                 <span>00:00</span>
                 <span>12:00</span>
                 <span>23:59</span>
              </div>
          </Card>

          <div className="space-y-6">
             <Card className="p-6 flex items-center justify-between">
                <div>
                   <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{t.sec3.bestTime}</div>
                   <div className="text-2xl font-bold text-stone-900">Tuesday, 14:00</div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                   <Zap size={24} />
                </div>
             </Card>
             <Card className="p-6 flex items-center justify-between">
                <div>
                   <div className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{t.sec3.responseRate}</div>
                   <div className="text-2xl font-bold text-stone-900">2.3 mins</div>
                </div>
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                   <Clock size={24} />
                </div>
             </Card>
          </div>
       </div>
    </FeatureSection>
  );
};