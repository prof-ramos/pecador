# Code Linting Assistant

Analyze and fix linting issues for `<files/directory>`.

**Usage**: `/lint src/` or `/lint components/*.tsx`

## Arguments

- `$ARGUMENTS` = File paths, directory, or glob patterns
  - Single file: `src/utils.ts`
  - Directory: `src/components/`
  - Glob pattern: `**/*.tsx`
  - Multiple: `src/utils.ts src/helpers.ts`

## Examples

```bash
/lint src/components/Button.tsx   # Single file
/lint lib/                        # Entire directory
/lint **/*.test.ts                # All test files
```

## Steps

1. **Detect linter configuration**: Check for ESLint, Prettier, TSLint configs
2. **Run existing linters**: Use project's configured linters
3. **Analyze violations**: Parse and categorize all issues
4. **Propose fixes**: Generate fixes for auto-fixable issues
5. **Apply fixes**: Run fix commands with user confirmation
6. **Manual review**: Flag issues requiring human review

## Common Linting Issues

- Unused variables and imports
- Missing semicolons or inconsistent formatting
- Type errors (TypeScript)
- Accessibility violations (JSX)
- Import ordering issues
- **Promise/async-await issues** — missing awaits, unhandled rejections
- **Cognitive complexity** — functions with too many branches/nesting
- **Null-safety** — missing optional chaining or null checks
- **Dead code** — unreachable code beyond unused vars/imports
- **Anti-patterns** — callback hell, excessive nesting

## Supported Linting Tools

**JavaScript/TypeScript**:
- ESLint (primary)
- Prettier (formatting)
- TypeScript compiler (type checking)
- Stylelint (CSS/SCSS)

**Other Languages**:
- Python: Flake8, Pylint, Ruff
- Go: golangci-lint
- Rust: clippy
- Other languages supported on request

## Limitations

Some issues require manual review:
- Complex refactors suggested by linter
- Ambiguous type changes
- Behavior-altering fixes (e.g., removing dead code that might be needed)

## Next Steps

After running this command:
1. Run the linting command to verify: `npm run lint`
2. Run tests to ensure no breakage: `npm test`
3. Review diffs before committing
4. Open a PR for review
