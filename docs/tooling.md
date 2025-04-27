# 🚀 Productivity Hub — Tooling and Code Quality

## Tooling Overview

| Tool            | Scope              | Details                                |
| --------------- | ------------------ | -------------------------------------- |
| **Bun**         | Global             | Package manager for local development and project scripts |
| **Git Hooks**   | Global             | Prepare script configures hooks for quality enforcement |
| **Husky**       | Global             | Git hooks for pre-commit and pre-push checks |
| **Lint-Staged** | Global             | Formats and lints only staged files during Git operations |
| **Prettier**    | Global             | Enforced formatting via CLI and Husky hooks |
| **ESLint**      | Global             | Flat config enforcing Angular, TypeScript, and HTML rules |
| **Jest**        | Frontend & Backend | Unit testing and E2E testing with code coverage |
| **Compodoc**    | Frontend           | Angular documentation generation |
| **Typedoc**     | Backend            | NestJS API static documentation generator |
| **Swagger**     | Backend            | Interactive API explorer at `/api-docs` |

## Formatting and Linting Rules

- **Prettier** is used to enforce consistent code formatting across TypeScript, JavaScript, JSON, SCSS, YAML, and Markdown files.
- **ESLint** uses Flat Config with strict rulesets for TypeScript, Angular templates, and HTML files.
- **Import Sorting** is enforced to maintain consistent module organization (`import/order` and `sort-imports` rules).
- **Code is validated automatically on pre-commit** via Husky + lint-staged before allowing Git commits.
