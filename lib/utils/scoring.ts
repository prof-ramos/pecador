import { Sin, SinSelection, Result, SinCategory } from '../types';
import { SINS } from '../data/sins';

/**
 * Calcula o score baseado nos pecados selecionados
 * Score vai de 0-100, onde:
 * - 0-20: Quase Santo
 * - 21-40: Pecador Leve
 * - 41-60: Equilíbrio
 * - 61-80: Pecador Contumaz
 * - 81-100: Quase Demônio
 */
export function calculateScore(selection: SinSelection): number {
  const selectedSins = SINS.filter(sin => selection[sin.id]);

  if (selectedSins.length === 0) return 0;

  // Soma dos pesos
  const totalWeight = selectedSins.reduce((sum, sin) => sum + sin.weight, 0);

  // Peso máximo possível (todos os pecados com peso 10)
  const maxPossibleWeight = SINS.length * 10;

  // Calcula porcentagem
  const rawScore = (totalWeight / maxPossibleWeight) * 100;

  // Aplica um boost para tornar mais interessante
  // Se selecionou muitos pecados graves, aumenta o score
  const gravityBoost = selectedSins.filter(s => s.weight >= 8).length * 2;
  const quantityBoost = selectedSins.length * 0.3;

  const finalScore = Math.min(100, rawScore + gravityBoost + quantityBoost);

  return Math.round(finalScore);
}

/**
 * Obtém os top 5 pecados selecionados por peso
 */
export function getTopSins(selection: SinSelection): Sin[] {
  const selectedSins = SINS.filter(sin => selection[sin.id]);

  return selectedSins
    .sort((a, b) => b.weight - a.weight)
    .slice(0, 5);
}

/**
 * Determina a categoria dominante
 */
export function getDominantCategory(selection: SinSelection): SinCategory {
  const selectedSins = SINS.filter(sin => selection[sin.id]);

  if (selectedSins.length === 0) return 'Outros';

  // Conta pecados por categoria
  const categoryCount: Record<string, number> = {};

  selectedSins.forEach(sin => {
    categoryCount[sin.category] = (categoryCount[sin.category] || 0) + 1;
  });

  // Encontra a categoria com mais pecados
  const dominant = Object.entries(categoryCount)
    .sort((a, b) => b[1] - a[1])[0];

  return dominant[0] as SinCategory;
}

/**
 * Obtém a tier baseada no score
 */
export function getTier(score: number): Result['tier'] {
  if (score <= 20) return 'santo';
  if (score <= 40) return 'leve';
  if (score <= 60) return 'equilibrado';
  if (score <= 80) return 'contumaz';
  return 'demonio';
}

/**
 * Obtém mensagem personalizada baseada no score
 */
export function getPersonalizedMessage(score: number): string {
  const tier = getTier(score);

  const messages: Record<Result['tier'], string[]> = {
    santo: [
      'Você é praticamente um anjo! 👼',
      'Sua auréola está brilhando! ✨',
      'Os portões celestiais te aguardam! ⛪',
      'Puríssimo! Quase santificado! 🕊️'
    ],
    leve: [
      'Algumas manchas, mas nada que não se limpe! 🧼',
      'Você está no caminho certo... quase! 🚶',
      'Pecadilhos não contam... ou contam? 🤔',
      'Deslizes leves, nada grave! 😇'
    ],
    equilibrado: [
      'Perfeitamente equilibrado, como todas as coisas devem ser. ⚖️',
      'Nem céu, nem inferno. Purgatório? 🌫️',
      'A humanidade em sua essência. 🤷',
      'Você é... humano. Simplesmente humano. 👤'
    ],
    contumaz: [
      'O calor está aumentando por aqui... 🔥',
      'Já pensou em ar-condicionado pro futuro? 😈',
      'Suas escolhas foram... interessantes. 🔥',
      'Tá quente? Vai ficar mais! 🌶️'
    ],
    demonio: [
      'Satanás quer saber sua localização! 👿',
      'Você desbloqueou: Assento VIP no inferno! 🔥',
      'Impressionante. No mau sentido. 😈',
      'Parabéns(?). Você é um especialista em pecar! 💀'
    ]
  };

  const options = messages[tier];
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * Gera o resultado completo
 */
export function generateResult(selection: SinSelection): Result {
  const score = calculateScore(selection);
  const selectedSins = SINS.filter(sin => selection[sin.id]);
  const topSins = getTopSins(selection);
  const dominantCategory = getDominantCategory(selection);
  const tier = getTier(score);
  const message = getPersonalizedMessage(score);

  return {
    score,
    selectedSins,
    topSins,
    dominantCategory,
    message,
    tier
  };
}
