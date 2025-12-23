# TypeScript Migration Assistant

Migrate `<files/project>` from JavaScript to TypeScript with proper typing and modern practices.

**Usage**: `/typescript-migrate src/utils.js` or `/typescript-migrate components/`

## Arguments

- `$ARGUMENTS` = Files, directories, or glob patterns to migrate
  - Single file: `src/utils.js`
  - Directory: `components/`
  - Glob: `lib/**/*.js`

## Examples

```bash
/typescript-migrate src/utils.js          # Single file migration
/typescript-migrate components/           # Entire directory
/typescript-migrate lib/**/*.jsx          # All JSX files in lib
```

## Migration Process

1. **Analyze project structure** — Understand dependencies and architecture
2. **Create/update tsconfig.json** — Configure TypeScript settings
3. **Rename files** — `.js`/`.jsx` → `.ts`/`.tsx`
4. **Add type annotations** — Functions, variables, props
5. **Create interfaces** — Define data structures
6. **Fix type errors** — Resolve compilation issues
7. **Add missing type definitions** — Install `@types/*` packages
8. **Verify build** — Ensure TypeScript compiles successfully

## Common Conversions

**Function typing**:

```typescript
// Before (JS)
function greet(name) {
  return `Hello, ${name}`;
}

// After (TS)
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

**React component**:

```typescript
// Before (JS)
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

// After (TS)
interface ButtonProps {
  label: string;
  onClick: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

## Migration Strategies

| Strategy | Best For | Trade-offs |
|----------|----------|------------|
| **allowJs + incremental** | Large projects | Slow but safe |
| **File-by-file** | Medium projects | Balanced |
| **Full migration** | Small projects | Fast but risky |
| **Hybrid (.d.ts)** | When source can't change | Complex maintenance |

## Common Pitfalls

- **Missing @types packages** — Install `@types/react`, `@types/node`, etc.
- **tsconfig misconfiguration** — Ensure `strict` mode, proper paths
- **Build/runtime mismatches** — Test thoroughly after migration
- **Third-party types** — Some packages need custom .d.ts files

## TypeScript Features to Apply

- Interfaces and type aliases
- Generics for reusable components
- Union and intersection types
- Utility types (Partial, Pick, Omit)
- Type guards and narrowing
- Readonly properties

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
