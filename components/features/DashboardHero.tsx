import React from 'react';
import { Users, MessageSquare, TrendingUp, Sparkles, MoreHorizontal, ArrowUpRight, ArrowDownRight, Search, Bell } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

const activityData = Array.from({ length: 40 }, (_, i) => ({
  name: i,
  value: Math.floor(Math.random() * 50) + 30 + (i > 30 ? 20 : 0)
}));

const MetricItem = ({ label, value, trend, icon, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="flex flex-col space-y-2"
  >
    <div className="flex justify-between items-start">
      <span className="text-xs font-semibold text-stone-400 tracking-wider uppercase">{label}</span>
      <div className="text-stone-300 scale-75 origin-top-right">{icon}</div>
    </div>
    <div className="text-2xl font-bold text-stone-800 tracking-tight">{value}</div>
    <div className={`text-xs font-medium flex items-center ${trend > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
      {trend > 0 ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
      {Math.abs(trend)}% vs last week
    </div>
  </motion.div>
);

const GroupRow = ({ name, members, status }: any) => {
  const statusColors = {
    excellent: 'bg-emerald-100 text-emerald-700',
    positive: 'bg-green-100 text-green-700',
    neutral: 'bg-stone-100 text-stone-600',
    attention: 'bg-amber-100 text-amber-700',
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-stone-100 last:border-0 hover:bg-stone-50/50 transition-colors px-4 -mx-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center text-stone-500 font-bold text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <div className="text-sm font-semibold text-stone-800">{name}</div>
          <div className="text-xs text-stone-500">{members} members</div>
        </div>
      </div>
      <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${(statusColors as any)[status]}`}>
        {status}
      </span>
    </div>
  );
};

export const DashboardHero: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-0 md:p-8 perspective-1000">
      {/* Fake Browser UI */}
      <motion.div 
        initial={{ rotateX: 5, y: 50, opacity: 0 }}
        whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl border border-stone-200 overflow-hidden ring-1 ring-stone-900/5"
      >
        {/* Top Bar */}
        <div className="h-14 md:h-16 border-b border-stone-100 flex items-center justify-between px-4 md:px-6 bg-white/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2 text-stone-400">
            <Search size={16} />
            <span className="text-xs md:text-sm">Ask MGM AI...</span>
          </div>
          <div className="flex items-center gap-3 md:gap-4">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
              <Sparkles size={14} />
            </div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400">
              <Bell size={14} />
            </div>
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold">
              JD
            </div>
          </div>
        </div>

        <div className="p-4 md:p-8 bg-[#FDFBF7]">
          
          {/* Top Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-5">
              <MetricItem label="Groups" value="9" trend={12} icon={<Users />} delay={0.1} />
            </Card>
            <Card className="p-5">
              <MetricItem label="Members" value="486" trend={8} icon={<Users />} delay={0.2} />
            </Card>
            <Card className="p-5">
              <MetricItem label="Messages" value="1.2k" trend={-3} icon={<MessageSquare />} delay={0.3} />
            </Card>
            <Card className="p-5 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <MetricItem label="Engagement" value="78%" trend={15} icon={<TrendingUp />} delay={0.4} />
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Left Col */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Engagement Score Hero */}
              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-none relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div>
                    <h3 className="text-orange-100 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">MGM Index</h3>
                    <h2 className="text-2xl md:text-3xl font-bold">Group Engagement</h2>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Sparkles className="text-white" size={20} />
                  </div>
                </div>
                
                <div className="flex items-end gap-3 md:gap-4 relative z-10">
                  <div className="text-5xl md:text-6xl font-bold tracking-tighter">78<span className="text-2xl text-orange-200 font-normal">/100</span></div>
                  <div className="pb-2 text-orange-100 font-medium text-xs md:text-sm bg-white/10 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">Light Attention</div>
                </div>
                <div className="mt-6 h-2 bg-black/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-white/90 rounded-full"
                  />
                </div>
                <p className="mt-4 text-orange-100 text-xs md:text-sm opacity-90">Last week brought +12% in same-day responses.</p>
              </Card>

              {/* Activity Chart */}
              <Card>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                   <h3 className="font-bold text-lg text-stone-800">Group Activity</h3>
                   <div className="flex gap-4">
                     <div className="text-center">
                       <span className="block text-xs text-stone-400 uppercase">Messages</span>
                       <span className="block font-bold text-stone-800">38,760</span>
                     </div>
                     <div className="text-center">
                       <span className="block text-xs text-stone-400 uppercase">Members</span>
                       <span className="block font-bold text-stone-800">14,096</span>
                     </div>
                   </div>
                </div>
                <div className="h-40 md:h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={activityData}>
                      <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                        {activityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#fb923c' : '#fdba74'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-xs text-stone-400 mt-4 px-2">
                  <span>Apr 16</span>
                  <span>May 10</span>
                  <span>Jun 02</span>
                  <span>Jun 29</span>
                </div>
              </Card>

            </div>

            {/* Sidebar Content - Right Col */}
            <div className="space-y-6">
              {/* Insights Card */}
              <Card>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-orange-500 font-semibold">
                    <Sparkles size={18} />
                    <span>MGM AI Insights</span>
                  </div>
                  <ArrowUpRight size={16} className="text-stone-400" />
                </div>
                <div className="space-y-4">
                  {[
                    { text: "Beta Product group had a 45% drop in engagement.", action: "Reactivate with poll", icon: "📉" },
                    { text: "3 groups have unanswered questions for >48h.", action: "Prioritize moderation", icon: "⚠️" },
                    { text: "Activity spikes detected Tuesdays 2pm-4pm.", action: "Schedule content", icon: "🕒" },
                  ].map((insight, i) => (
                    <div key={i} className="p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-orange-200 transition-colors cursor-pointer group">
                      <div className="flex gap-3">
                        <span className="text-lg">{insight.icon}</span>
                        <div>
                          <p className="text-sm text-stone-700 font-medium leading-snug mb-2">{insight.text}</p>
                          <span className="text-xs font-semibold text-orange-600 flex items-center gap-1 group-hover:underline">
                            → {insight.action}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Monitored Groups List */}
              <Card>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-stone-800">Monitored Groups</h3>
                  <MoreHorizontal size={16} className="text-stone-400" />
                </div>
                <div>
                  <GroupRow name="Product Beta" members={50} status="excellent" />
                  <GroupRow name="Support VIP" members={51} status="positive" />
                  <GroupRow name="Marketing Ops" members={52} status="neutral" />
                  <GroupRow name="Launch Team" members={53} status="attention" />
                </div>
                <button className="w-full mt-4 py-3 text-sm font-medium text-stone-500 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors">
                  Load more groups
                </button>
              </Card>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};