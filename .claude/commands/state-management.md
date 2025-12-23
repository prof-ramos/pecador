# React State Management

Implement state management solution for `<feature/component>` following project conventions.

**Usage**: `/state-management auth` or `/state-management cart`

## Arguments

- `$ARGUMENTS` = Feature or component name (e.g., `auth`, `cart`, `userPreferences`)

## Task Detection

**Before starting, check current state**:
- Does `package.json` have state libraries (redux, zustand, jotai)?
- Are there existing store files (`store/`, `state/`, `context/`)?
- Is there an existing provider hierarchy?

**If no existing state management** → Full setup workflow
**If existing state management** → Optimization/upgrade workflow

## Steps

1. **Analyze current setup**: Check existing state management approach and project structure
2. **Determine solution**: Based on requirements, choose appropriate state management:
   - Context API for simple, localized state
   - Redux Toolkit for complex, global state
   - Zustand for lightweight global state
   - Custom hooks for component-level state
3. **Examine dependencies**: Check package.json for existing state management libraries
4. **Implement solution**: Create store, providers, and hooks with proper TypeScript types
5. **Set up middleware**: Add devtools, persistence, or other middleware as needed
6. **Create typed hooks**: Generate properly typed selectors and dispatch hooks
7. **Add tests**: Write unit tests for state logic and reducers
8. **Update providers**: Integrate with app's provider hierarchy

## Implementation Requirements

- Follow project's TypeScript conventions
- Use existing state management patterns if present
- Create proper type definitions for state shape
- Include error handling and loading states
- Add proper debugging setup (devtools)
- Consider performance optimizations (selectors, memoization)

## Security Note

> [!CAUTION]
> **Never store sensitive data** (tokens, passwords, PII, secrets) in Redux/Context, devtools, or localStorage. Use HTTP-only cookies or encrypted secure storage for sensitive values.

## State Management Selection Guide

| Criteria | React Hooks + Context | Zustand | Redux Toolkit |
|----------|----------------------|---------|---------------|
| App size | Small (1-5 pages) | Medium | Large/Enterprise |
| Update frequency | Low | Medium | High (many updates) |
| Time-travel debug | No | No | Yes |
| Server state | React Query | React Query | RTK Query |
| Learning curve | Easy | Easy | Moderate |

## Important Notes

- ALWAYS check existing state management first
- Don't install new dependencies without approval — consult tech lead before adding packages
- Follow project's folder structure for state files
- Consider server state vs client state separation
- Add proper TypeScript types for all state interfaces
- Add tests for state logic, selectors, and middleware
