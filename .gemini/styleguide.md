#Style Guide

## Introduction

This style guide defines our coding conventions for JavaScript and TypeScript projects across the monorepo.

## Key Principles

- **Readability:** Code should be clear and self-explanatory.
- **Maintainability:** Easy to refactor and extend.
- **Consistency:** Uniform style across packages reduces cognitive load.
- **Performance:** Optimize only when needed, never at the expense of clarity.

## Deviations & Conventions

### Line Length

- **Max:** 100 characters per line.\
  This improves readability on modern displays and aligns with real-world usage of JSX, URLs, etc.

### Naming Conventions

| Element          | Convention         | Examples        |
| ---------------- | ------------------ | --------------- |
| Variables        | `camelCase`        | `userName`      |
| Constants        | `UPPER_SNAKE_CASE` | `API_BASE_URL`  |
| Functions        | `camelCase`        | `processData()` |
| Classes          | `PascalCase`       | `UserManager`   |
| Types/Interfaces | `PascalCase`       | `User`          |
| Files            | `kebab-case.ts`    | `user-utils.ts` |

### Comments

- Write **why**, not just what.
- Use full sentences and punctuation.
- Avoid redundant comments (let types and names speak).
- Use `TODO:` or `FIXME:` for actionable markers.

### Logging

- Prefer structured logs (e.g., via `console.info`, `console.error`, or Winston if needed).
- Include context: user ID, action, etc.
- Don’t leave stray `console.log()` in production code (use linter rule to block this).

### TypeScript Conventions

- **Use strict mode** (`strict: true` in `tsconfig.json`)
- **Always prefer interfaces** for public APIs
- **Narrow types** with guards before usage
- Avoid excessive type annotations — rely on inference when obvious

### Error Handling

- Avoid bare `catch (e)` blocks — handle known errors or rethrow with context.
- Use custom `Error` subclasses where appropriate.
- Don’t swallow exceptions unless there's a reason.
- Async code: always `try/catch` or handle rejections in `.catch()`.
