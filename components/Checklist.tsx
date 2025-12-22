'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SINS } from '@/lib/data/sins';
import { CATEGORIES } from '@/lib/data/categories';
import { SinSelection, SinCategory } from '@/lib/types';

interface ChecklistProps {
  selection: SinSelection;
  onSelectionChange: (selection: SinSelection) => void;
  onSubmit: () => void;
}

export default function Checklist({
  selection,
  onSelectionChange,
  onSubmit,
}: ChecklistProps) {
  const [filter, setFilter] = useState<SinCategory | 'all'>('all');

  const selectedCount = Object.values(selection).filter(Boolean).length;
  const canSubmit = selectedCount > 0;

  const filteredSins =
    filter === 'all' ? SINS : SINS.filter((sin) => sin.category === filter);

  const toggleSin = (sinId: string) => {
    onSelectionChange({
      ...selection,
      [sinId]: !selection[sinId],
    });
  };

  return (
    <div className="min-h-screen bg-parchment py-6 sm:py-8 md:py-10 px-4 animate-page-reveal">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          {/* Ornamental Top */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[var(--celestial-gold)] to-transparent" />
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--celestial-gold)] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
            </svg>
            <div className="w-16 sm:w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-[var(--celestial-gold)] to-transparent" />
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 text-[var(--celestial-text)] px-4 leading-tight" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
            Confessionário dos Pecados
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-serif text-[var(--celestial-text-soft)] italic mb-4 sm:mb-6 px-4 leading-relaxed">
            Marque cada transgressão cometida neste ano de 2025
          </p>

          {/* Privacy Reminder */}
          <div className="inline-flex items-center gap-2 bg-[var(--celestial-ivory)] px-3 sm:px-4 py-2 border border-[var(--celestial-gold)]/30 rounded-sm touch-target">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[var(--celestial-gold)] flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="font-gothic text-xs text-[var(--celestial-text-soft)]">Processamento Local</span>
          </div>
        </motion.div>

        {/* Counter Card */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 sm:mb-10 max-w-md mx-auto"
        >
          <div className="bg-[var(--celestial-ivory)] border-2 border-[var(--celestial-gold)]/40 rounded-sm p-6 sm:p-8 text-center shadow-lg relative overflow-hidden">
            {/* Decorative Corners */}
            <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-[var(--celestial-gold)]" />
            <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-[var(--celestial-gold)]" />
            <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-[var(--celestial-gold)]" />
            <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-[var(--celestial-gold)]" />

            <div className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-[var(--celestial-gold)] mb-2" style={{ fontVariationSettings: '"opsz" 144, "wght" 900' }}>
              {selectedCount}
            </div>
            <div className="font-gothic text-xs tracking-widest text-[var(--celestial-text-soft)] uppercase">
              {selectedCount === 1 ? 'Pecado Confessado' : 'Pecados Confessados'}
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 sm:px-5 py-2.5 sm:py-3 font-gothic text-xs tracking-wider transition-all rounded-sm border-2 touch-target ${
                filter === 'all'
                  ? 'bg-[var(--celestial-gold)] text-[var(--celestial-text)] border-[var(--celestial-gold)] shadow-lg'
                  : 'bg-[var(--celestial-ivory)] text-[var(--celestial-text-soft)] border-[var(--celestial-gold)]/30 hover:border-[var(--celestial-gold)]/60'
              }`}
            >
              Todos ({SINS.length})
            </button>
            {Object.values(CATEGORIES).map((cat) => {
              const count = SINS.filter((s) => s.category === cat.name).length;
              const isActive = filter === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  className={`px-3 sm:px-4 py-2.5 sm:py-3 font-gothic text-xs tracking-wider transition-all rounded-sm border-2 touch-target ${
                    isActive
                      ? 'bg-[var(--celestial-parchment)] border-[var(--celestial-gold)] text-[var(--celestial-text)] shadow-md'
                      : 'bg-[var(--celestial-ivory)]/70 border-[var(--celestial-gold)]/20 text-[var(--celestial-text-soft)] hover:border-[var(--celestial-gold)]/40'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Sins Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredSins.map((sin, index) => {
              const isSelected = selection[sin.id];

              return (
                <motion.div
                  key={sin.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.02, 0.5) }}
                >
                  <button
                    onClick={() => toggleSin(sin.id)}
                    className={`w-full p-4 sm:p-5 text-left transition-all duration-300 rounded-sm border-2 relative group touch-target ${
                      isSelected
                        ? 'bg-[var(--celestial-parchment)] border-[var(--celestial-gold)] shadow-lg transform scale-[1.01] sm:scale-[1.02]'
                        : 'bg-[var(--celestial-ivory)]/80 border-[var(--celestial-gold)]/20 hover:border-[var(--celestial-gold)]/50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Custom Checkbox */}
                      <div className="flex-shrink-0 mt-0.5">
                        <div
                          className={`w-6 h-6 sm:w-7 sm:h-7 rounded-none border-2 flex items-center justify-center transition-all ${
                            isSelected
                              ? 'bg-[var(--celestial-gold)] border-[var(--celestial-gold)]'
                              : 'bg-transparent border-[var(--celestial-gold)]/40 group-hover:border-[var(--celestial-gold)]/60'
                          }`}
                        >
                          {isSelected && (
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--celestial-text)]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className={`font-serif text-sm sm:text-base leading-relaxed mb-2 sm:mb-3 ${isSelected ? 'text-[var(--celestial-text)]' : 'text-[var(--celestial-text-soft)]'}`}>
                          {sin.text}
                        </p>

                        <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                          <span className="inline-block px-2 sm:px-3 py-1 bg-[var(--celestial-ivory)] border border-[var(--celestial-gold)]/30 rounded-sm">
                            <span className="font-gothic text-xs text-[var(--celestial-text-soft)]">
                              {sin.category}
                            </span>
                          </span>
                          <span className="font-gothic text-xs text-[var(--celestial-text-soft)]/60">
                            Gravidade: {sin.weight}/10
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner Accent */}
                    {isSelected && (
                      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--celestial-gold)]" />
                    )}
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Submit Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="sticky bottom-4 sm:bottom-6 max-w-2xl mx-auto"
        >
          <div className="bg-[var(--celestial-ivory)]/95 backdrop-blur-sm border-2 border-[var(--celestial-gold)]/50 rounded-sm p-4 sm:p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
              <div className="text-center md:text-left w-full md:w-auto">
                <p className="font-gothic text-xs sm:text-sm tracking-wider text-[var(--celestial-text)] mb-1">
                  Confissão Completa?
                </p>
                <p className="font-serif text-xs sm:text-sm italic text-[var(--celestial-text-soft)] leading-relaxed">
                  {canSubmit
                    ? 'Prossiga para receber seu julgamento'
                    : 'Confesse ao menos um pecado para continuar'}
                </p>
              </div>

              <button
                onClick={onSubmit}
                disabled={!canSubmit}
                className={`group relative w-full md:w-auto px-8 sm:px-10 py-3.5 sm:py-4 font-gothic text-xs sm:text-sm tracking-widest rounded-sm transition-all duration-300 shadow-lg touch-target ${
                  canSubmit
                    ? 'bg-gradient-to-r from-[var(--celestial-gold)] to-[var(--celestial-divine)] text-[var(--celestial-text)] hover:shadow-xl hover:scale-105 cursor-pointer overflow-hidden'
                    : 'bg-[var(--neutral-mist)] text-[var(--neutral-stone)] cursor-not-allowed'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Receber Julgamento
                  {canSubmit && (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                {canSubmit && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--celestial-light-gold)] to-[var(--celestial-gold)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
