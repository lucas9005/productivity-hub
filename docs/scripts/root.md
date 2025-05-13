# 🚀 Productivity Hub — Root Scripts Reference

## `prepare`

```sh
git config core.hooksPath .husky
```

> Configure Git to use `.husky` directory for managing Git hooks.

## `install:dependencies`

```sh
bun install && (cd apps/frontend && bun install) && (cd apps/backend && bun install)
```

> Install all dependencies at the root and apps.

## `clean:dependencies`

```sh
rm -rf node_modules bun.lock apps/*/node_modules apps/*/bun.lock
```

> Remove all installed dependencies and lock files across root and apps.

## `clean:artifacts`

```sh
rm -rf apps/*/dist apps/*/coverage apps/*/documentation apps/frontend/.angular
```

> Remove all generated artifacts including build outputs, test coverage, and generated documentation.

## `clean:full`

```sh
bun run clean:dependencies && bun run clean:artifacts
```

> Remove all installed dependencies and generated artifacts.

## `reset`

```sh
bun run clean:full && bun run install:dependencies
```

> Remove all installed dependencies and generated artifacts, then reinstall all dependencies.

## `format`

```sh
prettier --write "**/*.{ts,js,json,html,scss,css,md,yml,yaml}"
```

> Format the entire codebase using Prettier.

## `format:check`

```sh
prettier --check "**/*.{ts,js,json,html,scss,css,md,yml,yaml}"
```

> Check formatting in the entire codebase using Prettier.

## `lint`

```sh
eslint "**/*.{ts,html}" --fix
```

> Lint the entire codebase using ESLint.

## `lint:check`

```sh
eslint "**/*.{ts,html}"
```

> Check linting in the entire codebase using ESLint.
