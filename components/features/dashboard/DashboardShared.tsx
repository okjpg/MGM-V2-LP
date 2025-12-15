import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, ArrowDownRight, Clock, Star, Minus, Lightbulb, ArrowRight
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { ScrollReveal } from '../../ui/ScrollReveal';

// --- Mock Data ---

export const overviewData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  engagement: 40 + Math.random() * 40,
  members: 2000 + i * 10 + Math.random() * 50,
  messages: 1000 + Math.random() * 500
}));

export const peakHoursData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  intensity: Math.random() // 0 to 1
}));

export const topMembersData = [
  { name: 'Ana Silva', msgs: 245, trend: 'up' },
  { name: 'Carlos Santos', msgs: 198, trend: 'up' },
  { name: 'Maria Costa', msgs: 167, trend: 'down' },
  { name: 'Roberto Lima', msgs: 145, trend: 'up' },
];

export const topicsData = [
  { topic: 'Sales / Vendas', count: 245, full: 300, color: 'bg-emerald-500' },
  { topic: 'Support / Suporte', count: 189, full: 300, color: 'bg-blue-500' },
  { topic: 'Product / Produto', count: 156, full: 300, color: 'bg-indigo-500' },
  { topic: 'Finance', count: 98, full: 300, color: 'bg-amber-500' },
];

export const comparisonData = [
  { metric: 'Messages', val: '12.4k', prev: '10.8k', change: '+14.8%' },
  { metric: 'Active Members', val: '2,847', prev: '2,456', change: '+15.9%' },
  { metric: 'Engagement Rate', val: '78.5%', prev: '72.3%', change: '+8.6%' },
];

export const recommendationsData = [
  { title: 'Re-engage inactive members', badge: 'High Impact', color: 'text-rose-600 bg-rose-50 border-rose-100' },
  { title: 'Create topic on "Sales"', badge: 'Trending', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
];

export const futureLeadersData = [
  { name: 'Carolina Mendes', tags: ['Communicative', 'Proactive'] },
  { name: 'Thiago Ferreira', tags: ['Collaborative', 'Engaged'] },
];

// --- Helper Components ---

export const MetricBig = ({ label, value, subtext, trend, trendValue }: any) => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{label}</span>
      <div className={`px-1.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-0.5 ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
        {trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
        {trendValue}
      </div>
    </div>
    <div className="text-3xl font-bold text-stone-800 tracking-tight">{value}</div>
    <div className="text-xs text-stone-400 mt-1">{subtext}</div>
  </div>
);

export const SectionHeader = ({ title, action }: { title: string, action?: string }) => (
  <div className="flex items-center justify-between mb-4">
    <h3 className="font-bold text-stone-800">{title}</h3>
    {action && (
       <div className="text-[10px] font-bold bg-stone-100 text-stone-500 px-2 py-1 rounded uppercase tracking-wider">
         {action}
       </div>
    )}
  </div>
);

export const RiskMemberRow = ({ name, days, avatar, color, label }: any) => (
  <div className="flex items-center justify-between py-3 border-b border-stone-50 last:border-0">
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${color}`}>
        {avatar}
      </div>
      <div>
        <div className="text-sm font-bold text-stone-700">{name}</div>
        <div className="text-[10px] text-stone-400 flex items-center gap-1">
          <Clock size={10} /> {days} {label}
        </div>
      </div>
    </div>
    <div className="px-2 py-1 bg-stone-100 rounded text-[10px] font-bold text-stone-500 uppercase">
      Risco Alto
    </div>
  </div>
);

export const FeatureSection = ({ title, subtitle, children, align = "left" }: { title: string, subtitle: string, children?: React.ReactNode, align?: "left" | "right" }) => (
  <div className="py-20 md:py-32 border-b border-stone-100 last:border-0">
    <div className={`flex flex-col ${align === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
      <div className="lg:w-1/3 space-y-6">
        <ScrollReveal>
          <div className="w-12 h-1 bg-orange-500 mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-stone-900 leading-tight">{title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-stone-600 leading-relaxed font-light">{subtitle}</p>
        </ScrollReveal>
      </div>
      <div className="lg:w-2/3 w-full perspective-1000">
        <ScrollReveal delay={0.2} width="100%">
           {children}
        </ScrollReveal>
      </div>
    </div>
  </div>
);

// --- Widgets ---

export const TopMembersWidget = ({ t }: any) => (
  <Card className="h-full">
    <SectionHeader title={t.widgets.topMembers} action={t.widgets.last7} />
    <div className="space-y-4">
      {topMembersData.map((member, i) => (
        <div key={i} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-amber-100 text-amber-700' : 'bg-stone-100 text-stone-600'}`}>
              {i + 1}
            </div>
            <div>
              <div className="text-sm font-bold text-stone-800">{member.name}</div>
              <div className="text-xs text-stone-400">{member.msgs} {t.widgets.msgs}</div>
            </div>
          </div>
          <div className={`text-xs font-bold ${member.trend === 'up' ? 'text-emerald-500' : 'text-stone-300'}`}>
            {member.trend === 'up' ? <ArrowUpRight size={14} /> : <Minus size={14} />}
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export const TopicsWidget = ({ t }: any) => (
  <Card className="h-full">
    <SectionHeader title={t.widgets.topics} action={t.widgets.last7} />
    <div className="space-y-5">
      {topicsData.map((item, i) => (
        <div key={i}>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="font-bold text-stone-700">{item.topic}</span>
            <span className="font-bold text-stone-400">{item.count}</span>
          </div>
          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: `${(item.count / item.full) * 100}%` }}
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (i * 0.1) }}
               className={`h-full ${item.color} rounded-full`}
             />
          </div>
        </div>
      ))}
    </div>
  </Card>
);

export const ComparisonWidget = ({ t }: any) => (
  <Card className="h-full">
     <SectionHeader title={t.widgets.comparison} />
     <div className="space-y-0 divide-y divide-stone-100">
        <div className="grid grid-cols-3 text-[10px] font-bold text-stone-400 uppercase tracking-widest pb-2">
           <div>Metric</div>
           <div className="text-right">This Week</div>
           <div className="text-right">Change</div>
        </div>
        {comparisonData.map((item, i) => (
          <div key={i} className="grid grid-cols-3 py-3 items-center">
             <div className="text-sm font-bold text-stone-700">{item.metric}</div>
             <div className="text-sm text-stone-600 text-right">{item.val}</div>
             <div className="text-xs font-bold text-emerald-500 text-right bg-emerald-50 py-1 px-2 rounded-lg justify-self-end">{item.change}</div>
          </div>
        ))}
     </div>
  </Card>
);

export const RecommendationsWidget = ({ t }: any) => (
  <Card className="h-full border-orange-100 bg-orange-50/10">
    <div className="flex items-center gap-2 mb-4">
       <Lightbulb className="text-orange-500" size={18} />
       <h3 className="font-bold text-stone-800">{t.widgets.recs}</h3>
    </div>
    <div className="space-y-3">
      {recommendationsData.map((rec, i) => (
        <div key={i} className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm">
           <div className={`inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase mb-2 ${rec.color}`}>
             {rec.badge}
           </div>
           <p className="text-sm font-medium text-stone-800 mb-3">{rec.title}</p>
           <button className="w-full py-1.5 text-xs font-bold text-stone-500 bg-stone-50 rounded-lg hover:bg-stone-100 transition-colors flex items-center justify-center gap-1">
             {t.widgets.apply} <ArrowRight size={10} />
           </button>
        </div>
      ))}
    </div>
  </Card>
);

export const FutureLeadersWidget = ({ t }: any) => (
  <Card className="h-full">
     <SectionHeader title={t.widgets.leaders} />
     <div className="space-y-3">
        {futureLeadersData.map((leader, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-stone-50 rounded-xl border border-stone-100">
             <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600'}`}>
                  {leader.name.charAt(0)}
                </div>
                <div>
                   <div className="text-sm font-bold text-stone-800">{leader.name}</div>
                   <div className="flex gap-1 mt-0.5">
                      {leader.tags.map((tag: string) => (
                        <span key={tag} className="text-[9px] bg-white border border-stone-200 px-1 rounded text-stone-400 uppercase font-bold">{tag}</span>
                      ))}
                   </div>
                </div>
             </div>
             <Star size={14} className="text-amber-400 fill-amber-400" />
          </div>
        ))}
     </div>
  </Card>
);