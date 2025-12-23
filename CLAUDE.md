# CLAUDE.md - Guia de Contexto para AI

## 🎯 Visão Geral do Projeto

**Wrapped dos Pecados 2025** é uma aplicação web viral que permite aos usuários fazerem uma autoavaliação anônima de seus "pecados" cometidos ao longo de 2025. Inspirado no formato "Wrapped" do Spotify, gera uma imagem personalizada e compartilhável em formato PNG (1080x1920px - Stories).

### Stack Tecnológica

| Tecnologia | Versão | Propósito |
|------------|--------|-----------|
| Next.js | 16.1.1 | Framework React com App Router |
| React | 19.2.3 | Biblioteca de UI |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 4.x | Estilização utilitária |
| Framer Motion | 12.x | Animações |
| html2canvas | 1.4.1 | Exportação PNG |
| file-saver | 2.0.5 | Download de arquivos |

---

## 📁 Estrutura do Projeto

```text
pecador/
├── app/                    # Next.js App Router
│   ├── globals.css         # Estilos globais + tema (celestial/infernal)
│   ├── layout.tsx          # Layout raiz com metadados SEO
│   ├── page.tsx            # Página principal (gerenciamento de estado)
│   └── favicon.ico
├── components/             # Componentes React reutilizáveis
│   ├── Landing.tsx         # Tela inicial/onboarding
│   ├── Checklist.tsx       # Lista interativa de ~105 pecados
│   └── Result.tsx          # Tela de resultado + exportação PNG
├── lib/                    # Lógica de negócio
│   ├── types.ts            # Tipos TypeScript (Sin, Category, etc.)
│   ├── data/
│   │   ├── sins.ts         # Lista dos 105 pecados com pesos
│   │   └── categories.ts   # Configuração das 11 categorias
│   └── utils/
│       ├── scoring.ts      # Algoritmo de pontuação (0-100)
│       └── imageExport.ts  # Utilitário de exportação PNG
├── public/                 # Assets estáticos (SVGs, imagens)
└── .claude/                # Configurações do Claude
```

---

## 🔧 Comandos Essenciais

> **Package Manager**: Este projeto usa `npm` (lockfile: `package-lock.json`)

```bash
# Desenvolvimento
npm install         # Instalar dependências
npm run dev         # Servidor local com hot reload (http://localhost:3000)

# Produção
npm run build       # Build otimizado
npm start           # Iniciar servidor de produção

# Qualidade
npm run lint        # Validar ESLint (Next.js + TypeScript)
```

---

## 📐 Convenções de Código

### TypeScript/React

- **Componentes**: PascalCase (`Landing.tsx`, `Checklist.tsx`)
- **Utilitários**: camelCase (`scoring.ts`, `imageExport.ts`)
- **Tipos/Interfaces**: PascalCase (`Sin`, `Category`, `ScoreResult`)
- **Indentação**: 2 espaços
- **Aspas**: simples em TS/TSX
- **Ponto e vírgula**: obrigatório
- **Imports**: usar alias `@/` para raiz do projeto

```typescript
// ✅ Correto
import { Sin } from '@/lib/types';
import Landing from '@/components/Landing';

// ❌ Evitar
import { Sin } from '../../../lib/types';
```

### Idioma

- **Código**: variáveis e funções em inglês
- **UI e documentação**: pt-BR
- **Commits**: Conventional Commits em inglês (`feat:`, `fix:`, `docs:`)

---

## 🎨 Sistema de Design

### Temas (baseado no score)

| Score | Tema | Cores Principais |
|-------|------|-----------------|
| 0-30 | Celestial | Sky Blue `#E0F2FE`, Golden `#FBBF24` |
| 31-60 | Neutral | Gray `#F3F4F6`, Dark Gray `#1F2937` |
| 61-100 | Infernal | Dark Red `#7F1D1D`, Fiery Red `#EF4444` |

### Tipografia

- **Headings**: Poppins (700-900)
- **Body**: Inter (400-700)
- **Accent**: Playfair Display

---

## 📊 Lógica de Negócio

### Algoritmo de Pontuação (`lib/utils/scoring.ts`)

1. **Base**: soma dos pesos dos pecados selecionados
2. **Boost por gravidade**: pecados com peso ≥8 ganham pontos extras
3. **Boost por quantidade**: +0.3 pontos por pecado
4. **Normalização**: resultado final de 0-100

### Tiers de Resultado

| Score | Tier | Comportamento |
|-------|------|---------------|
| 0-20 | Santo 👼 | Tema celestial, mensagens angelicais |
| 21-40 | Leve 🧼 | Tema neutro claro |
| 41-60 | Equilibrado ⚖️ | Tema neutro |
| 61-80 | Contumaz 🔥 | Tema infernal leve |
| 81-100 | Demônio 👿 | Tema infernal completo |

---

## 🔒 Privacidade e Segurança

- **Zero armazenamento**: nenhum dado é enviado a servidores
- **100% client-side**: todo processamento ocorre no navegador
- **Sem tracking**: apenas analytics agregados e anônimos
- **Variáveis de ambiente**: usar `.env.local` com prefixo `NEXT_PUBLIC_` para exposição ao cliente

---

## 🧪 Validação Manual

Não há testes automatizados. Para validar mudanças:

1. Executar `npm run dev`
2. Testar fluxo completo: Landing → Checklist → Result
3. Verificar exportação PNG (deve gerar imagem 1080x1920px)
4. Testar em diferentes viewports (mobile, tablet, desktop)
5. Executar `npm run lint` antes de commits

---

## 📱 Responsividade

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+
- **Imagem exportada**: sempre 1080x1920px (formato Stories)

---

## 🚀 Deploy Recomendado

```bash
# Via Vercel CLI
npm i -g vercel
vercel
```

Ou via integração GitHub no dashboard Vercel.

---

## ⚠️ Pontos de Atenção

1. **Exportação PNG**: O `html2canvas` pode ter problemas com fontes web e gradientes complexos
2. **Performance**:
   - Bundle size alvo: < 200KB gzipped (First Load JS)
   - Verificar com: `npm run build` (exibe tamanhos no output)
   - Estratégias: dynamic imports, lazy loading de componentes pesados, tree-shaking
3. **Animações**: Usar `framer-motion` com `will-change` para performance
4. **SEO**: Importante para viralidade - manter metadados atualizados em `layout.tsx`

---

## 📚 Arquivos Relacionados

- `README.md`: Documentação pública completa
- `AGENTS.md`: Diretrizes para agentes AI (formato mais técnico)
- `.claude/settings.local.json`: Configurações locais do Claude
