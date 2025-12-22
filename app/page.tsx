'use client';

import { useState } from 'react';
import Landing from '@/components/Landing';
import Checklist from '@/components/Checklist';
import Result from '@/components/Result';
import { SinSelection, Result as ResultType } from '@/lib/types';
import { generateResult } from '@/lib/utils/scoring';

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
