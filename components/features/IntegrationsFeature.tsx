import React from 'react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';

interface IntegrationIconProps {
  label: string;
  color: string;
}

const IntegrationIcon: React.FC<IntegrationIconProps> = ({ label, color }) => (
  <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-tactile border border-stone-100 mx-4 whitespace-nowrap">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="font-bold text-stone-700">{label}</span>
  </div>
);

export const IntegrationsFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const integrations = [
    { label: 'Slack', color: 'bg-emerald-400' },
    { label: 'Discord', color: 'bg-indigo-400' },
    { label: 'WhatsApp', color: 'bg-green-500' },
    { label: 'Telegram', color: 'bg-sky-400' },
    { label: 'Circle', color: 'bg-blue-500' },
    { label: 'Mighty Networks', color: 'bg-rose-400' },
    { label: 'Discourse', color: 'bg-orange-400' },
    { label: 'Zapier', color: 'bg-orange-500' },
  ];

  const t = {
    en: { text: 'Works with your existing stack' },
    pt: { text: 'Funciona com suas ferramentas atuais' }
  }[lang];

  return (
    <div className="py-12 border-y border-stone-100 bg-stone-50/50 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10" />
      
      <div className="flex w-[200%] animate-scroll hover:[animation-play-state:paused]">
        <div className="flex items-center justify-around w-1/2">
          {integrations.map((item, idx) => (
            <IntegrationIcon key={`1-${idx}`} label={item.label} color={item.color} />
          ))}
        </div>
        <div className="flex items-center justify-around w-1/2">
           {integrations.map((item, idx) => (
            <IntegrationIcon key={`2-${idx}`} label={item.label} color={item.color} />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-xs font-bold uppercase tracking-widest text-stone-400">{t.text}</p>
      </div>
    </div>
  );
};