# Test Generation Assistant

Generate tests for `<file/component>` following project conventions.

**Usage**: `/test UserCard` or `/test lib/utils/scoring.ts`

## Arguments

- `$ARGUMENTS` = Component name, file path, or functionality to test
  - Component: `UserCard`, `Button`
  - File: `lib/utils/scoring.ts`
  - Feature: `authentication flow`

## Examples

```bash
/test UserCard                    # Tests for UserCard component
/test lib/utils/scoring.ts        # Tests for scoring utility
/test authentication flow         # E2E tests for auth
```

## Steps

1. **Analyze target**: Understand component/function to test
2. **Check test setup**: Identify testing framework and patterns
3. **Generate tests**: Create comprehensive test cases
4. **Run verification**: Ensure tests pass
5. **Review coverage**: Check code coverage reports

## Supported Testing Frameworks

**JavaScript/TypeScript**:

- **Jest** — Widely used test runner with extensive features
- **Vitest** — Vite-native, Jest-compatible, high performance
- **Jasmine** — Simple and flexible testing framework

> [!NOTE]
> Before recommending a default, detect the project's existing test framework (check `package.json` or project structure) or prompt the team for their preference.

**Testing Library Packages** (DOM testing utilities):

- `@testing-library/react` — React component testing
- `@testing-library/react-native` — React Native testing
- `@testing-library/vue` — Vue component testing
- `@testing-library/svelte` — Svelte component testing
- `@testing-library/dom` — Generic DOM testing

**E2E Testing**:

- Playwright
- Cypress

## Test Patterns

```typescript
// Component test example
describe('UserCard', () => {
  it('renders user name', () => {
    render(<UserCard user={{ name: 'John' }} />);
    expect(screen.getByText('John')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const onClick = jest.fn();
    render(<UserCard onClick={onClick} />);
    await userEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });
});
```

## Requirements

- Follow existing test file naming (`.test.ts`, `.spec.ts`)
- Use project's assertion style
- Include edge cases and error scenarios
- Test accessibility where applicable
- Mock external dependencies appropriately

## Important Notes

- ALWAYS check existing tests first to match patterns
- Use the same testing libraries as the project
- Don't install new test dependencies without approval
