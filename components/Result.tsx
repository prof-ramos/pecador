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
    <div className={`min-h-screen ${theme.bg} py-10 px-4 animate-page-reveal relative overflow-hidden`}>
      {/* Atmospheric Effects */}
      {!isInfernal ? (
        <>
          <div className="absolute inset-0 pattern-sacred opacity-20" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-[var(--celestial-azure)]/30 to-transparent blur-3xl animate-light-rays" />
        </>
      ) : (
        <>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-[var(--infernal-ember)]/20 to-transparent blur-2xl" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[var(--infernal-ember)] rounded-full animate-ember-float opacity-70"
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
        <div className="flex justify-between items-center mb-8 gap-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-[var(--celestial-ivory)] text-[var(--celestial-text)] font-gothic text-xs tracking-wider border-2 border-[var(--celestial-gold)]/30 rounded-sm hover:border-[var(--celestial-gold)] hover:shadow-lg transition-all"
          >
            ← Nova Confissão
          </button>
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className={`group px-8 py-3 font-gothic text-xs tracking-wider rounded-sm border-2 transition-all ${
              isExporting
                ? 'bg-[var(--neutral-mist)] text-[var(--neutral-stone)] border-[var(--neutral-stone)] cursor-wait'
                : `bg-gradient-to-r from-[var(${theme.accentColor})] to-[var(${theme.borderColor})] text-[var(${theme.textColor})] border-[var(${theme.borderColor})] hover:shadow-xl hover:scale-105`
            }`}
          >
            {isExporting ? (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Gerando Pergaminho...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Baixar Pergaminho
              </span>
            )}
          </button>
        </div>

        {/* Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--celestial-ivory)] rounded-sm shadow-2xl p-8"
        >
          <ResultCard result={result} theme={theme} isInfernal={isInfernal} />
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-lg font-serif text-[var(--celestial-text-soft)] mb-2">
            Compartilhe seu pergaminho sagrado nas redes sociais
          </p>
          <p className="text-sm font-gothic text-[var(--celestial-text-soft)]/70">
            Formato otimizado para Instagram Stories (1080×1920px)
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Exportable Result Card Component
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
      className={`w-[540px] h-[960px] mx-auto bg-[var(${theme.cardBg})] rounded-sm overflow-hidden relative`}
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
      <div className={`absolute inset-4 border-2 border-[var(${theme.borderColor})]/40 rounded-sm pointer-events-none`}>
        {/* Corner Decorations */}
        <div className={`absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-[var(${theme.accentColor})]`} />
        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(${theme.accentColor})]`} />
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col justify-between h-full text-[var(${theme.textColor})]">
        {/* Header */}
        <div className="text-center">
          {/* Sacred Symbol */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className={`w-12 h-px bg-[var(${theme.accentColor})]/60`} />
            <svg className={`w-8 h-8 text-[var(${theme.accentColor})] ${isInfernal ? 'animate-infernal-flicker' : 'animate-divine-glow'}`} viewBox="0 0 24 24" fill="currentColor">
              {!isInfernal ? (
                <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
              ) : (
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              )}
            </svg>
            <div className={`w-12 h-px bg-[var(${theme.accentColor})]/60`} />
          </div>

          <h1 className="text-5xl font-display font-bold mb-3" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
            {isInfernal ? 'Confissão dos Condenados' : 'Livro das Almas'}
          </h1>
          <p className="text-2xl font-serif italic opacity-80">Anno Domini 2025</p>
        </div>

        {/* Main Stats */}
        <div className="space-y-8 my-8">
          {/* Score Display */}
          <div className="text-center">
            <div className={`inline-block px-8 py-6 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm ${isInfernal ? 'animate-pulse-heat' : ''}`}>
              <div className="text-8xl font-display font-black mb-2" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
                {result.score}
                <span className="text-5xl opacity-70">/100</span>
              </div>
              <p className="font-serif text-xl italic mt-2 opacity-90">
                {result.message}
              </p>
            </div>
          </div>

          {/* Top Sins */}
          <div className={`bg-[var(${theme.cardBg})]/50 border-2 border-[var(${theme.accentColor})]/30 rounded-sm p-6`}>
            <h2 className="font-gothic text-sm tracking-widest uppercase text-center mb-6 opacity-80">
              Pecados Capitais
            </h2>
            <div className="space-y-3">
              {result.topSins.map((sin, index) => (
                <div
                  key={sin.id}
                  className={`flex items-center gap-3 p-3 bg-[var(${theme.accentColor})]/5 border border-[var(${theme.accentColor})]/20 rounded-sm`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center bg-[var(${theme.accentColor})]/20 border border-[var(${theme.accentColor})]/40 rounded-sm font-gothic text-sm font-bold`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-serif text-sm leading-tight">
                      {sin.text}
                    </p>
                  </div>
                  <div className={`flex-shrink-0 px-2 py-1 bg-[var(${theme.accentColor})]/20 border border-[var(${theme.accentColor})]/30 rounded-sm`}>
                    <span className="font-gothic text-xs opacity-70">{sin.weight}/10</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dominant Category */}
          <div className="text-center">
            <p className="font-gothic text-xs tracking-widest uppercase opacity-70 mb-3">
              Categoria Dominante
            </p>
            <div className={`inline-block px-6 py-3 bg-[var(${theme.accentColor})]/10 border-2 border-[var(${theme.accentColor})]/40 rounded-sm`}>
              <p className="font-gothic text-lg tracking-wider font-bold">
                {result.dominantCategory}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center space-y-3">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className={`w-16 h-px bg-[var(${theme.accentColor})]/40`} />
            <div className={`w-2 h-2 bg-[var(${theme.accentColor})]/60 rotate-45`} />
            <div className={`w-16 h-px bg-[var(${theme.accentColor})]/40`} />
          </div>
          <p className="font-serif text-sm opacity-70">
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
