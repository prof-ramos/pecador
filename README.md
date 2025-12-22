# 🔥 Wrapped dos Pecados 2025

Uma aplicação web viral que permite aos usuários fazerem uma autoavaliação anônima de seus "pecados" cometidos ao longo de 2025. Inspirado no formato de "wrapped" popularizado pelo Spotify, o produto gera uma imagem personalizada e compartilhável em formato PNG.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Características

- 🎯 **105 Pecados** distribuídos em 11 categorias
- 🎨 **Design Dual (Celestial/Infernal)** baseado no resultado
- 📊 **Sistema de pontuação** de 0-100 com mensagens personalizadas
- 📸 **Exportação em PNG** (1080x1920px - formato Stories)
- 🔒 **100% Anônimo** - processamento client-side apenas
- 📱 **Totalmente Responsivo** - mobile, tablet e desktop
- ⚡ **Performance otimizada** com Next.js 16 e Turbopack

## 🎯 Categorias de Pecados

1. **Moral** - Questões morais e éticas
2. **Luxúria** - Desejos carnais e tentações
3. **Orgulho** - Vaidade e soberba
4. **Espiritual** - Questões espirituais e religiosas
5. **Vícios** - Dependências e maus hábitos
6. **Violência** - Atos violentos e agressivos
7. **Mentira** - Falsidade e engano
8. **Social** - Comportamento social inadequado
9. **Ganância** - Avareza e materialismo
10. **Ocultismo** - Práticas ocultas e místicas
11. **Outros** - Pecados diversos

## 🚀 Tecnologias

- **Framework**: [Next.js 16.1.1](https://nextjs.org/)
- **UI Library**: [React 19.2.3](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Image Export**: [html2canvas](https://html2canvas.hertzen.com/)
- **File Download**: [file-saver](https://github.com/eligrey/FileSaver.js/)

## 📁 Estrutura do Projeto

```
pecador/
├── app/
│   ├── globals.css          # Estilos globais e tema
│   ├── layout.tsx           # Layout raiz com metadados
│   └── page.tsx             # Página principal com gerenciamento de estado
├── components/
│   ├── Landing.tsx          # Tela inicial/onboarding
│   ├── Checklist.tsx        # Lista interativa de pecados
│   └── Result.tsx           # Tela de resultado com exportação PNG
├── lib/
│   ├── types.ts             # Tipos TypeScript
│   ├── data/
│   │   ├── sins.ts          # Lista de 105 pecados
│   │   └── categories.ts    # Configuração de categorias
│   └── utils/
│       ├── scoring.ts       # Algoritmo de pontuação
│       └── imageExport.ts   # Utilitário de exportação PNG
└── public/
    └── ...                  # Assets estáticos
```

## 🎨 Sistema de Design

### Paleta de Cores

**Celestial (Score 0-30)**
- Primary: `#E0F2FE` (Sky Blue)
- Glow: `#FBBF24` (Golden)
- Text: `#1E3A8A` (Deep Blue)

**Neutral (Score 31-60)**
- Primary: `#F3F4F6` (Gray)
- Text: `#1F2937` (Dark Gray)

**Infernal (Score 61-100)**
- Primary: `#7F1D1D` (Dark Red)
- Glow: `#EF4444` (Fiery Red)
- Text: `#FECACA` (Light Red)

### Tipografia

- **Headings**: Poppins (Bold 700-900)
- **Body**: Inter (Regular 400-700)
- **Accent**: Playfair Display (para títulos dramáticos)

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone <repository-url>
cd pecador

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
# Cria build otimizado
npm run build

# Inicia servidor de produção
npm start
```

### Lint

```bash
npm run lint
```

## 📊 Sistema de Pontuação

O score é calculado baseado em:

1. **Quantidade de pecados** selecionados
2. **Peso de cada pecado** (1-10, onde 10 é mais grave)
3. **Boost por gravidade** (pecados com peso ≥8 recebem pontos extras)
4. **Boost por quantidade** (0.3 pontos por pecado)

### Tiers de Resultado

| Score | Tier | Mensagem Exemplo |
|-------|------|------------------|
| 0-20  | Santo | "Você é praticamente um anjo! 👼" |
| 21-40 | Leve | "Algumas manchas, mas nada que não se limpe! 🧼" |
| 41-60 | Equilibrado | "Perfeitamente equilibrado ⚖️" |
| 61-80 | Contumaz | "O calor está aumentando por aqui... 🔥" |
| 81-100 | Demônio | "Satanás quer saber sua localização! 👿" |

## 🔒 Privacidade & Segurança

- ✅ **Zero armazenamento de dados** - nenhuma informação é enviada a servidores
- ✅ **Processamento 100% client-side** - tudo acontece no navegador do usuário
- ✅ **Sem cookies de tracking** - apenas cookies essenciais do Vercel
- ✅ **Sem analytics identificáveis** - apenas métricas agregadas e anônimas
- ✅ **HTTPS obrigatório** - comunicação segura

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:

- 📱 **Mobile**: 320px - 767px
- 📱 **Tablet**: 768px - 1023px
- 💻 **Desktop**: 1024px+

A imagem exportada é sempre em formato **1080x1920px** (ideal para Instagram Stories).

## 🎯 Métricas de Sucesso (KPIs)

- **Adoção**: 100.000 sessões nos primeiros 7 dias
- **Engagement**: Taxa de conclusão > 70%
- **Viralidade**: Taxa de download de PNG > 50%
- **Performance**: Tempo de carregamento < 2s
- **Alcance**: 10.000 compartilhamentos sociais orgânicos

## 🚀 Deploy

### Vercel (Recomendado)

O deploy mais fácil é usando a [Vercel Platform](https://vercel.com/new):

```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Ou conecte o repositório GitHub diretamente no dashboard da Vercel.

### Outras Plataformas

A aplicação pode ser deployada em qualquer plataforma que suporte Next.js:

- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- Render

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é de uso livre para fins educacionais e de entretenimento.

## 👨‍💻 Autor

**Gabriel Ramos**

## 🙏 Agradecimentos

- Inspirado no Spotify Wrapped
- Design baseado em elementos celestiais e infernais
- Comunidade open-source

---

**Aviso**: Este projeto é apenas para entretenimento. Não substitui orientação espiritual ou psicológica profissional.
