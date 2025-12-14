import React from 'react';
import { Card, TactileButton } from '../ui/Card';
import { Check } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, features, recommended }: any) => (
  <Card className={`relative flex flex-col h-full ${recommended ? 'border-orange-200 shadow-glow ring-1 ring-orange-500/20' : ''}`}>
    {recommended && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-full">
        Most Popular
      </div>
    )}
    <div className="mb-6">
      <h3 className="text-lg font-bold text-stone-900">{title}</h3>
      <div className="mt-4 flex items-baseline">
        <span className="text-4xl font-bold tracking-tight text-stone-900">${price}</span>
        <span className="ml-1 text-sm font-semibold text-stone-500">/month</span>
      </div>
    </div>
    <ul className="space-y-4 mb-8 flex-1">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0 mt-0.5">
            <Check size={12} strokeWidth={3} />
          </div>
          <span className="text-sm text-stone-600 font-medium">{feature}</span>
        </li>
      ))}
    </ul>
    <TactileButton primary={recommended} className="w-full justify-center">
      {recommended ? 'Start Free Trial' : 'Get Started'}
    </TactileButton>
  </Card>
);

export const PricingFeature: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 20 } }
  };

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <ScrollReveal>
           <h2 className="text-4xl font-bold text-stone-900 mb-4">Simple, transparent pricing.</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
           <p className="text-lg text-stone-600">Start with a 14-day free trial. No credit card required.</p>
        </ScrollReveal>
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
      >
        <motion.div variants={item} className="h-full">
          <PricingCard 
            title="Starter" 
            price="29" 
            features={[
              "Monitor up to 3 groups",
              "7-day data retention",
              "Basic daily summaries",
              "1 user seat"
            ]} 
          />
        </motion.div>
        
        <motion.div variants={item} className="h-full">
          <PricingCard 
            title="Growth" 
            price="79" 
            recommended
            features={[
              "Monitor up to 10 groups",
              "30-day data retention",
              "Real-time alerts",
              "Advanced sentiment analysis",
              "5 user seats"
            ]} 
          />
        </motion.div>
        
        <motion.div variants={item} className="h-full">
          <PricingCard 
            title="Scale" 
            price="199" 
            features={[
              "Unlimited groups",
              "1-year data retention",
              "Custom AI reporting",
              "API Access",
              "Unlimited seats"
            ]} 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
