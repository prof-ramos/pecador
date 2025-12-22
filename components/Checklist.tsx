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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-purple-600 to-red-600 text-transparent bg-clip-text">
            Marque seus pecados
          </h1>
          <p className="text-gray-600 text-lg">
            Seja honesto. Ninguém vai ver além de você.
          </p>

          {/* Privacy Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mt-4 text-sm font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            100% Anônimo - Processamento local
          </div>
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-6 text-center"
        >
          <div className="text-5xl font-black text-purple-600">
            {selectedCount}
          </div>
          <div className="text-gray-600 mt-1">
            {selectedCount === 1 ? 'pecado selecionado' : 'pecados selecionados'}
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex gap-2 pb-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos ({SINS.length})
            </button>
            {Object.values(CATEGORIES).map((cat) => {
              const count = SINS.filter((s) => s.category === cat.name).length;
              return (
                <button
                  key={cat.name}
                  onClick={() => setFilter(cat.name)}
                  className={`px-4 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    filter === cat.name
                      ? `${cat.bgColor} ${cat.color} border-2 ${cat.borderColor} shadow-lg`
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Sins Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <AnimatePresence mode="popLayout">
            {filteredSins.map((sin) => {
              const isSelected = selection[sin.id];
              const category = CATEGORIES[sin.category];

              return (
                <motion.div
                  key={sin.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => toggleSin(sin.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-200 ${
                      isSelected
                        ? `${category.bgColor} ${category.borderColor} border-2 shadow-lg transform scale-105`
                        : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <div
                        className={`flex-shrink-0 w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? `${category.borderColor} ${category.bgColor}`
                            : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 ${category.color}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <p
                          className={`font-medium text-sm ${
                            isSelected ? category.color : 'text-gray-800'
                          }`}
                        >
                          {sin.text}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${category.bgColor} ${category.color} font-medium`}
                          >
                            {sin.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            Peso: {sin.weight}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="sticky bottom-4 max-w-md mx-auto"
        >
          <button
            onClick={onSubmit}
            disabled={!canSubmit}
            className={`w-full py-4 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 ${
              canSubmit
                ? 'bg-gradient-to-r from-purple-600 to-red-600 text-white hover:shadow-purple-500/50 hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {canSubmit ? 'Ver Meu Resultado' : 'Selecione ao menos 1 pecado'}
          </button>
        </motion.div>
      </div>
    </div>
  );
}
