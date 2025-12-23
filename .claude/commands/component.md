# React Component Generator

Create a React component named `<ComponentName>` following project conventions.

**Usage**: `/component ButtonPrimary` or `/component UserCard`

## Arguments

- `$ARGUMENTS` = Component name in PascalCase (e.g., `ButtonPrimary`, `UserCard`, `Modal`)

## Examples

```bash
# Creates components/ButtonPrimary.tsx
/component ButtonPrimary

# Creates components/UserAvatar.tsx
/component UserAvatar
```

**Generated structure**:

```text
components/
└── ButtonPrimary.tsx   # Component with props interface
```

## Steps

1. **Analyze project structure**: Check existing components to understand file organization, naming conventions, and patterns
2. **Examine styling approach**: Identify CSS/SCSS modules, styled-components, Tailwind, or other styling methods used
3. **Review testing patterns**: Check existing test files to understand testing framework and conventions
4. **Create component structure**: Generate appropriate files (component, styles, tests, index)
5. **Implement component**: Write TypeScript/JavaScript with proper props interface and logic
6. **Add tests**: Write comprehensive tests following project patterns
7. **Verify integration**: Ensure component works with existing project setup

## Requirements

- Follow existing project file structure and naming conventions
- Use TypeScript if project uses it
- Include proper accessibility attributes
- Add responsive design considerations
- Write tests that match project testing patterns
- Include usage examples in component documentation

## Important Notes

- ALWAYS examine existing components first to understand project patterns
- Use the same styling approach as the rest of the project
- Follow the project's TypeScript conventions for props and interfaces
- Don't install new dependencies without approval — open a discussion and get explicit confirmation before adding packages
