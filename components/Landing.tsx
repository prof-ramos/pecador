'use client';

import { motion } from 'framer-motion';

interface LandingProps {
  onStart: () => void;
}

export default function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-transparent bg-clip-text">
              Wrapped dos Pecados
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-700">
              2025
            </p>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-8 space-y-4"
          >
            <p className="text-lg text-gray-600">
              Faça uma autoavaliação honesta dos seus pecados em 2025.
            </p>
            <p className="text-lg text-gray-600">
              Descubra seu nível de santidade (ou não) e compartilhe com o mundo!
            </p>
          </motion.div>

          {/* Privacy Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-3 rounded-full mb-8 border-2 border-green-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">100% Anônimo</span>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
          >
            <div className="p-4 bg-blue-50 rounded-xl">
              <div className="text-3xl mb-2">✅</div>
              <p className="text-sm font-medium text-gray-700">
                105 Pecados
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-xl">
              <div className="text-3xl mb-2">📊</div>
              <p className="text-sm font-medium text-gray-700">
                Resultado Personalizado
              </p>
            </div>
            <div className="p-4 bg-pink-50 rounded-xl">
              <div className="text-3xl mb-2">📸</div>
              <p className="text-sm font-medium text-gray-700">
                Download em PNG
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Começar Confissão
          </motion.button>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-sm text-gray-500"
          >
            Nenhum dado é armazenado. Tudo acontece no seu navegador.
          </motion.p>
        </div>

        {/* Floating Decoration */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">
          ☁️
        </div>
        <div
          className="absolute bottom-20 right-10 text-6xl opacity-20"
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          ✨
        </div>
      </motion.div>
    </div>
  );
}
