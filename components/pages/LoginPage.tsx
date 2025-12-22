import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, Mail, ArrowRight } from 'lucide-react';
import { Logo } from '../../App';
import { Language } from '../../App';

const content = {
  en: {
    title: 'Welcome back',
    subtitle: 'Sign in to your My Group Metrics account to continue',
    google: 'Continue with Google',
    email: 'Continue with Email',
    emailPlaceholder: 'your.email@example.com',
    emailLabel: 'Enter your email address to sign in or create an account',
    or: 'OR',
    terms: 'By clicking continue, you agree to our',
    termsLink: 'Terms of Service',
    and: 'and',
    privacyLink: 'Privacy Policy',
    back: 'Back',
    quote: '"MGM transformed how I manage my community. I finally understand what\'s happening in my groups."',
    quoteAuthor: 'Community Manager'
  },
  pt: {
    title: 'Bem-vindo de volta',
    subtitle: 'Entre na sua conta My Group Metrics para continuar',
    google: 'Continuar com Google',
    email: 'Continuar com Email',
    emailPlaceholder: 'seu.email@exemplo.com',
    emailLabel: 'Digite seu email para entrar ou criar uma conta',
    or: 'OU',
    terms: 'Ao clicar em continuar, você concorda com nossos',
    termsLink: 'Termos de Serviço',
    and: 'e',
    privacyLink: 'Política de Privacidade',
    back: 'Voltar',
    quote: '"O MGM transformou como eu gerencio minha comunidade. Finalmente entendo o que está acontecendo nos meus grupos."',
    quoteAuthor: 'Gestor de Comunidade'
  }
};

const GoogleIcon = (props: React.ComponentProps<'svg'>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12.479,14.265v-3.279h11.049c0.108,0.571,0.164,1.247,0.164,1.979c0,2.46-0.672,5.502-2.84,7.669C18.744,22.829,16.051,24,12.483,24C5.869,24,0.308,18.613,0.308,12S5.869,0,12.483,0c3.659,0,6.265,1.436,8.223,3.307L18.392,5.62c-1.404-1.317-3.307-2.341-5.913-2.341C7.65,3.279,3.873,7.171,3.873,12s3.777,8.721,8.606,8.721c3.132,0,4.916-1.258,6.059-2.401c0.927-0.927,1.537-2.251,1.777-4.059L12.479,14.265z" />
  </svg>
);

export const LoginPage = ({ lang, onBack }: { lang: Language; onBack: () => void }) => {
  const t = content[lang];

  return (
    <main className="relative min-h-screen md:h-screen md:overflow-hidden lg:grid lg:grid-cols-2">
      {/* Left side - Video */}
      <div className="relative hidden h-full flex-col bg-stone-900 p-10 lg:flex overflow-hidden">
        {/* Video Background - scaled to hide watermark */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 scale-110 -translate-y-[5%]"
        >
          <source src="/login-bg.mp4" type="video/mp4" />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-stone-900/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-transparent z-10" />

        {/* Logo */}
        <div className="z-20 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl overflow-hidden bg-white/10 backdrop-blur-sm shadow-lg">
            <img
              src="/logo.png"
              alt="MGM Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl font-bold text-white">My Group Metrics</p>
        </div>

        {/* Quote */}
        <div className="z-20 mt-auto">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
              {t.quote}
            </p>
            <footer className="text-sm font-medium text-white/60">
              — {t.quoteAuthor}
            </footer>
          </motion.blockquote>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-900 to-transparent z-10" />
      </div>

      {/* Right side - Form */}
      <div className="relative flex min-h-screen flex-col justify-center p-6 md:p-10 bg-[#FDFBF7]">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e7e5e4_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />

        {/* Decorative gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-1 text-stone-500 hover:text-stone-900 transition-colors text-sm font-medium group z-20"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {t.back}
        </motion.button>

        {/* Form container */}
        <div className="relative z-10 mx-auto w-full max-w-sm space-y-6">
          {/* Mobile logo */}
          <div className="flex items-center gap-2 lg:hidden mb-8">
            <Logo />
          </div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-stone-900 tracking-tight">
              {t.title}
            </h1>
            <p className="text-stone-500 text-base">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Social login buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-3"
          >
            <button
              type="button"
              className="w-full h-12 px-4 rounded-xl bg-white border border-stone-200 text-stone-700 font-medium hover:bg-stone-50 hover:border-stone-300 transition-all flex items-center justify-center gap-3 shadow-sm"
            >
              <GoogleIcon className="size-5" />
              {t.google}
            </button>
          </motion.div>

          {/* Separator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-stone-200" />
            <span className="text-stone-400 text-xs font-medium">{t.or}</span>
            <div className="flex-1 h-px bg-stone-200" />
          </motion.div>

          {/* Email form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-3"
          >
            <p className="text-stone-500 text-xs">
              {t.emailLabel}
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder={t.emailPlaceholder}
                className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Mail className="size-4 text-stone-400" />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full h-12 px-4 rounded-xl bg-stone-900 text-white font-medium hover:bg-stone-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-900/10"
            >
              {t.email}
              <ArrowRight size={16} />
            </motion.button>
          </motion.form>

          {/* Terms */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-stone-400 text-xs leading-relaxed"
          >
            {t.terms}{' '}
            <a href="#" className="text-stone-600 hover:text-orange-600 underline underline-offset-2 transition-colors">
              {t.termsLink}
            </a>{' '}
            {t.and}{' '}
            <a href="#" className="text-stone-600 hover:text-orange-600 underline underline-offset-2 transition-colors">
              {t.privacyLink}
            </a>.
          </motion.p>
        </div>
      </div>
    </main>
  );
};
