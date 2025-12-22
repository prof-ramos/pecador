import { Sin } from '../types';

export const SINS: Sin[] = [
  // Moral (10 pecados)
  { id: 'm1', text: 'Traí a confiança de alguém', category: 'Moral', weight: 8 },
  { id: 'm2', text: 'Julguei alguém sem conhecer a história completa', category: 'Moral', weight: 5 },
  { id: 'm3', text: 'Fui hipócrita em minhas ações', category: 'Moral', weight: 6 },
  { id: 'm4', text: 'Quebrei uma promessa importante', category: 'Moral', weight: 7 },
  { id: 'm5', text: 'Fui injusto com alguém', category: 'Moral', weight: 6 },
  { id: 'm6', text: 'Prejudiquei alguém intencionalmente', category: 'Moral', weight: 9 },
  { id: 'm7', text: 'Fui conivente com uma injustiça', category: 'Moral', weight: 7 },
  { id: 'm8', text: 'Abandonei alguém que precisava de mim', category: 'Moral', weight: 8 },
  { id: 'm9', text: 'Fui egoísta em situações importantes', category: 'Moral', weight: 6 },
  { id: 'm10', text: 'Negligenciei minhas responsabilidades', category: 'Moral', weight: 5 },

  // Luxúria (12 pecados)
  { id: 'l1', text: 'Tive pensamentos impuros frequentemente', category: 'Luxúria', weight: 3 },
  { id: 'l2', text: 'Assisti conteúdo pornográfico', category: 'Luxúria', weight: 4 },
  { id: 'l3', text: 'Traí meu parceiro(a)', category: 'Luxúria', weight: 10 },
  { id: 'l4', text: 'Flertei com alguém comprometido', category: 'Luxúria', weight: 7 },
  { id: 'l5', text: 'Usei alguém apenas para satisfação própria', category: 'Luxúria', weight: 8 },
  { id: 'l6', text: 'Enviei ou recebi nudes de forma inadequada', category: 'Luxúria', weight: 5 },
  { id: 'l7', text: 'Fantasiei com pessoas comprometidas', category: 'Luxúria', weight: 4 },
  { id: 'l8', text: 'Fui infiel emocionalmente', category: 'Luxúria', weight: 7 },
  { id: 'l9', text: 'Pratiquei sexo casual sem responsabilidade', category: 'Luxúria', weight: 5 },
  { id: 'l10', text: 'Objetifiquei pessoas', category: 'Luxúria', weight: 6 },
  { id: 'l11', text: 'Menti sobre minha vida sexual', category: 'Luxúria', weight: 4 },
  { id: 'l12', text: 'Usei aplicativos de relacionamento de forma tóxica', category: 'Luxúria', weight: 5 },

  // Orgulho (11 pecados)
  { id: 'o1', text: 'Recusei pedir desculpas quando errei', category: 'Orgulho', weight: 6 },
  { id: 'o2', text: 'Me achei superior aos outros', category: 'Orgulho', weight: 7 },
  { id: 'o3', text: 'Desprezei a opinião de outras pessoas', category: 'Orgulho', weight: 6 },
  { id: 'o4', text: 'Fingi ser algo que não sou nas redes sociais', category: 'Orgulho', weight: 5 },
  { id: 'o5', text: 'Humilhei alguém para me sentir melhor', category: 'Orgulho', weight: 9 },
  { id: 'o6', text: 'Me recusei a admitir que estava errado', category: 'Orgulho', weight: 6 },
  { id: 'o7', text: 'Fui arrogante em minhas conquistas', category: 'Orgulho', weight: 5 },
  { id: 'o8', text: 'Critiquei os outros para parecer melhor', category: 'Orgulho', weight: 7 },
  { id: 'o9', text: 'Recusei ajuda por orgulho', category: 'Orgulho', weight: 5 },
  { id: 'o10', text: 'Exigi reconhecimento constante', category: 'Orgulho', weight: 5 },
  { id: 'o11', text: 'Menosprezei as conquistas alheias', category: 'Orgulho', weight: 7 },

  // Espiritual (10 pecados)
  { id: 'e1', text: 'Blasfemei ou zombei de crenças religiosas', category: 'Espiritual', weight: 6 },
  { id: 'e2', text: 'Negligenciei minha vida espiritual', category: 'Espiritual', weight: 4 },
  { id: 'e3', text: 'Usei o nome de Deus em vão', category: 'Espiritual', weight: 3 },
  { id: 'e4', text: 'Fui hipócrita em questões religiosas', category: 'Espiritual', weight: 7 },
  { id: 'e5', text: 'Ignorei minha consciência deliberadamente', category: 'Espiritual', weight: 6 },
  { id: 'e6', text: 'Profanei algo sagrado', category: 'Espiritual', weight: 8 },
  { id: 'e7', text: 'Desprezei ensinamentos espirituais', category: 'Espiritual', weight: 5 },
  { id: 'e8', text: 'Faltei com respeito em locais sagrados', category: 'Espiritual', weight: 6 },
  { id: 'e9', text: 'Julguei pessoas por suas crenças', category: 'Espiritual', weight: 6 },
  { id: 'e10', text: 'Vivi em contradição com meus valores espirituais', category: 'Espiritual', weight: 6 },

  // Vícios (10 pecados)
  { id: 'v1', text: 'Bebi em excesso frequentemente', category: 'Vícios', weight: 6 },
  { id: 'v2', text: 'Usei drogas ilícitas', category: 'Vícios', weight: 8 },
  { id: 'v3', text: 'Fumei mesmo sabendo dos riscos', category: 'Vícios', weight: 5 },
  { id: 'v4', text: 'Desenvolvi dependência de jogos de azar', category: 'Vícios', weight: 8 },
  { id: 'v5', text: 'Fui viciado em redes sociais', category: 'Vícios', weight: 4 },
  { id: 'v6', text: 'Gastei demais com vícios', category: 'Vícios', weight: 6 },
  { id: 'v7', text: 'Consumi álcool em situações inadequadas', category: 'Vícios', weight: 7 },
  { id: 'v8', text: 'Negligenciei obrigações por causa de vícios', category: 'Vícios', weight: 7 },
  { id: 'v9', text: 'Influenciei outros a desenvolverem vícios', category: 'Vícios', weight: 8 },
  { id: 'v10', text: 'Menti sobre meus vícios', category: 'Vícios', weight: 6 },

  // Violência (9 pecados)
  { id: 'vi1', text: 'Bati ou agredi alguém fisicamente', category: 'Violência', weight: 10 },
  { id: 'vi2', text: 'Pratiquei bullying ou assédio', category: 'Violência', weight: 9 },
  { id: 'vi3', text: 'Desejei mal a alguém', category: 'Violência', weight: 5 },
  { id: 'vi4', text: 'Fui verbalmente agressivo', category: 'Violência', weight: 6 },
  { id: 'vi5', text: 'Destruí propriedade alheia intencionalmente', category: 'Violência', weight: 8 },
  { id: 'vi6', text: 'Ameacei alguém', category: 'Violência', weight: 8 },
  { id: 'vi7', text: 'Pratiquei violência psicológica', category: 'Violência', weight: 9 },
  { id: 'vi8', text: 'Tive pensamentos violentos frequentes', category: 'Violência', weight: 5 },
  { id: 'vi9', text: 'Fui cruel com animais', category: 'Violência', weight: 10 },

  // Mentira (10 pecados)
  { id: 'me1', text: 'Menti para me beneficiar', category: 'Mentira', weight: 6 },
  { id: 'me2', text: 'Espalhei fofocas ou rumores', category: 'Mentira', weight: 6 },
  { id: 'me3', text: 'Inventei histórias falsas', category: 'Mentira', weight: 7 },
  { id: 'me4', text: 'Menti para prejudicar alguém', category: 'Mentira', weight: 9 },
  { id: 'me5', text: 'Omiti a verdade em momentos importantes', category: 'Mentira', weight: 6 },
  { id: 'me6', text: 'Fiz falsas acusações', category: 'Mentira', weight: 9 },
  { id: 'me7', text: 'Menti no trabalho ou estudos', category: 'Mentira', weight: 6 },
  { id: 'me8', text: 'Enganei alguém deliberadamente', category: 'Mentira', weight: 7 },
  { id: 'me9', text: 'Menti sobre minhas qualificações', category: 'Mentira', weight: 7 },
  { id: 'me10', text: 'Falsifiquei documentos ou informações', category: 'Mentira', weight: 9 },

  // Social (10 pecados)
  { id: 's1', text: 'Fui grosseiro com atendentes ou funcionários', category: 'Social', weight: 6 },
  { id: 's2', text: 'Ignorei pedidos de ajuda', category: 'Social', weight: 6 },
  { id: 's3', text: 'Fui preconceituoso', category: 'Social', weight: 8 },
  { id: 's4', text: 'Exclui alguém de um grupo intencionalmente', category: 'Social', weight: 7 },
  { id: 's5', text: 'Fiz piadas ofensivas', category: 'Social', weight: 6 },
  { id: 's6', text: 'Fui ingrato com quem me ajudou', category: 'Social', weight: 7 },
  { id: 's7', text: 'Critiquei pessoas pelas costas', category: 'Social', weight: 6 },
  { id: 's8', text: 'Fui egoísta em situações de grupo', category: 'Social', weight: 5 },
  { id: 's9', text: 'Desrespeitei idosos ou vulneráveis', category: 'Social', weight: 8 },
  { id: 's10', text: 'Invadi a privacidade alheia', category: 'Social', weight: 7 },

  // Ganância (9 pecados)
  { id: 'g1', text: 'Roubei algo', category: 'Ganância', weight: 9 },
  { id: 'g2', text: 'Fui mesquinho quando poderia ter ajudado', category: 'Ganância', weight: 6 },
  { id: 'g3', text: 'Invejei a vida alheia', category: 'Ganância', weight: 5 },
  { id: 'g4', text: 'Passei por cima de outros para me beneficiar', category: 'Ganância', weight: 8 },
  { id: 'g5', text: 'Guardei rancor por conquistas alheias', category: 'Ganância', weight: 6 },
  { id: 'g6', text: 'Fiz negócios desonestos', category: 'Ganância', weight: 8 },
  { id: 'g7', text: 'Explorei o trabalho de outros', category: 'Ganância', weight: 9 },
  { id: 'g8', text: 'Soneguei impostos ou trapaceei financeiramente', category: 'Ganância', weight: 8 },
  { id: 'g9', text: 'Recusei dividir recursos quando tinha em excesso', category: 'Ganância', weight: 6 },

  // Ocultismo (7 pecados)
  { id: 'oc1', text: 'Consultei horóscopos ou tarô compulsivamente', category: 'Ocultismo', weight: 4 },
  { id: 'oc2', text: 'Pratiquei rituais ocultos', category: 'Ocultismo', weight: 7 },
  { id: 'oc3', text: 'Invoquei entidades espirituais', category: 'Ocultismo', weight: 8 },
  { id: 'oc4', text: 'Usei amuletos ou superstições excessivamente', category: 'Ocultismo', weight: 4 },
  { id: 'oc5', text: 'Participei de sessões espíritas duvidosas', category: 'Ocultismo', weight: 6 },
  { id: 'oc6', text: 'Fiz pactos ou promessas com entidades', category: 'Ocultismo', weight: 9 },
  { id: 'oc7', text: 'Manipulei energias de forma antiética', category: 'Ocultismo', weight: 7 },

  // Outros (7 pecados)
  { id: 'ou1', text: 'Fui preguiçoso demais', category: 'Outros', weight: 4 },
  { id: 'ou2', text: 'Desperdicei recursos naturais', category: 'Outros', weight: 5 },
  { id: 'ou3', text: 'Dirigi de forma perigosa', category: 'Outros', weight: 7 },
  { id: 'ou4', text: 'Ignorei leis de trânsito importantes', category: 'Outros', weight: 6 },
  { id: 'ou5', text: 'Comi ou bebi em excesso repetidamente', category: 'Outros', weight: 4 },
  { id: 'ou6', text: 'Negligenciei minha saúde propositalmente', category: 'Outros', weight: 5 },
  { id: 'ou7', text: 'Sabotei projetos ou trabalhos coletivos', category: 'Outros', weight: 8 },
];

// Função auxiliar para obter pecados por categoria
export const getSinsByCategory = (category: string) => {
  return SINS.filter(sin => sin.category === category);
};

// Função auxiliar para obter um pecado pelo ID
export const getSinById = (id: string) => {
  return SINS.find(sin => sin.id === id);
};
