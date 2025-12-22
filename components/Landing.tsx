'use client';

import { motion } from 'framer-motion';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-stained-glass px-4 py-8 sm:p-6 md:p-8 relative overflow-hidden animate-page-reveal">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 pattern-sacred opacity-30" />

      {/* Light Rays Effect - Hidden on small mobile for performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hidden sm:block">
        <div className="absolute top-0 left-1/4 w-64 h-full bg-gradient-to-b from-[var(--celestial-divine)]/20 to-transparent blur-3xl animate-light-rays" />
        <div className="absolute top-0 right-1/4 w-64 h-full bg-gradient-to-b from-[var(--celestial-azure)]/20 to-transparent blur-3xl animate-light-rays" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-3xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-[var(--celestial-ivory)]/95 backdrop-blur-sm rounded-none md:rounded-sm shadow-2xl border-ornate overflow-hidden"
        >
          {/* Ornamental Top Border */}
          <div className="h-3 bg-gradient-to-r from-[var(--celestial-gold)] via-[var(--celestial-light-gold)] to-[var(--celestial-gold)]" />

          <div className="p-6 sm:p-8 md:p-12 lg:p-16 text-center">
            {/* Header */}
            <div className="mb-8 md:mb-10 animate-fade-in-stagger stagger-1">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                {/* Decorative Element Left */}
                <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[var(--celestial-gold)]" />

                {/* Sacred Symbol */}
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--celestial-gold)] animate-divine-glow flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
                </svg>

                {/* Decorative Element Right */}
                <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[var(--celestial-gold)]" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-3 sm:mb-4 text-[var(--celestial-text)] tracking-tight leading-tight px-2" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
                Wrapped dos Pecados
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic text-[var(--celestial-text-soft)]">
                Anno Domini 2025
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-10">
              <div className="w-2 h-2 bg-[var(--celestial-gold)] rotate-45" />
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--celestial-gold)] to-transparent" />
              <div className="w-2 h-2 bg-[var(--celestial-gold)] rotate-45" />
            </div>

            {/* Description */}
            <div className="mb-8 md:mb-10 space-y-3 sm:space-y-4 animate-fade-in-stagger stagger-2 px-2">
              <p className="text-base sm:text-lg md:text-xl font-serif text-[var(--celestial-text)] leading-relaxed">
                Faça uma autoavaliação honesta dos seus pecados em 2025.
              </p>
              <p className="text-base sm:text-lg md:text-xl font-serif text-[var(--celestial-text-soft)] leading-relaxed">
                Descubra seu nível de santidade (ou não) e receba seu julgamento final.
              </p>
            </div>

            {/* Privacy Badge */}
            <div className="mb-8 md:mb-10 animate-fade-in-stagger stagger-3">
              <div className="inline-flex items-center gap-2 sm:gap-3 bg-[var(--celestial-parchment)] px-4 sm:px-6 py-2.5 sm:py-3 border-2 border-[var(--celestial-gold)]/30 rounded-sm touch-target">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--celestial-gold)] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-gothic text-xs sm:text-sm text-[var(--celestial-text)]">Confissão Anônima</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 animate-fade-in-stagger stagger-4">
              <div className="p-5 sm:p-6 bg-[var(--celestial-parchment)]/50 border border-[var(--celestial-gold)]/20 rounded-sm">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--celestial-gold)] mx-auto mb-2 sm:mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <p className="font-gothic text-xs text-[var(--celestial-text-soft)] leading-relaxed">
                  CV Pecados Catalogados
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-[var(--celestial-parchment)]/50 border border-[var(--celestial-gold)]/20 rounded-sm">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--celestial-gold)] mx-auto mb-2 sm:mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <p className="font-gothic text-xs text-[var(--celestial-text-soft)] leading-relaxed">
                  Julgamento Divino
                </p>
              </div>

              <div className="p-5 sm:p-6 bg-[var(--celestial-parchment)]/50 border border-[var(--celestial-gold)]/20 rounded-sm">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--celestial-gold)] mx-auto mb-2 sm:mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-gothic text-xs text-[var(--celestial-text-soft)] leading-relaxed">
                  Pergaminho Sagrado
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mb-6 sm:mb-8 animate-fade-in-stagger stagger-5">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onStart}
                className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 bg-gradient-to-r from-[var(--celestial-gold)] to-[var(--celestial-divine)] text-[var(--celestial-text)] font-gothic text-sm sm:text-base tracking-wider rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden touch-target"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 justify-center">
                  Iniciar Confissão
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--celestial-light-gold)] to-[var(--celestial-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.button>
            </div>

            {/* Footer Note */}
            <p className="text-xs sm:text-sm font-serif italic text-[var(--celestial-text-soft)]/70 animate-fade-in-stagger stagger-6 px-4 leading-relaxed">
              Nenhum dado é armazenado. Tudo acontece no confessionário do seu navegador.
            </p>
          </div>

          {/* Ornamental Bottom Border */}
          <div className="h-3 bg-gradient-to-r from-[var(--celestial-gold)] via-[var(--celestial-light-gold)] to-[var(--celestial-gold)]" />
        </motion.div>

        {/* Floating Ethereal Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[var(--celestial-azure)]/20 rounded-full blur-3xl animate-ascend" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[var(--celestial-divine)]/20 rounded-full blur-3xl animate-ascend" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
}
