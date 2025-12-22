import { CategoryInfo, SinCategory } from '../types';

export const CATEGORIES: Record<SinCategory, CategoryInfo> = {
  Moral: {
    name: 'Moral',
    color: 'text-purple-700',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-300',
    description: 'Questões morais e éticas'
  },
  Luxúria: {
    name: 'Luxúria',
    color: 'text-pink-700',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-300',
    description: 'Desejos carnais e tentações'
  },
  Orgulho: {
    name: 'Orgulho',
    color: 'text-amber-700',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-300',
    description: 'Vaidade e soberba'
  },
  Espiritual: {
    name: 'Espiritual',
    color: 'text-blue-700',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-300',
    description: 'Questões espirituais e religiosas'
  },
  Vícios: {
    name: 'Vícios',
    color: 'text-orange-700',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-300',
    description: 'Dependências e maus hábitos'
  },
  Violência: {
    name: 'Violência',
    color: 'text-red-700',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-300',
    description: 'Atos violentos e agressivos'
  },
  Mentira: {
    name: 'Mentira',
    color: 'text-yellow-700',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-300',
    description: 'Falsidade e engano'
  },
  Social: {
    name: 'Social',
    color: 'text-green-700',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-300',
    description: 'Comportamento social inadequado'
  },
  Ganância: {
    name: 'Ganância',
    color: 'text-emerald-700',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-300',
    description: 'Avareza e materialismo'
  },
  Ocultismo: {
    name: 'Ocultismo',
    color: 'text-indigo-700',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-300',
    description: 'Práticas ocultas e místicas'
  },
  Outros: {
    name: 'Outros',
    color: 'text-gray-700',
    bgColor: 'bg-gray-50',
    borderColor: 'border-gray-300',
    description: 'Outros pecados diversos'
  }
};
