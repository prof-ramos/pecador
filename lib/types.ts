export type SinCategory =
  | 'Moral'
  | 'Luxúria'
  | 'Orgulho'
  | 'Espiritual'
  | 'Vícios'
  | 'Violência'
  | 'Mentira'
  | 'Social'
  | 'Ganância'
  | 'Ocultismo'
  | 'Outros';

export interface Sin {
  id: string;
  text: string;
  category: SinCategory;
  weight: number; // 1-10, onde 10 é mais grave
}

export interface CategoryInfo {
  name: SinCategory;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

export interface SinSelection {
  [sinId: string]: boolean;
}

export interface Result {
  score: number; // 0-100
  selectedSins: Sin[];
  topSins: Sin[];
  dominantCategory: SinCategory;
  message: string;
  tier: 'santo' | 'leve' | 'equilibrado' | 'contumaz' | 'demonio';
}
