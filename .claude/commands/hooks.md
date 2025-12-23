# React Custom Hooks

Create custom React hooks for `<functionality>` following project conventions.

**Usage**: `/hooks fetchData` or `/hooks formValidation`

## Arguments

- `$HOOK_DESCRIPTION` = Descrição funcional do hook (ex.: `fetchData`, `formValidation`, `localStorage`)

## Common Hook Patterns

- **useLocalStorage** - Persist state to localStorage with sync
- **useFetch / useQuery** - Data fetching with loading and error states
- **useDebounce / useThrottle** - Rate-limit value updates
- **useMediaQuery** - Responsive design breakpoint detection
- **useOnClickOutside** - Detect clicks outside a ref element
- **useForm** - Form state and validation management
- **useReducer** - Complex state logic with reducer pattern
- **useCallback** - Memoize callbacks to prevent unnecessary re-renders
- **useRef** - DOM access and mutable values that persist without re-renders

## React Rules of Hooks (Mandatory)

> [!IMPORTANT]
>
> 1. **Never call hooks conditionally** — no `if`, loops, or early returns around hook calls
> 2. **Only call at top level** — not inside nested functions, only in React functional components or custom hooks
> 3. **Dependency arrays** — always specify correct deps for useEffect/useCallback/useMemo

## Requirements

- **Naming**: Every custom hook MUST start with `use` prefix (e.g., `useAuth`, `useFetch`, `useForm`)
- **Compatibility**: These conventions apply to both TypeScript and plain JavaScript authors.
- **TypeScript**: Follow TypeScript conventions with proper generic types (optional for JS projects, but recommended via JSDoc).
- Handle cleanup properly in useEffect (remove listeners, clear timers, cancel subscriptions, abort fetch requests)
- Consider memoization for expensive computations
- Document parameters and return values
- Write tests for hook logic

## Hook Structure Example

```typescript
function useCustomHook<T>(param: T): ReturnType {
  // 1. State declarations
  const [state, setState] = useState<T>(param);

  // 2. Refs (if needed)
  const ref = useRef<SomeType>(null);

  // 3. Effects with cleanup
  useEffect(() => {
    // setup
    const handler = () => { /* ... */ };
    window.addEventListener('resize', handler);

    // cleanup: remove listeners, clear timers, cancel requests
    return () => window.removeEventListener('resize', handler);
  }, [/* deps */]);

  // 4. Return value
  return { state, setState };
}
```

## Important Notes

- ALWAYS check for existing hooks before creating new ones
- Handle edge cases and error states
- Prefer composition over complex single hooks
- Don't install new dependencies without approval
