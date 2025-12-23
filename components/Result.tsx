'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Result as ResultType } from '@/lib/types';
import { exportToPNG } from '@/lib/utils/imageExport';

interface ResultProps {
  result: ResultType;
  onRestart: () => void;
}

export default function Result({ result, onRestart }: ResultProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [isDiscreteMode, setIsDiscreteMode] = useState(false);

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      await exportToPNG('result-card', 'meus-pecados-2025.png');
    } catch (error) {
      console.error('Error downloading:', error);
      alert('Erro ao baixar a imagem. Tente novamente.');
    } finally {
      setIsExporting(false);
    }
  };

  // Determine theme based on tier
  const getTheme = () => {
    switch (result.tier) {
      case 'santo':
        return {
          bg: 'bg-stained-glass',
          cardBg: '[var(--celestial-ivory)]',
          textColor: '[var(--celestial-text)]',
          accentColor: '[var(--celestial-gold)]',
          borderColor: '[var(--celestial-gold)]',
          shadowColor: 'rgba(212, 175, 55, 0.3)',
        };
      case 'leve':
        return {
          bg: 'bg-stained-glass',
          cardBg: '[var(--celestial-parchment)]',
          textColor: '[var(--celestial-text)]',
          accentColor: '[var(--celestial-gold)]',
          borderColor: '[var(--celestial-gold)]',
          shadowColor: 'rgba(212, 175, 55, 0.25)',
        };
      case 'equilibrado':
        return {
          bg: 'bg-gradient-to-br from-[var(--neutral-mist)] to-[var(--neutral-stone)]',
          cardBg: '[var(--neutral-fog)]',
          textColor: '[var(--celestial-text)]',
          accentColor: '[var(--neutral-stone)]',
          borderColor: '[var(--neutral-stone)]',
          shadowColor: 'rgba(158, 158, 158, 0.3)',
        };
      case 'contumaz':
        return {
          bg: 'bg-obsidian',
          cardBg: '[var(--infernal-charcoal)]',
          textColor: '[var(--infernal-text)]',
          accentColor: '[var(--infernal-ember)]',
          borderColor: '[var(--infernal-ember)]',
          shadowColor: 'rgba(255, 107, 53, 0.4)',
        };
      case 'demonio':
        return {
          bg: 'bg-hellfire',
          cardBg: '[var(--infernal-obsidian)]',
          textColor: '[var(--infernal-text)]',
          accentColor: '[var(--infernal-flame)]',
          borderColor: '[var(--infernal-blood)]',
          shadowColor: 'rgba(139, 0, 0, 0.6)',
        };
    }
  };

  const theme = getTheme();
  const isInfernal = result.tier === 'contumaz' || result.tier === 'demonio';

  return (
    <div className={`min-h-screen ${theme.bg} py-6 sm:py-8 md:py-10 px-4 animate-page-reveal relative overflow-hidden`}>
      {/* Atmospheric Effects - Hidden on small mobile for performance */}
      {!isInfernal ? (
        <>
          <div className="absolute inset-0 pattern-sacred opacity-20 hidden sm:block" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[var(--celestial-azure)]/30 to-transparent blur-3xl animate-light-rays hidden md:block" />
        </>
      ) : (
        <>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[var(--infernal-ember)]/20 to-transparent blur-2xl hidden sm:block" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[var(--infernal-ember)] rounded-full animate-ember-float opacity-70 hidden sm:block"
              style={{
                left: `${20 + i * 10}%`,
                bottom: '10%',
                animationDelay: `${i * 0.7}s`,
              }}
            />
          ))}
        </>
      )}

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center mb-6 sm:mb-8 gap-3 sm:gap-4">
          <button
            type="button"
            onClick={onRestart}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-[var(--celestial-ivory)] text-[var(--celestial-text)] font-gothic text-xs tracking-wider border-2 border-[var(--celestial-gold)]/30 rounded-sm hover:border-[var(--celestial-gold)] hover:shadow-lg transition-all touch-target"
          >
            ← Nova Confissão
          </button>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center w-full sm:w-auto">
            {/* Discrete Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsDiscreteMode(!isDiscreteMode)}
              className={`px-4 sm:px-5 py-3 font-gothic text-xs tracking-wider rounded-sm border-2 transition-all touch-target ${
                isDiscreteMode
                  ? 'bg-[var(--celestial-gold)] text-[var(--celestial-text)] border-[var(--celestial-gold)]'
                  : 'bg-[var(--celestial-ivory)] text-[var(--celestial-text-soft)] border-[var(--celestial-gold)]/30 hover:border-[var(--celestial-gold)]/60'
              }`}
            >
              <span className="flex items-center gap-2 justify-center">
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
                <span className="hidden sm:inline">{isDiscreteMode ? 'Modo Discreto' : 'Modo Completo'}</span>
                <span className="sm:hidden">{isDiscreteMode ? 'Discreto' : 'Completo'}</span>
              </span>
            </button>

            {/* Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              disabled={isExporting}
              className={`group px-6 sm:px-8 py-3 font-gothic text-xs tracking-wider rounded-sm border-2 transition-all touch-target ${
                isExporting
                  ? 'bg-[var(--neutral-mist)] text-[var(--neutral-stone)] border-[var(--neutral-stone)] cursor-wait'
                  : `bg-gradient-to-r from-[var(${theme.accentColor})] to-[var(${theme.borderColor})] text-[var(${theme.textColor})] border-[var(${theme.borderColor})] hover:shadow-xl hover:scale-105`
              }`}
            >
              {isExporting ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Gerando...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Baixar
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Preview Card */}
        <motion.div
          key={isDiscreteMode ? 'discrete' : 'full'}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-[var(--celestial-ivory)] rounded-sm shadow-2xl p-4 sm:p-6 md:p-8"
        >
          {isDiscreteMode ? (
            <DiscreteResultCard result={result} theme={theme} isInfernal={isInfernal} />
          ) : (
            <ResultCard result={result} theme={theme} isInfernal={isInfernal} />
          )}
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 sm:mt-8 px-4"
        >
          <p className="text-sm sm:text-base md:text-lg font-serif text-[var(--celestial-text-soft)] mb-2 leading-relaxed">
            {isDiscreteMode
              ? 'Modo Discreto: Mostra apenas sua pontuação, sem revelar pecados específicos'
              : 'Modo Completo: Mostra sua pontuação e pecados mais graves'}
          </p>
          <p className="text-xs sm:text-sm font-gothic text-[var(--celestial-text-soft)]/70">
            Formato otimizado para Instagram Stories (1080×1920px)
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Discrete Result Card Component (Score Only)
function DiscreteResultCard({
  result,
  theme,
  isInfernal,
}: {
  result: ResultType;
  theme: {
    bg: string;
    cardBg: string;
    textColor: string;
    accentColor: string;
    borderColor: string;
    shadowColor: string;
  };
  isInfernal: boolean;
}) {
  return (
    <div
      id="result-card"
      className={`w-full max-w-[540px] aspect-[9/16] mx-auto bg-[var(${theme.cardBg})] rounded-sm overflow-hidden relative`}
      style={{ fontFamily: '"Fraunces", "Cormorant Garamond", "Cinzel", serif' }}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${isInfernal ? 'opacity-10' : 'opacity-20'}`}>
        {!isInfernal ? (
          <div className="pattern-sacred w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-transparent via-[var(--infernal-blood)]/10 to-[var(--infernal-ember)]/20" />
        )}
      </div>

      {/* Border Frame */}
      <div className={`absolute inset-3 sm:inset-4 border-2 border-[var(${theme.borderColor})]/40 rounded-sm pointer-events-none`}>
        <div className={`absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-l-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-r-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-l-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-r-4 border-[var(${theme.accentColor})]`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full text-[var(${theme.textColor})]">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className={`w-8 sm:w-10 md:w-12 h-px bg-[var(${theme.accentColor})]/60`} />
            <svg className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(${theme.accentColor})] flex-shrink-0 ${isInfernal ? 'animate-infernal-flicker' : 'animate-divine-glow'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {!isInfernal ? (
                <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
              ) : (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              )}
            </svg>
            <div className={`w-8 sm:w-10 md:w-12 h-px bg-[var(${theme.accentColor})]/60`} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 sm:mb-3 leading-tight px-2" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
            {isInfernal ? 'Julgamento Final' : 'Avaliação Moral'}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic opacity-80">Anno Domini 2025</p>
        </div>

        {/* Main Score Display */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12 my-8 sm:my-12 md:my-16">
          {/* Giant Score */}
          <div className="text-center">
            <div className={`inline-block px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-12 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm ${isInfernal ? 'animate-pulse-heat' : ''}`}>
              <div className="text-6xl sm:text-7xl md:text-8xl lg:text-[120px] leading-none font-display font-black mb-2 sm:mb-3 md:mb-4" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
                {result.score}
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-70">/100</span>
              </div>
              <div className={`w-16 sm:w-24 md:w-32 h-1 bg-[var(${theme.accentColor})]/40 mx-auto mb-3 sm:mb-4 md:mb-6`} />
              <p className="font-serif text-base sm:text-xl md:text-2xl lg:text-3xl italic leading-relaxed max-w-md mx-auto px-4">
                {result.message}
              </p>
            </div>
          </div>

          {/* Dominant Category */}
          <div className="text-center">
            <p className="font-gothic text-xs sm:text-sm tracking-widest uppercase opacity-70 mb-3 sm:mb-4">
              Categoria Dominante
            </p>
            <div className={`inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm`}>
              <p className="font-gothic text-base sm:text-lg md:text-xl lg:text-2xl tracking-wider font-bold">
                {result.dominantCategory}
              </p>
            </div>
          </div>

          {/* Total Confessions */}
          <div className="text-center">
            <p className="font-gothic text-xs sm:text-sm tracking-widest uppercase opacity-70 mb-3 sm:mb-4">
              Total de Confissões
            </p>
            <div className={`inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm`}>
              <p className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                {result.selectedSins.length}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
            <div className={`w-10 sm:w-12 md:w-16 h-px bg-[var(${theme.accentColor})]/40`} />
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(${theme.accentColor})]/60 rotate-45`} />
            <div className={`w-10 sm:w-12 md:w-16 h-px bg-[var(${theme.accentColor})]/40`} />
          </div>
          <p className="font-serif text-xs sm:text-sm opacity-70 leading-relaxed">
            Wrapped dos Pecados 2025
          </p>
          <p className="font-gothic text-xs tracking-wider opacity-50">
            Confissão Anônima • Julgamento Divino
          </p>
        </div>
      </div>
    </div>
  );
}

// Full Result Card Component (with Top Sins)
function ResultCard({
  result,
  theme,
  isInfernal,
}: {
  result: ResultType;
  theme: {
    bg: string;
    cardBg: string;
    textColor: string;
    accentColor: string;
    borderColor: string;
    shadowColor: string;
  };
  isInfernal: boolean;
}) {
  return (
    <div
      id="result-card"
      className={`w-full max-w-[540px] aspect-[9/16] mx-auto bg-[var(${theme.cardBg})] rounded-sm overflow-hidden relative`}
      style={{ fontFamily: '"Fraunces", "Cormorant Garamond", "Cinzel", serif' }}
    >
      {/* Background Pattern */}
      <div className={`absolute inset-0 ${isInfernal ? 'opacity-10' : 'opacity-20'}`}>
        {!isInfernal ? (
          <div className="pattern-sacred w-full h-full" />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-transparent via-[var(--infernal-blood)]/10 to-[var(--infernal-ember)]/20" />
        )}
      </div>

      {/* Border Frame */}
      <div className={`absolute inset-3 sm:inset-4 border-2 border-[var(${theme.borderColor})]/40 rounded-sm pointer-events-none`}>
        {/* Corner Decorations */}
        <div className={`absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-l-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute top-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-t-4 border-r-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute bottom-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-l-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-b-4 border-r-4 border-[var(${theme.accentColor})]`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8 md:p-12 flex flex-col justify-between h-full text-[var(${theme.textColor})]">
        {/* Header */}
        <div className="text-center">
          {/* Sacred Symbol */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className={`w-8 sm:w-10 md:w-12 h-px bg-[var(${theme.accentColor})]/60`} />
            <svg className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(${theme.accentColor})] flex-shrink-0 ${isInfernal ? 'animate-infernal-flicker' : 'animate-divine-glow'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              {!isInfernal ? (
                <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
              ) : (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              )}
            </svg>
            <div className={`w-8 sm:w-10 md:w-12 h-px bg-[var(${theme.accentColor})]/60`} />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2 sm:mb-3 leading-tight px-2" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
            {isInfernal ? 'Confissão dos Condenados' : 'Livro das Almas'}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic opacity-80">Anno Domini 2025</p>
        </div>

        {/* Main Stats */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8 my-4 sm:my-6 md:my-8">
          {/* Score Display */}
          <div className="text-center">
            <div className={`inline-block px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm ${isInfernal ? 'animate-pulse-heat' : ''}`}>
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-2" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
                {result.score}
                <span className="text-3xl sm:text-4xl md:text-5xl opacity-70">/100</span>
              </div>
              <p className="font-serif text-sm sm:text-base md:text-lg lg:text-xl italic mt-2 opacity-90 px-2 leading-relaxed">
                {result.message}
              </p>
            </div>
          </div>

          {/* Top Sins */}
          <div className={`bg-[var(${theme.cardBg})]/50 border-2 border-[var(${theme.accentColor})]/30 rounded-sm p-3 sm:p-4 md:p-6`}>
            <h2 className="font-gothic text-xs sm:text-sm tracking-widest uppercase text-center mb-3 sm:mb-4 md:mb-6 opacity-80">
              Pecados Capitais
            </h2>
            <div className="space-y-2 sm:space-y-3">
              {result.topSins.map((sin, index) => (
                <div
                  key={sin.id}
                  className={`flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[var(${theme.accentColor})]/5 border border-[var(${theme.accentColor})]/20 rounded-sm`}
                >
                  <div className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center bg-[var(${theme.accentColor})]/20 border border-[var(${theme.accentColor})]/40 rounded-sm font-gothic text-xs sm:text-sm font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-xs sm:text-sm leading-tight">
                      {sin.text}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 px-1.5 sm:px-2 py-0.5 sm:py-1 bg-[var(${theme.accentColor})]/20 border border-[var(${theme.accentColor})]/30 rounded-sm`}>
                    <span className="font-gothic text-xs opacity-70">{sin.weight}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dominant Category */}
          <div className="text-center">
            <p className="font-gothic text-xs tracking-widest uppercase opacity-70 mb-2 sm:mb-3">
              Categoria Dominante
            </p>
            <div className={`inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm`}>
              <p className="font-gothic text-sm sm:text-base md:text-lg tracking-wider font-bold">
                {result.dominantCategory}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2 sm:space-y-3">
          <div className="flex items-center justify-center gap-2 mb-1 sm:mb-2">
            <div className={`w-10 sm:w-12 md:w-16 h-px bg-[var(${theme.accentColor})]/40`} />
            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[var(${theme.accentColor})]/60 rotate-45`} />
            <div className={`w-10 sm:w-12 md:w-16 h-px bg-[var(${theme.accentColor})]/40`} />
          </div>
          <p className="font-serif text-xs sm:text-sm opacity-70 leading-relaxed">
            Wrapped dos Pecados 2025
          </p>
          <p className="font-gothic text-xs tracking-wider opacity-50">
            Confissão Anônima • Julgamento Divino
          </p>
        </div>
      </div>
    </div>
  );
}
