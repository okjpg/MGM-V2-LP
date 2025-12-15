import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../../ui/Card';
import { 
  FeatureSection, MetricBig, TopMembersWidget, TopicsWidget, overviewData 
} from './DashboardShared';

export const OverviewSection = ({ t }: { t: any }) => {
  return (
    <FeatureSection 
      title={t.sec1.title}
      subtitle={t.sec1.subtitle}
      align="left"
    >
      <div className="space-y-6">
        <Card className="p-6 md:p-8 border-stone-200/60 shadow-2xl shadow-stone-200/50 bg-white relative overflow-hidden">
           {/* Decorative blob */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
           
           <div className="relative z-10">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <MetricBig label={t.sec1.totalEng} value="78.5%" subtext={t.sec1.subtextEng} trend="up" trendValue="8.6%" />
                <MetricBig label={t.sec1.activeMem} value="2,847" subtext={t.sec1.subtextMem} trend="up" trendValue="15.9%" />
                <MetricBig label={t.sec1.volume} value="12.4k" subtext={t.sec1.subtextVol} trend="up" trendValue="14.8%" />
             </div>

             <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={overviewData}>
                    <defs>
                      <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                    <XAxis 
                      dataKey="day" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#a8a29e', fontSize: 12}} 
                      dy={10} 
                      tickFormatter={(val) => val % 5 === 0 ? `Nov ${val}` : ''}
                    />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)' }}
                      itemStyle={{ color: '#1c1917', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="engagement" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorEngagement)" />
                    <Area type="monotone" dataKey="messages" stroke="#1c1917" strokeWidth={2} strokeDasharray="5 5" fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
           </div>
        </Card>

        {/* NEW WIDGET ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <TopMembersWidget t={t} />
           <TopicsWidget t={t} />
        </div>
      </div>
    </FeatureSection>
  );
};