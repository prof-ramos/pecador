'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Landing from '@/components/Landing';
import Checklist from '@/components/Checklist';
import { SinSelection, Result as ResultType } from '@/lib/types';
import { generateResult } from '@/lib/utils/scoring';

// Lazy load Result component - economia de ~400KB no bundle inicial
// Carregado apenas quando o usuário completa o checklist
const Result = dynamic(() => import('@/components/Result'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[var(--celestial-ivory)]">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[var(--celestial-gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="font-gothic text-sm text-[var(--celestial-text-soft)] tracking-wider">
          Preparando seu julgamento...
        </p>
      </div>
    </div>
  ),
});

type AppState = 'landing' | 'checklist' | 'result';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('landing');
  const [selection, setSelection] = useState<SinSelection>({});
  const [result, setResult] = useState<ResultType | null>(null);

  const handleStart = () => {
    setAppState('checklist');
  };

  const handleSubmit = () => {
    const generatedResult = generateResult(selection);
    setResult(generatedResult);
    setAppState('result');
  };

  const handleRestart = () => {
    setSelection({});
    setResult(null);
    setAppState('landing');
  };

  return (
    <>
      {appState === 'landing' && <Landing onStart={handleStart} />}

      {appState === 'checklist' && (
        <Checklist
          selection={selection}
          onSelectionChange={setSelection}
          onSubmit={handleSubmit}
        />
      )}

      {appState === 'result' && result && (
        <Result result={result} onRestart={handleRestart} />
      )}
    </>
  );
}
