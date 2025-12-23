# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router (layout raiz, página principal, estilos globais em `app/globals.css`).
- `components/`: componentes React reutilizáveis (ex.: `Landing.tsx`, `Checklist.tsx`, `Result.tsx`).
- `lib/`: tipos (`lib/types.ts`), dados base (`lib/data/`), e utilitários (`lib/utils/`).
- `public/`: assets estáticos (SVGs e imagens usadas no app).

## Build, Test, and Development Commands

```bash
npm install     # instala dependências
npm run dev     # inicia o servidor local com hot reload
npm run build   # gera build de produção
npm start       # inicia o build gerado
npm run lint    # valida regras ESLint (Next.js + TypeScript)
```

## Coding Style & Naming Conventions

- TypeScript + React com padrão do Next.js; prefira componentes funcionais.
- Indentação de 2 espaços, ponto e vírgula, e aspas simples em TS/TSX.
- Nomes: componentes em PascalCase; utilitários e helpers em camelCase.
- Imports usam alias `@/` para raiz do projeto (ex.: `@/components/...`).
- Textos de UI e docs devem permanecer em pt-BR, consistentes com o README.

## Testing Guidelines

- Não há suite de testes automatizados no momento.
- Para validar mudanças, rode `npm run dev` e verifique o fluxo landing -> checklist -> result e a exportação PNG.
- Se adicionar testes, use `*.test.ts(x)` ou `__tests__/` próximo ao módulo e documente o comando em `package.json`.

## Commit & Pull Request Guidelines

- Histórico usa Conventional Commits (`feat:`, `fix:`). Mantenha o prefixo e a mensagem curta.
- PRs devem incluir: descrição clara, passos para testar, e screenshots quando houver mudanças visuais.
- Referencie issues relacionadas quando existirem.

## Security & Configuration Tips

- O app é 100% client-side; não inclua segredos no bundle.
- Se precisar de variáveis, use `.env.local` e prefixo `NEXT_PUBLIC_` para o que for exposto no cliente.
