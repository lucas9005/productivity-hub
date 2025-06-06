# 🚀 Productivity Hub — Root Scripts Reference

## `prepare`

```sh
bun run prepare
```

> Configure Git to use `.husky` directory for managing Git hooks.

## `install:dependencies`

```sh
bun run install:dependencies
```

> Install all dependencies at the root and apps.

## `clean:dependencies`

```sh
bun run clean:dependencies
```

> Remove all installed dependencies and lock files across root and apps.

## `clean:artifacts`

```sh
bun run clean:artifacts
```

> Remove all generated artifacts including build outputs, test coverage, e2e artifacts and generated documentation.

## `clean:full`

```sh
bun run clean:full
```

> Remove all installed dependencies and generated artifacts.

## `reset`

```sh
bun run reset
```

> Remove all installed dependencies and generated artifacts, then reinstall all dependencies.

## `format`

```sh
bun run format
```

> Format the entire codebase using Prettier.

## `format:check`

```sh
bun run format:check
```

> Check formatting in the entire codebase using Prettier.

## `lint`

```sh
bun run lint
```

> Lint the entire codebase using ESLint.

## `lint:check`

```sh
bun run lint:check
```

> Check linting in the entire codebase using ESLint.
