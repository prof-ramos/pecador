'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Result as ResultType } from '@/lib/types';
import { CATEGORIES } from '@/lib/data/categories';
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

  // Determina cores e gradiente baseado no tier
  const getThemeColors = () => {
    switch (result.tier) {
      case 'santo':
        return {
          gradient: 'from-blue-400 via-blue-500 to-blue-600',
          bgGradient: 'from-blue-50 to-cyan-50',
          textColor: 'text-blue-900',
          accentColor: 'text-blue-600',
          icon: '👼',
        };
      case 'leve':
        return {
          gradient: 'from-blue-500 via-purple-500 to-purple-600',
          bgGradient: 'from-blue-100 to-purple-100',
          textColor: 'text-purple-900',
          accentColor: 'text-purple-600',
          icon: '😇',
        };
      case 'equilibrado':
        return {
          gradient: 'from-gray-500 via-gray-600 to-gray-700',
          bgGradient: 'from-gray-100 to-gray-200',
          textColor: 'text-gray-900',
          accentColor: 'text-gray-700',
          icon: '⚖️',
        };
      case 'contumaz':
        return {
          gradient: 'from-orange-600 via-red-600 to-red-700',
          bgGradient: 'from-orange-100 to-red-100',
          textColor: 'text-red-900',
          accentColor: 'text-red-700',
          icon: '🔥',
        };
      case 'demonio':
        return {
          gradient: 'from-red-700 via-red-900 to-black',
          bgGradient: 'from-red-900 to-black',
          textColor: 'text-red-100',
          accentColor: 'text-red-400',
          icon: '👿',
        };
    }
  };

  const theme = getThemeColors();
  const dominantCategory = CATEGORIES[result.dominantCategory];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${theme.bgGradient} py-8 px-4`}>
      <div className="max-w-4xl mx-auto">
        {/* Action Buttons */}
        <div className="flex justify-between mb-6 gap-4">
          <button
            onClick={onRestart}
            className="px-6 py-3 bg-white text-gray-800 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            ← Refazer
          </button>
          <button
            onClick={handleDownload}
            disabled={isExporting}
            className={`px-6 py-3 bg-gradient-to-r ${theme.gradient} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2 ${
              isExporting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isExporting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Gerando...
              </>
            ) : (
              <>
                📸 Baixar Resultado
              </>
            )}
          </button>
        </div>

        {/* Preview Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-2xl p-8 mb-6"
        >
          <ResultCard result={result} theme={theme} dominantCategory={dominantCategory} />
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600"
        >
          <p className="text-lg">
            Clique em &quot;Baixar Resultado&quot; para salvar sua imagem e compartilhar!
          </p>
          <p className="text-sm mt-2 opacity-75">
            Formato: 1080x1920px (ideal para Instagram Stories)
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Componente separado para o card que será exportado
function ResultCard({
  result,
  theme,
  dominantCategory,
}: {
  result: ResultType;
  theme: ReturnType<typeof getThemeColors>;
  dominantCategory: any;
}) {
  return (
    <div
      id="result-card"
      className={`w-[540px] h-[960px] mx-auto bg-gradient-to-br ${theme.gradient} rounded-2xl overflow-hidden relative`}
      style={{ fontFamily: 'Poppins, Inter, sans-serif' }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        {result.tier === 'santo' && (
          <div className="text-9xl absolute top-20 left-10 animate-float">☁️</div>
        )}
        {result.tier === 'demonio' && (
          <div className="text-9xl absolute bottom-20 right-10 animate-flicker">🔥</div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 p-12 flex flex-col justify-between h-full text-white">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl font-black mb-2 drop-shadow-lg">
            Meus Pecados
          </h1>
          <p className="text-3xl font-light opacity-90">2025</p>
        </div>

        {/* Main Stats */}
        <div className="space-y-8">
          {/* Score */}
          <div className="text-center">
            <div className="text-8xl font-black mb-2 drop-shadow-2xl">
              {result.score}
              <span className="text-5xl">/100</span>
            </div>
            <p className="text-2xl font-medium opacity-90">{result.message}</p>
            <div className="text-7xl mt-4">{theme.icon}</div>
          </div>

          {/* Top Sins */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Top 5 Pecados
            </h2>
            <div className="space-y-3">
              {result.topSins.map((sin, index) => (
                <div
                  key={sin.id}
                  className="flex items-center gap-3 bg-white/10 rounded-lg p-3"
                >
                  <div className="text-2xl font-black opacity-60">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm leading-tight">
                      {sin.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dominant Category */}
          <div className="text-center">
            <p className="text-lg opacity-75 mb-2">Categoria Dominante</p>
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-2xl font-bold">{result.dominantCategory}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm opacity-75">
            Wrapped dos Pecados 2025
          </p>
          <p className="text-xs opacity-60 mt-1">
            100% Anônimo • Sem julgamentos
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper function duplicated here for type safety
function getThemeColors() {
  return {
    gradient: '',
    bgGradient: '',
    textColor: '',
    accentColor: '',
    icon: '',
  };
}
