import React from 'react';
import { 
  Users, MessageSquare, TrendingUp, Sparkles, 
  ArrowUpRight, ArrowDownRight, Search, Bell, Plus, 
  ChevronRight, LayoutGrid, AlertCircle, Clock, ArrowRight
} from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell, Tooltip } from 'recharts';

// Mock Data
const activityData = Array.from({ length: 45 }, (_, i) => ({
  name: i,
  value: Math.floor(Math.random() * 50) + 20 + (i % 5) * 10
}));

const groupsData = [
  { name: 'Vendas SP Norte', score: 92, status: 'excellent', members: 50, mentions: 0, avatar: 'V' },
  { name: 'Suporte Técnico', score: 85, status: 'positive', members: 51, mentions: 1, avatar: 'S' },
  { name: 'Marketing Digital', score: 64, status: 'neutral', members: 52, mentions: 2, avatar: 'M' },
  { name: 'Produto Beta', score: 48, status: 'attention', members: 53, mentions: 3, avatar: 'P' },
];

const MetricCard = ({ label, value, trend, icon: Icon }: any) => (
  <div className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex flex-col justify-between">
    <div className="flex justify-between items-start mb-1">
      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{label}</span>
      {Icon && <Icon size={12} className="text-stone-300" />}
    </div>
    <div>
      <div className="text-xl font-bold text-stone-800 tracking-tight">{value}</div>
      <div className={`text-[10px] font-bold mt-0.5 flex items-center ${trend > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
        {trend > 0 ? <ArrowUpRight size={10} className="mr-0.5" /> : <ArrowDownRight size={10} className="mr-0.5" />}
        {Math.abs(trend)}%
      </div>
    </div>
  </div>
);

const InsightRow = ({ icon: Icon, text, action }: any) => (
  <div className="flex gap-2 p-2.5 bg-stone-50 rounded-lg border border-stone-100/50">
    <div className="mt-0.5 text-stone-400">
      <Icon size={14} />
    </div>
    <div className="flex-1">
      <p className="text-xs text-stone-700 font-medium leading-snug">{text}</p>
      <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-stone-500 cursor-pointer hover:text-orange-600 transition-colors">
        <ArrowRight size={10} /> {action}
      </div>
    </div>
  </div>
);

const GroupCard = ({ data, t }: any) => {
  const statusColors = {
    excellent: { bg: 'bg-emerald-100', text: 'text-emerald-700', label: 'Excelente' },
    positive: { bg: 'bg-green-100', text: 'text-green-700', label: 'Positivo' },
    neutral: { bg: 'bg-stone-100', text: 'text-stone-600', label: 'Neutro' },
    attention: { bg: 'bg-amber-100', text: 'text-amber-700', label: 'Atenção' },
  };
  const st = statusColors[data.status as keyof typeof statusColors];

  return (
    <div className="bg-white p-3 rounded-xl border border-stone-100 shadow-sm flex items-center justify-between">
       <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center font-bold text-stone-600 text-xs">
            {data.avatar}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5">
               <span className="font-bold text-stone-800 text-xs">{data.name}</span>
               <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase ${st.bg} ${st.text}`}>
                 {st.label}
               </span>
            </div>
            <div className="text-[10px] text-stone-400 flex gap-2">
               <span><strong>{data.members}</strong> {t.members}</span>
               <span><strong>{data.mentions}</strong> {t.mentions}</span>
            </div>
          </div>
       </div>
       <div className={`text-lg font-bold ${data.status === 'attention' ? 'text-amber-500' : 'text-stone-300'}`}>
          {data.score}
       </div>
    </div>
  )
}

export const DashboardHero: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const t = {
    en: {
      search: 'Ask MGM AI...',
      add: 'Add Group',
      overview: 'Overview',
      metrics: {
        groups: 'Groups',
        members: 'Members',
        msgs: 'Messages',
        eng: 'Engagement',
        insights: 'AI Insights'
      },
      actions: {
        title: 'Good morning, Bruno!',
        sub: 'Anticipate critical alerts',
        count: '0 OF 4',
        sug: 'Suggested actions'
      },
      insights: {
        title: 'MGM AI Insights',
        items: [
          { text: 'Group "Product Beta" had a 45% drop in engagement.', action: 'Reactivate with poll' },
          { text: '3 groups have questions unanswered for > 48h.', action: 'Prioritize moderation' },
          { text: 'Activity spikes detected on Tuesdays, 2pm-4pm.', action: 'Schedule content' }
        ]
      },
      index: {
        title: 'MGM Index',
        sub: 'Group Engagement',
        status: 'Light Attention',
        desc: 'Last week brought +12% in same-day responses.'
      },
      perf: {
        title: 'Your Performance vs MGM',
        sub: 'Avg engagement',
        label: 'Above average',
        yours: 'Your groups',
        avg: 'MGM Average',
        percent: 'You are in the top 68% of clients'
      },
      activity: {
        title: 'Group Activity',
        sub: 'Messages and members over last 3 months',
        msgCount: '38,760',
        memCount: '14,096'
      },
      groups: {
        title: 'Monitored Groups',
        sub: 'Real-time status of relevant spaces.',
        filter: ['Sales', 'Support', 'Marketing', 'Product'],
        members: 'members',
        mentions: 'mentions'
      }
    },
    pt: {
      search: 'Pergunte para a AI do MGM...',
      add: 'Adicionar Grupo',
      overview: 'Visão geral',
      metrics: {
        groups: 'Grupos',
        members: 'Membros',
        msgs: 'Mensagens',
        eng: 'Engajamento',
        insights: 'Insights AI'
      },
      actions: {
        title: 'Bom dia, Bruno!',
        sub: 'Antecipe alertas críticos',
        count: '0 DE 4',
        sug: 'Ações sugeridas'
      },
      insights: {
        title: 'Insights da AI MGM',
        items: [
          { text: 'Grupo "Produto Beta" teve queda de 45% no engajamento.', action: 'Reativar com enquete' },
          { text: '3 grupos com mais de 10 perguntas sem resposta há 48h.', action: 'Priorizar moderação' },
          { text: 'Picos de atividade detectados às terças, 14h-16h.', action: 'Agendar conteúdo' }
        ]
      },
      index: {
        title: 'Índice MGM',
        sub: 'Engajamento dos grupos',
        status: 'Atenção leve',
        desc: 'Última semana trouxe +12% em respostas no mesmo dia.'
      },
      perf: {
        title: 'Seu Desempenho vs MGM',
        sub: 'Engajamento médio',
        label: 'acima da média',
        yours: 'Seus grupos',
        avg: 'Média MGM',
        percent: 'Você está no top 68% dos clientes'
      },
      activity: {
        title: 'Atividade dos Grupos',
        sub: 'Mensagens e membros dos últimos 3 meses',
        msgCount: '38.760',
        memCount: '14.096'
      },
      groups: {
        title: 'Grupos monitorados',
        sub: 'Status em tempo real dos espaços relevantes.',
        filter: ['Vendas', 'Suporte', 'Marketing', 'Produto'],
        members: 'membros',
        mentions: 'menções'
      }
    }
  }[lang];

  return (
    <div className="w-full max-w-6xl mx-auto p-2 md:p-4">
      {/* Fake Browser UI Container - Static */}
      <div 
        className="bg-[#FDFBF7] rounded-[1.25rem] shadow-2xl border border-stone-200 overflow-hidden ring-1 ring-stone-900/5 font-sans"
      >
        {/* Header */}
        <div className="h-14 bg-white border-b border-stone-100 flex items-center justify-between px-4 sticky top-0 z-20">
           <div className="flex items-center gap-6">
              <span className="font-bold text-stone-800 hidden md:block text-sm">Home</span>
              <div className="relative hidden md:block w-72">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={14} />
                 <input 
                   type="text" 
                   placeholder={t.search} 
                   className="w-full pl-9 pr-10 py-1.5 bg-stone-50 border border-stone-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
                   readOnly
                 />
                 <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-white border border-stone-200 rounded text-[9px] font-bold text-stone-400">⌘K</div>
              </div>
           </div>
           <div className="flex items-center gap-3">
              <div className="p-1.5 text-stone-400 hover:bg-stone-50 rounded-lg cursor-pointer">
                 <Bell size={18} />
              </div>
              <div className="w-7 h-7 rounded-full bg-stone-200 flex items-center justify-center text-stone-600 font-bold text-xs">
                 B
              </div>
              <button className="bg-stone-900 text-white px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 hover:bg-stone-800 transition-colors">
                 <Plus size={14} /> <span className="hidden sm:inline">{t.add}</span>
              </button>
           </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-4 md:p-6 space-y-6 overflow-y-auto max-h-[600px] no-scrollbar">
           
           {/* Section 1: Metrics */}
           <div>
              <div className="flex items-center gap-2 mb-3">
                 <div className="p-1.5 bg-orange-100 text-orange-600 rounded-md">
                   <TrendingUp size={14} />
                 </div>
                 <div>
                    <h3 className="font-bold text-sm text-stone-800 leading-none">{t.overview}</h3>
                    <p className="text-[9px] text-stone-400 font-medium">Consolidated metrics</p>
                 </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                 <MetricCard label={t.metrics.groups} value="9" trend={12} icon={Users} />
                 <MetricCard label={t.metrics.members} value="486" trend={8} icon={Users} />
                 <MetricCard label={t.metrics.msgs} value="1.247" trend={-3} icon={MessageSquare} />
                 <MetricCard label={t.metrics.eng} value="78%" trend={15} icon={TrendingUp} />
                 <MetricCard label={t.metrics.insights} value="5" trend={0} icon={Sparkles} />
              </div>
           </div>

           {/* Section 2: Split Layout */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column (Actions & Insights) */}
              <div className="lg:col-span-2 space-y-4">
                 {/* Action Card */}
                 <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                          <div className="flex items-center gap-2 mb-0.5">
                             <AlertCircle size={14} className="text-orange-500" />
                             <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">ACTION REQUIRED</span>
                          </div>
                          <h3 className="text-lg font-bold text-stone-900">
                             {t.actions.title} <span className="text-stone-500 font-normal">{t.actions.sub}</span>
                          </h3>
                       </div>
                       <div className="px-2 py-0.5 bg-stone-100 rounded-full text-[10px] font-bold text-stone-600">
                          {t.actions.count}
                       </div>
                    </div>
                    <div className="pt-3 border-t border-stone-50 flex justify-between items-center cursor-pointer hover:bg-stone-50 p-1.5 -mx-1.5 rounded-lg transition-colors">
                       <span className="font-bold text-stone-700 text-sm">{t.actions.sug}</span>
                       <ChevronRight size={14} className="text-stone-400" />
                    </div>
                 </div>

                 {/* Insights Card */}
                 <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                       <div className="flex items-center gap-2">
                          <Sparkles size={16} className="text-orange-500" />
                          <h3 className="font-bold text-sm text-stone-800">{t.insights.title}</h3>
                       </div>
                       <div className="flex gap-2">
                          <span className="text-[10px] font-bold text-stone-400 cursor-pointer hover:text-stone-600">Export</span>
                          <span className="text-[10px] font-bold text-stone-400 cursor-pointer hover:text-stone-600">See more</span>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <InsightRow icon={TrendingUp} text={t.insights.items[0].text} action={t.insights.items[0].action} />
                       <InsightRow icon={AlertCircle} text={t.insights.items[1].text} action={t.insights.items[1].action} />
                       <InsightRow icon={Clock} text={t.insights.items[2].text} action={t.insights.items[2].action} />
                    </div>
                 </div>
              </div>

              {/* Right Column (Index & Benchmark) */}
              <div className="space-y-4">
                 {/* MGM Index Card */}
                 <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-5 rounded-xl text-white relative overflow-hidden shadow-lg shadow-orange-500/20">
                    <div className="absolute top-0 right-0 p-24 bg-white opacity-5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
                    <div className="relative z-10">
                       <div className="flex justify-between items-start mb-4">
                          <div>
                             <p className="text-orange-100 text-[10px] font-bold uppercase tracking-wider mb-0.5">{t.index.title}</p>
                             <h3 className="font-bold text-lg leading-tight">{t.index.sub}</h3>
                          </div>
                          <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                             <LayoutGrid className="text-white" size={16} />
                          </div>
                       </div>
                       
                       <div className="flex items-end gap-3 mb-4">
                          <span className="text-5xl font-bold tracking-tighter">78<span className="text-xl opacity-60 font-medium">/100</span></span>
                          <span className="mb-2 px-1.5 py-0.5 bg-white/20 rounded text-[9px] font-bold uppercase">{t.index.status}</span>
                       </div>

                       <div className="w-full bg-black/20 h-1 rounded-full overflow-hidden mb-3">
                          <div className="h-full bg-white w-[78%] rounded-full" />
                       </div>
                       <p className="text-[10px] text-orange-100 opacity-90 leading-relaxed">{t.index.desc}</p>
                    </div>
                 </div>

                 {/* Benchmark Card */}
                 <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
                    <div className="flex justify-between items-start mb-2">
                       <div>
                          <h3 className="font-bold text-stone-800 text-xs">{t.perf.title}</h3>
                          <p className="text-[10px] text-stone-400">{t.perf.sub}</p>
                       </div>
                       <ArrowUpRight size={14} className="text-stone-300" />
                    </div>
                    
                    <div className="flex items-center justify-center py-2 relative">
                       {/* Simplified Gauge Visualization */}
                       <div className="relative w-24 h-24">
                          <svg className="w-full h-full transform -rotate-90">
                             <circle cx="48" cy="48" r="40" fill="transparent" stroke="#f5f5f4" strokeWidth="8" />
                             <circle cx="48" cy="48" r="40" fill="transparent" stroke="#fb923c" strokeWidth="8" strokeDasharray="251" strokeDashoffset={251 * (1 - 0.75)} strokeLinecap="round" />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center">
                             <span className="text-lg font-bold text-emerald-500">+28%</span>
                             <span className="text-[8px] text-stone-400 font-bold uppercase">{t.perf.label}</span>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-1.5 mt-1">
                       <div className="flex justify-between text-[10px] items-center">
                          <div className="flex items-center gap-1.5">
                             <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                             <span className="text-stone-600">{t.perf.yours}</span>
                          </div>
                          <span className="font-bold text-stone-800">32%</span>
                       </div>
                       <div className="flex justify-between text-[10px] items-center">
                          <div className="flex items-center gap-1.5">
                             <div className="w-1.5 h-1.5 rounded-full bg-stone-300" />
                             <span className="text-stone-600">{t.perf.avg}</span>
                          </div>
                          <span className="font-bold text-stone-800">4%</span>
                       </div>
                    </div>
                    <div className="mt-3 p-1.5 bg-stone-50 rounded text-[9px] text-stone-500 text-center">
                       {t.perf.percent}
                    </div>
                 </div>
              </div>
           </div>

           {/* Section 3: Activity Chart */}
           <div className="bg-white p-4 rounded-xl border border-stone-100 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                 <div>
                    <h3 className="font-bold text-base text-stone-800">{t.activity.title}</h3>
                    <p className="text-[10px] text-stone-400">{t.activity.sub}</p>
                 </div>
                 <div className="flex gap-6 bg-stone-50 p-2 rounded-lg">
                    <div>
                       <span className="block text-[9px] font-bold text-stone-400 uppercase tracking-wider">{t.metrics.msgs}</span>
                       <span className="block font-bold text-lg text-stone-800">{t.activity.msgCount}</span>
                    </div>
                    <div className="w-px bg-stone-200 h-6" />
                    <div>
                       <span className="block text-[9px] font-bold text-stone-400 uppercase tracking-wider">{t.metrics.members}</span>
                       <span className="block font-bold text-lg text-stone-800">{t.activity.memCount}</span>
                    </div>
                 </div>
              </div>
              
              <div className="h-32 w-full">
                 <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                       <Tooltip cursor={{ fill: '#f5f5f4' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                       <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                          {activityData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#fb923c' : '#fdba74'} />
                          ))}
                       </Bar>
                    </BarChart>
                 </ResponsiveContainer>
              </div>
              <div className="flex justify-between text-[9px] text-stone-400 mt-2 px-1 font-mono">
                 <span>3 Apr</span>
                 <span>10 Apr</span>
                 <span>17 Apr</span>
                 <span>24 Apr</span>
                 <span>1 May</span>
                 <span>8 May</span>
                 <span>15 May</span>
                 <span>23 May</span>
                 <span>31 May</span>
              </div>
           </div>

           {/* Section 4: Monitored Groups */}
           <div className="pb-2">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-3">
                 <div>
                    <div className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mb-0.5">VISÃO GERAL DOS SEUS GRUPOS</div>
                    <h3 className="font-bold text-lg text-stone-800">{t.groups.title}</h3>
                    <p className="text-xs text-stone-500">{t.groups.sub}</p>
                 </div>
                 <div className="flex gap-2">
                    <button className="flex items-center gap-1 px-2.5 py-1.5 bg-white border border-stone-200 rounded-lg text-[10px] font-bold text-stone-600 hover:bg-stone-50">
                       Exportar
                    </button>
                    <button className="flex items-center gap-1 px-2.5 py-1.5 bg-orange-500 text-white rounded-lg text-[10px] font-bold hover:bg-orange-600 shadow-lg shadow-orange-500/20">
                       + Adicionar
                    </button>
                 </div>
              </div>

              <div className="flex gap-2 mb-3 overflow-x-auto no-scrollbar pb-1">
                 <span className="text-[10px] font-bold text-stone-400 py-1.5 px-2">Filtrar:</span>
                 {t.groups.filter.map((f: string) => (
                    <span key={f} className="px-2.5 py-1 bg-white border border-stone-200 rounded-full text-[10px] font-bold text-stone-600 hover:border-orange-300 cursor-pointer transition-colors whitespace-nowrap">
                       {f}
                    </span>
                 ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {groupsData.map((g, i) => (
                    <GroupCard key={i} data={g} t={t.groups} />
                 ))}
              </div>
              
              <div className="mt-6 text-center">
                 <button className="px-5 py-2 bg-white border border-stone-200 rounded-full text-xs font-bold text-stone-500 hover:bg-stone-50 transition-colors">
                    Carregar mais grupos
                 </button>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};
