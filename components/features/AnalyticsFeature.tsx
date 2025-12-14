import React from 'react';
import { Card } from '../ui/Card';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 550 },
  { name: 'Thu', value: 480 },
  { name: 'Fri', value: 600 },
  { name: 'Sat', value: 700 },
  { name: 'Sun', value: 650 },
];

const SmallChart = ({ color }: { color: string }) => (
  <div className="h-16 w-full mt-2">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
            <stop offset="95%" stopColor={color} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke={color} fillOpacity={1} fill={`url(#gradient-${color})`} strokeWidth={2} />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

export const AnalyticsFeature: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } }
  };

  return (
    <div className="py-24 max-w-6xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div className="max-w-xl">
           <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide mb-4">
                <BarChart2 size={14} />
                <span>Deep Analytics</span>
              </div>
           </ScrollReveal>
           <ScrollReveal delay={0.1}>
              <h2 className="text-4xl font-bold text-stone-900 mb-4">Granular data for growth.</h2>
           </ScrollReveal>
           <ScrollReveal delay={0.2}>
              <p className="text-stone-600 text-lg">
                Understand member lifecycle, retention rates, and sentiment trends with enterprise-grade visualization.
              </p>
           </ScrollReveal>
        </div>
        <ScrollReveal delay={0.3} className="flex gap-2 mt-6 md:mt-0">
          <button className="px-4 py-2 text-sm font-medium text-stone-600 bg-white border border-stone-200 rounded-lg hover:bg-stone-50">Last 30 Days</button>
          <button className="px-4 py-2 text-sm font-medium text-white bg-stone-900 rounded-lg hover:bg-stone-800">Export Report</button>
        </ScrollReveal>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        
        {/* Metric 1 */}
        <motion.div variants={item}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Total Engagement</p>
                 <h3 className="text-2xl font-bold text-stone-800 mt-1">78.5%</h3>
               </div>
               <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+8.6%</span>
             </div>
             <SmallChart color="#10b981" />
          </Card>
        </motion.div>

        {/* Metric 2 */}
        <motion.div variants={item}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Active Members</p>
                 <h3 className="text-2xl font-bold text-stone-800 mt-1">2,847</h3>
               </div>
               <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+15.9%</span>
             </div>
             <SmallChart color="#3b82f6" />
          </Card>
        </motion.div>

        {/* Metric 3 */}
        <motion.div variants={item}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Response Rate</p>
                 <h3 className="text-2xl font-bold text-stone-800 mt-1">65.2%</h3>
               </div>
               <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+4.2%</span>
             </div>
             <SmallChart color="#f97316" />
          </Card>
        </motion.div>

        {/* Metric 4 */}
        <motion.div variants={item}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
             <div className="flex justify-between items-start">
               <div>
                 <p className="text-xs font-bold text-stone-400 uppercase tracking-wide">Churn Risk</p>
                 <h3 className="text-2xl font-bold text-stone-800 mt-1">4.2%</h3>
               </div>
               <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">-0.9%</span>
             </div>
             <SmallChart color="#8b5cf6" />
          </Card>
        </motion.div>

        {/* Large Chart Container */}
        <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-3 h-80">
          <Card className="h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-stone-800">Engagement Forecast</h3>
              <div className="flex gap-4 text-xs">
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-800"></span> Real</span>
                <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-stone-300 border border-stone-400 border-dashed"></span> Projected</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="80%">
               <AreaChart data={data}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#a8a29e', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    cursor={{ stroke: '#f97316', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area type="monotone" dataKey="value" stroke="#292524" strokeWidth={2} fill="url(#gradient-stone)" />
                  <defs>
                    <linearGradient id="gradient-stone" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#292524" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#292524" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
               </AreaChart>
            </ResponsiveContainer>
          </Card>
        </motion.div>

        {/* List Container */}
        <motion.div variants={item} className="col-span-1 lg:col-span-1 h-80">
          <Card className="h-full overflow-hidden">
             <h3 className="font-bold text-stone-800 mb-4">Top Contributors</h3>
             <div className="space-y-4">
               {[
                 { name: "Ana Silva", score: 98, role: "Admin" },
                 { name: "Carlos Santos", score: 92, role: "Mod" },
                 { name: "Maria Costa", score: 87, role: "Member" },
                 { name: "Roberto Lima", score: 82, role: "Member" },
               ].map((u, i) => (
                 <div key={i} className="flex items-center justify-between group cursor-pointer hover:bg-stone-50 p-2 -mx-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-xs font-bold text-stone-600 group-hover:bg-white group-hover:shadow-sm transition-all">
                        {u.name.charAt(0)}{u.name.split(' ')[1].charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-stone-800">{u.name}</p>
                        <p className="text-[10px] uppercase text-stone-400 font-semibold">{u.role}</p>
                      </div>
                    </div>
                    <span className="font-mono text-emerald-600 font-bold text-sm">{u.score}</span>
                 </div>
               ))}
             </div>
          </Card>
        </motion.div>

      </motion.div>
    </div>
  );
};
