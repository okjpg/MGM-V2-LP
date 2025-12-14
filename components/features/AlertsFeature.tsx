import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { ShieldAlert, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Bar, Cell, ResponsiveContainer, PieChart, Pie } from 'recharts';
import { ScrollReveal } from '../ui/ScrollReveal';

const timelineData = Array.from({ length: 20 }, (_, i) => ({
  name: i,
  critical: Math.floor(Math.random() * 5),
  medium: Math.floor(Math.random() * 8),
  low: Math.floor(Math.random() * 12),
}));

const gravityData = [
  { name: 'Critical', value: 45, color: '#f43f5e' }, // Rose 500
  { name: 'Medium', value: 120, color: '#fbbf24' }, // Amber 400
  { name: 'Low', value: 78, color: '#60a5fa' }, // Blue 400
];

const AlertItem = ({ severity, title, msg, time, onClick, isActive }: any) => {
  const badgeColors = {
    critical: 'bg-rose-500 text-white',
    medium: 'bg-amber-400 text-white',
    low: 'bg-blue-400 text-white'
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      onClick={onClick}
      className={`p-4 rounded-xl border mb-3 cursor-pointer transition-all ${isActive ? 'ring-2 ring-orange-400 shadow-md border-transparent bg-white' : 'bg-white border-stone-100 hover:border-orange-200'}`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${(badgeColors as any)[severity]}`}>
          {severity}
        </span>
        <span className="text-xs text-stone-400">{time}</span>
      </div>
      <h4 className="font-bold text-stone-800 text-sm mb-1">{title}</h4>
      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">{msg}</p>
    </motion.div>
  );
};

export const AlertsFeature: React.FC = () => {
  const [activeAlert, setActiveAlert] = useState(0);

  const alerts = [
    { severity: 'critical', title: 'Sales SP North', msg: 'Need to resolve this urgently before EOD.', time: '10:30 AM' },
    { severity: 'medium', title: 'Tech Support', msg: 'Integration issue identified with legacy system.', time: '09:15 AM' },
    { severity: 'critical', title: 'Product Beta', msg: 'Critical bug detected in payments module.', time: 'Yesterday' },
  ];

  return (
    <div className="py-24 bg-stone-100/50 -mx-4 md:-mx-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <ScrollReveal>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-wide mb-4">
               <ShieldAlert size={14} />
               <span>Intelligent Alerts</span>
             </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
             <h2 className="text-4xl font-bold text-stone-900 mb-4">Never miss a critical beat.</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
             <p className="text-stone-600">
               MGM detects urgency, sentiment drops, and operational bottlenecks, flagging them instantly so you can act.
             </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Dashboard Panel */}
          <ScrollReveal className="lg:col-span-2 h-full">
            <Card className="min-h-[500px] flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                 <div>
                   <h3 className="font-bold text-lg text-stone-800">Alert Timeline</h3>
                   <p className="text-sm text-stone-500">Historical severity distribution</p>
                 </div>
                 <div className="flex gap-2">
                    {['Low', 'Medium', 'Critical'].map(l => (
                      <div key={l} className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-100 text-xs font-medium text-stone-600">
                        <span className={`w-2 h-2 rounded-full ${l === 'Critical' ? 'bg-rose-500' : l === 'Medium' ? 'bg-amber-400' : 'bg-blue-400'}`} />
                        {l}
                      </div>
                    ))}
                 </div>
              </div>

              {/* Stacked Bar Chart */}
              <div className="flex-grow w-full h-64 mb-8">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={timelineData} stackOffset="sign">
                     <Bar dataKey="low" stackId="a" fill="#60a5fa" radius={[0,0,0,0]} />
                     <Bar dataKey="medium" stackId="a" fill="#fbbf24" radius={[0,0,0,0]} />
                     <Bar dataKey="critical" stackId="a" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                   </BarChart>
                 </ResponsiveContainer>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-stone-100 pt-8">
                 <div>
                    <h4 className="font-bold text-sm text-stone-800 mb-4">Most Alerted Groups</h4>
                    <div className="space-y-3">
                      {[
                        { name: "Sales SP North", count: 28, trend: 'up' },
                        { name: "Tech Support", count: 24, trend: 'down' },
                        { name: "Product Beta", count: 19, trend: 'up' }
                      ].map((g, i) => (
                        <div key={i} className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                             <span className="text-stone-400 font-mono text-xs">0{i+1}</span>
                             <span className="text-sm font-medium text-stone-700">{g.name}</span>
                           </div>
                           <div className="flex items-center gap-2">
                             <span className="font-bold text-stone-900">{g.count}</span>
                             <ArrowUpRight size={12} className={g.trend === 'up' ? 'text-rose-500' : 'text-emerald-500 rotate-90'} />
                           </div>
                        </div>
                      ))}
                    </div>
                 </div>
                 
                 <div className="flex items-center justify-between">
                    <div className="w-32 h-32 relative">
                       <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie 
                              data={gravityData} 
                              innerRadius={40} 
                              outerRadius={60} 
                              paddingAngle={5} 
                              dataKey="value"
                            >
                              {gravityData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                       </ResponsiveContainer>
                       <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                         <span className="text-xs text-stone-400 font-bold uppercase">Total</span>
                         <span className="text-xl font-bold text-stone-800">243</span>
                       </div>
                    </div>
                    <div className="space-y-2">
                      {gravityData.map(d => (
                         <div key={d.name} className="flex items-center gap-2 text-xs">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }} />
                            <span className="text-stone-500">{d.name}:</span>
                            <span className="font-bold text-stone-800">{d.value}</span>
                         </div>
                      ))}
                    </div>
                 </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Feed Sidebar */}
          <div className="space-y-4">
             <ScrollReveal delay={0.2}>
               <div className="flex items-center justify-between mb-2">
                 <h3 className="font-bold text-stone-800">Live Feed</h3>
                 <span className="text-xs bg-stone-200 px-2 py-1 rounded-full text-stone-600">5 New</span>
               </div>
             </ScrollReveal>
             
             <AnimatePresence>
               {alerts.map((alert, idx) => (
                 <ScrollReveal key={idx} delay={0.3 + (idx * 0.1)}>
                   <AlertItem 
                     {...alert} 
                     isActive={activeAlert === idx}
                     onClick={() => setActiveAlert(idx)}
                   />
                 </ScrollReveal>
               ))}
             </AnimatePresence>

             <ScrollReveal delay={0.6}>
               <Card className="bg-stone-50 border-stone-200 border-dashed text-center py-6 cursor-pointer hover:bg-stone-100 transition-colors">
                  <span className="text-sm font-medium text-stone-500">View archived alerts</span>
               </Card>
             </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
};
