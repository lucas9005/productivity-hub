# 🚀 Productivity Hub — Backend Scripts Reference

## `start:dev`

```sh
ts-node-dev --respawn --transpile-only --project tsconfig.dev.json src/main.ts
```

> Start the NestJS app using the development configuration with live reload.

## `start:prod`

```sh
ts-node-dev --respawn --transpile-only --project tsconfig.prod.json src/main.ts
```

> Start the NestJS app using the production configuration with live reload.

## `build:dev`

```sh
tsc --project tsconfig.dev.json
```

> Build the NestJS app using the development configuration.

## `build:prod`

```sh
tsc --project tsconfig.prod.json
```

> Build the NestJS app using the production configuration.

## `test`

```sh
jest
```

> Run unit tests using Jest.

## `test:watch`

```sh
jest --watch
```

> Run unit tests with live reload.

## `test:coverage`

```sh
jest --coverage
```

> Run unit tests and generate code coverage report.

## `test:ci`

```sh
jest --ci --coverage --runInBand
```

> Run unit tests in CI mode with sequential execution and generate code coverage report.

## `test:e2e`

```sh
jest --config ./e2e/jest-e2e.json
```

> Run end-to-end tests using a dedicated Jest config.

## `docs`

```sh
bun run docs:build && bunx serve -l 4000 documentation
```

> Build and serve the NestJS documentation using Typedoc and a static server.

## `docs:build`

```sh
typedoc --options typedoc.config.js
```

> Build the NestJS documentation using Typedoc.
