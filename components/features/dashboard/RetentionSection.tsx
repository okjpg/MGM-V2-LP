import React from 'react';
import { motion } from 'framer-motion';
import { Card, TactileButton } from '../../ui/Card';
import { 
  FeatureSection, SectionHeader, RiskMemberRow, RecommendationsWidget, 
  FutureLeadersWidget, ComparisonWidget 
} from './DashboardShared';

export const RetentionSection = ({ t }: { t: any }) => {
  return (
    <FeatureSection 
      title={t.sec2.title} 
      subtitle={t.sec2.subtitle}
      align="right"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-rose-50/30 border-rose-100">
             <SectionHeader title={t.sec2.riskTitle} action={`4 ${t.sec2.detected}`} />
             <div className="space-y-1">
                <RiskMemberRow name="Pedro Almeida" days="5" label={t.sec2.daysInactive} avatar="PA" color="bg-white border border-stone-200 text-stone-700" />
                <RiskMemberRow name="Lucia Mendes" days="3" label={t.sec2.daysInactive} avatar="LM" color="bg-rose-100 text-rose-700" />
                <RiskMemberRow name="Fernando Souza" days="7" label={t.sec2.daysInactive} avatar="FS" color="bg-rose-100 text-rose-700" />
             </div>
             <div className="mt-4 pt-4 border-t border-rose-100">
                <TactileButton className="w-full justify-center text-xs h-10 bg-white border-rose-200 text-rose-600 hover:bg-rose-50">
                  {t.sec2.btn}
                </TactileButton>
             </div>
          </Card>

          <Card className="p-6">
             <SectionHeader title={t.sec2.lifespan} action="+ 15d" />
             <div className="mb-4">
                <span className="text-4xl font-bold text-stone-900">4m 7d</span>
                <span className="text-sm text-stone-500 ml-2">{t.sec2.avgRetention}</span>
             </div>
             <div className="space-y-4">
                {[
                  { l: '< 30 days', v: '156', p: '20%' },
                  { l: '1-3 mo', v: '248', p: '45%' },
                  { l: '> 6 mo', v: '621', p: '90%' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-stone-500 mb-1">
                      <span>{item.l}</span>
                      <span className="font-bold">{item.v}</span>
                    </div>
                    <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: item.p }}
                        transition={{ duration: 1, delay: 0.2 + (i*0.1) }}
                        className="bg-stone-800 h-full rounded-full" 
                      />
                    </div>
                  </div>
                ))}
             </div>
          </Card>
        </div>
        
        {/* NEW WIDGET ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           <RecommendationsWidget t={t} />
           <FutureLeadersWidget t={t} />
           <ComparisonWidget t={t} />
        </div>
      </div>
    </FeatureSection>
  );
};