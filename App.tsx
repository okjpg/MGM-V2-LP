import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Layout, Menu, X, ChevronRight } from 'lucide-react';
import { DashboardHero } from './components/features/DashboardHero';
import { SummariesFeature } from './components/features/SummariesFeature';
import { AlertsFeature } from './components/features/AlertsFeature';
import { AnalyticsFeature } from './components/features/AnalyticsFeature';
import { AIChatFeature } from './components/features/AIChatFeature';
import { IntegrationsFeature } from './components/features/IntegrationsFeature';
import { PricingFeature } from './components/features/PricingFeature';
import { MemberInsightsFeature } from './components/features/MemberInsightsFeature';
import { WorkflowsFeature } from './components/features/WorkflowsFeature';
import { TargetAudienceFeature } from './components/features/TargetAudienceFeature';
import { TactileButton } from './components/ui/Card';
import { ScrollReveal } from './components/ui/ScrollReveal';
import { ContainerScroll } from './components/ui/ContainerScroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
           <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
             <Layout size={18} fill="currentColor" stroke="none" />
           </div>
           <span className="font-bold text-xl tracking-tight text-stone-900">MyGroupMetrics</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Features</a>
          <a href="#analytics" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Analytics</a>
          <a href="#pricing" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">Pricing</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-stone-900 hover:text-orange-600 transition-colors">Log in</a>
          <TactileButton primary>Schedule a Demo</TactileButton>
        </div>

        <button className="md:hidden p-2 text-stone-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-stone-100 p-6 flex flex-col gap-6 md:hidden shadow-2xl overflow-hidden"
          >
            <a href="#features" onClick={() => setIsOpen(false)} className="font-medium text-lg text-stone-800">Features</a>
            <a href="#analytics" onClick={() => setIsOpen(false)} className="font-medium text-lg text-stone-800">Analytics</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="font-medium text-lg text-stone-800">Pricing</a>
            <hr className="border-stone-100"/>
            <a href="#" className="font-medium text-lg text-stone-600">Log in</a>
            <TactileButton primary className="justify-center py-3">Schedule a Demo</TactileButton>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroText = () => {
  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-16 text-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] md:w-[1000px] h-[600px] bg-gradient-to-b from-orange-100/40 to-transparent rounded-[100%] blur-3xl -z-10" />
      
      <motion.div 
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-sm cursor-pointer hover:border-orange-200"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          <span>New: AI Analysis 2.0</span>
          <ChevronRight size={14} className="text-stone-400" />
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-stone-900 tracking-tight mb-6 md:mb-8 max-w-5xl mx-auto leading-[1.05]">
          Community insights <br className="hidden md:block"/> that <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">actually matter</span>.
        </h1>
        
        <p className="text-lg md:text-2xl text-stone-500 max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed font-light px-2">
          MGM turns noisy chat logs into actionable intelligence. <br className="hidden sm:block"/>Monitor, summarize, and grow with tactile precision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <TactileButton primary className="w-full sm:w-auto px-8 py-4 text-lg h-14 rounded-2xl justify-center">Schedule a Demo</TactileButton>
          <TactileButton className="w-full sm:w-auto px-8 py-4 text-lg h-14 rounded-2xl flex items-center justify-center gap-2">
            View Live Demo <ChevronRight size={16} />
          </TactileButton>
        </div>

        <p className="mt-8 text-xs text-stone-400 uppercase tracking-widest font-semibold">
          Trusted by 500+ Community Managers
        </p>
      </motion.div>
    </div>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-stone-900 font-sans selection:bg-orange-100 selection:text-orange-900 bg-dot-pattern overflow-x-hidden">
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-20 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 origin-left z-50" 
        style={{ scaleX }}
      />

      <main>
        {/* Main Dashboard Hero Feature */}
        <section className="relative z-10 pt-20">
          <ContainerScroll titleComponent={<HeroText />}>
            <DashboardHero />
          </ContainerScroll>
        </section>

        <section className="mb-0 mt-12 md:mt-20 relative z-20">
          <IntegrationsFeature />
        </section>

        {/* Features Sections */}
        <section id="features" className="bg-white border-y border-stone-100 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <SummariesFeature />
          </div>
        </section>

        <section className="relative bg-gradient-to-b from-stone-50/50 to-white">
           <AIChatFeature />
        </section>

        <section className="relative">
           <AlertsFeature />
        </section>

        <section id="analytics" className="bg-white border-y border-stone-100">
           <AnalyticsFeature />
        </section>

        <section className="relative">
           <MemberInsightsFeature />
        </section>

        <section className="bg-white border-y border-stone-100">
           <WorkflowsFeature />
        </section>

        <section className="relative bg-stone-50/20 border-t border-stone-100">
          <TargetAudienceFeature />
        </section>

        <section id="pricing" className="bg-[#FDFBF7]">
          <PricingFeature />
        </section>

        {/* Call to Action Footer */}
        <section className="py-24 px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto bg-stone-900 rounded-[2.5rem] p-8 md:p-24 text-center relative overflow-hidden shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/30 blur-[100px] rounded-full"></div>
               
               <div className="relative z-10">
                 <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">Ready to calm the chaos?</h2>
                 <p className="text-lg md:text-xl text-stone-400 mb-8 md:mb-10 max-w-2xl mx-auto">Join thousands of community builders who use MGM to turn conversation into conversion.</p>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="bg-white text-stone-900 px-8 py-4 md:px-10 md:py-5 rounded-2xl font-bold text-lg hover:bg-stone-100 transition-colors shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] w-full md:w-auto"
                 >
                   Schedule a Demo
                 </motion.button>
               </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Footer */}
        <footer className="bg-white text-stone-500 py-20 border-t border-stone-200">
           <div className="max-w-7xl mx-auto px-4 md:px-8">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                 <div className="flex items-center gap-2 mb-6 text-stone-900">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white">
                      <Layout size={18} fill="currentColor" stroke="none" />
                    </div>
                    <span className="font-bold text-xl tracking-tight">MyGroupMetrics</span>
                 </div>
                 <p className="max-w-sm text-lg font-light">
                   The operating system for modern communities. <br/>Built for calmness in a chaotic world.
                 </p>
               </div>
               <div>
                 <h4 className="text-stone-900 font-bold mb-6">Product</h4>
                 <ul className="space-y-4">
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Features</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Integrations</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Pricing</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Changelog</a></li>
                 </ul>
               </div>
               <div>
                 <h4 className="text-stone-900 font-bold mb-6">Company</h4>
                 <ul className="space-y-4">
                   <li><a href="#" className="hover:text-orange-600 transition-colors">About</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Blog</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Careers</a></li>
                   <li><a href="#" className="hover:text-orange-600 transition-colors">Contact</a></li>
                 </ul>
               </div>
             </div>
             <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-sm">
               <p className="mb-4 md:mb-0">&copy; 2024 MyGroupMetrics Inc. All rights reserved.</p>
               <div className="flex gap-6">
                 <a href="#" className="hover:text-stone-900">Privacy</a>
                 <a href="#" className="hover:text-stone-900">Terms</a>
               </div>
             </div>
           </div>
        </footer>
      </main>
    </div>
  );
}