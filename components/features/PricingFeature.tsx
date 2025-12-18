import React, { useState, useEffect, useRef } from 'react';
import { Card, TactileButton } from '../ui/Card';
import { Check, Sparkles, Zap, Shield, Users, BarChart, Calendar } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingFeature: React.FC<{ lang: 'en' | 'pt' }> = ({ lang }) => {
  const [members, setMembers] = useState(500);
  const [isDemo, setIsDemo] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevMembersRef = useRef(members);

  // Logic: 79 reais for every 500 members
  const price = (members / 500) * 79;

  // Detect threshold crossing for animation
  useEffect(() => {
    const wasUnderThreshold = prevMembersRef.current <= 1000;
    const isNowOverThreshold = members > 1000;
    const wasOverThreshold = prevMembersRef.current > 1000;
    const isNowUnderThreshold = members <= 1000;

    // Crossing from under to over 1000
    if (wasUnderThreshold && isNowOverThreshold) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsDemo(true);
        setTimeout(() => setIsAnimating(false), 500);
      }, 300);
    }
    // Crossing from over to under 1000
    else if (wasOverThreshold && isNowUnderThreshold) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsDemo(false);
        setTimeout(() => setIsAnimating(false), 500);
      }, 300);
    }

    prevMembersRef.current = members;
  }, [members]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMembers(Number(e.target.value));
  };

  const t = {
    en: {
      title: 'Transparent pricing that scales.',
      subtitle: 'Pay only for the value you get. No hidden fees, no per-seat charges.',
      labelSize: 'Community Size',
      unit: 'members',
      estCost: 'Estimated monthly cost:',
      month: '/mo',
      perBlock: '* R$ 79,00 per 500 member block.',
      included: 'Everything included',
      features: [
        "Real-time message analysis",
        "Automated moderation tools",
        "Unlimited admin seats",
        "Advanced sentiment reporting",
        "MGM AI chat assistant"
      ],
      ctaHire: 'Start Now',
      ctaDemo: 'Book a Demo',
      disclaimer: 'No credit card required • Cancel anytime'
    },
    pt: {
      title: 'Preço transparente que escala.',
      subtitle: 'Pague apenas pelo valor que recebe. Sem taxas ocultas, sem cobrança por assento.',
      labelSize: 'Tamanho da Comunidade',
      unit: 'membros',
      estCost: 'Custo mensal estimado:',
      month: '/mês',
      perBlock: '* R$ 79,00 por bloco de 500 membros.',
      included: 'Tudo incluído',
      features: [
        "Análise de mensagens em tempo real",
        "Ferramentas de moderação automática",
        "Assentos de administrador ilimitados",
        "Relatórios avançados de sentimento",
        "Assistente de chat MGM AI"
      ],
      ctaHire: 'Contratar Agora',
      ctaDemo: 'Agendar Demo',
      disclaimer: 'Sem cartão de crédito • Cancele quando quiser'
    }
  }[lang];

  const features = [
    { icon: Zap, text: t.features[0] },
    { icon: Shield, text: t.features[1] },
    { icon: Users, text: t.features[2] },
    { icon: BarChart, text: t.features[3] },
    { icon: Sparkles, text: t.features[4] },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <ScrollReveal>
          <h2 className="text-4xl font-bold text-stone-900 mb-4">{t.title}</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-lg text-stone-600">
            {t.subtitle}
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.2}>
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-orange-100 shadow-2xl relative overflow-hidden bg-white">

            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">

              {/* Left Side: The Calculator */}
              <div className="space-y-8">
                <div>
                  <label className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2 block">
                    {t.labelSize}
                  </label>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-5xl font-bold text-stone-900 tabular-nums tracking-tight">
                      {members.toLocaleString()}
                    </span>
                    <span className="text-stone-500 font-medium">{t.unit}</span>
                  </div>

                  {/* Custom Range Slider */}
                  <div className="relative w-full h-12 flex items-center">
                    <input
                      type="range"
                      min="500"
                      max="10000"
                      step="500"
                      value={members}
                      onChange={handleSliderChange}
                      className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
                      aria-label="Member count slider"
                    />

                    {/* Visual Track */}
                    <div className="w-full h-4 bg-stone-100 rounded-full overflow-hidden relative border border-stone-200 shadow-inner z-10">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-500"
                        style={{ width: `${(members / 10000) * 100}%` }}
                        layoutId="sliderTrack"
                      />
                    </div>

                    {/* Visual Thumb */}
                    <motion.div
                      className="absolute h-8 w-8 bg-white border-2 border-orange-500 rounded-full shadow-lg z-10 pointer-events-none flex items-center justify-center"
                      style={{ left: `calc(${(members / 10000) * 100}% - 16px)` }}
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    </motion.div>
                  </div>

                  <div className="flex justify-between text-xs text-stone-400 font-medium mt-2 px-1">
                    <span>500</span>
                    <span>5k</span>
                    <span>10k+</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100">
                  <p className="text-sm text-stone-500 mb-1">{t.estCost}</p>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-stone-900 pb-1">R$</span>
                    <AnimatePresence mode='wait'>
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-6xl font-bold text-stone-900 tracking-tighter tabular-nums"
                      >
                        {price.toLocaleString('pt-BR')}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-stone-400 font-medium pb-2 text-lg">{t.month}</span>
                  </div>
                  <p className="text-xs text-stone-400 mt-2">
                    {t.perBlock}
                  </p>
                </div>
              </div>

              {/* Right Side: Features & CTA */}
              <div className="bg-stone-50 rounded-2xl p-6 md:p-8 border border-stone-100">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    <Sparkles size={16} />
                  </div>
                  <h3 className="font-bold text-stone-800">{t.included}</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-sm text-stone-600 font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Ultra-smooth Animated CTA Button */}
                <motion.button
                  className="relative w-full h-14 rounded-2xl overflow-hidden cursor-pointer"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 20px 40px -12px rgba(249, 115, 22, 0.4), 0 0 0 1px rgba(255,255,255,0.1) inset'
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 25,
                    mass: 0.5
                  }}
                  style={{
                    boxShadow: '0 10px 30px -10px rgba(249, 115, 22, 0.3)'
                  }}
                >
                  {/* Gradient background layers */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
                    }}
                  />

                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 opacity-60" />

                  {/* Smooth wave transition effect */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)'
                    }}
                    initial={false}
                    animate={{
                      x: isAnimating ? ['0%', '100%'] : '0%',
                      opacity: isAnimating ? [0, 1, 0] : 0
                    }}
                    transition={{
                      duration: 0.7,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  />

                  {/* Button content with ultra-smooth text transition */}
                  <div className="relative z-10 flex items-center justify-center gap-2.5 h-full">
                    <AnimatePresence mode="wait">
                      {isDemo ? (
                        <motion.div
                          key="demo"
                          className="flex items-center gap-2.5"
                          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <motion.div
                            initial={{ rotate: -90, scale: 0.5 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: 0.1
                            }}
                          >
                            <Calendar size={18} className="text-white/90" strokeWidth={2.5} />
                          </motion.div>
                          <span className="text-[15px] font-semibold text-white tracking-wide">
                            {t.ctaDemo}
                          </span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="hire"
                          className="flex items-center gap-2.5"
                          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                          transition={{
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        >
                          <motion.div
                            initial={{ rotate: 90, scale: 0.5 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: 0.1
                            }}
                          >
                            <Zap size={18} className="text-white/90" strokeWidth={2.5} />
                          </motion.div>
                          <span className="text-[15px] font-semibold text-white tracking-wide">
                            {t.ctaHire}
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Subtle shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 hover:opacity-100"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)',
                      backgroundSize: '200% 100%'
                    }}
                    whileHover={{
                      backgroundPosition: ['200% 0', '-200% 0'],
                      transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }
                    }}
                  />
                </motion.button>
                <p className="text-center text-xs text-stone-400 mt-4">
                  {t.disclaimer}
                </p>
              </div>

            </div>
          </Card>
        </div>
      </ScrollReveal>
    </div>
  );
};