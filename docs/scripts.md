# 🚀 Productivity Hub — Scripts Reference

## Root Scripts

| Script | Command | Description |
|:-------|:--------|:------------|
| `prepare` | `git config core.hooksPath .husky` | Configure Git to use Husky for managing hooks |
| `install:all` | `bun install && (cd apps/frontend && bun install) && (cd apps/backend && bun install)` | Install dependencies in root, frontend, and backend projects |
| `clean:all` | `rm -rf node_modules bun.lock apps/*/node_modules apps/*/bun.lock apps/*/dist apps/*/coverage apps/*/documentation apps/frontend/.angular` | Remove all dependencies, caches, build outputs, and documentation outputs |
| `reset:all` | `bun run clean:all && bun run install:all` | Clean and reinstall all project dependencies |
| `format` | `prettier --write "**/*.{ts,js,json,html,scss,css,md,yml,yaml}"` | Format codebase files using Prettier |
| `format:check` | `prettier --check "**/*.{ts,js,json,html,scss,css,md,yml,yaml}"` | Check codebase formatting without applying changes |
| `lint` | `eslint "**/*.{ts,html}" --fix` | Lint and automatically fix project TypeScript and HTML files |
| `lint:check` | `eslint "**/*.{ts,html}"` | Check lint issues in TypeScript and HTML files without fixing |

## Frontend Scripts

| Script | Command | Description |
|:-------|:--------|:------------|
| `ng` | `ng` | Angular CLI shortcut command |
| `start` | `ng serve --configuration development` | Start Angular development server with development configuration |
| `start:prod` | `ng serve --configuration production` | Start Angular server with production configuration |
| `build` | `ng build --configuration development` | Build Angular app for development environment |
| `build:prod` | `ng build --configuration production` | Build Angular app for production deployment |
| `build:watch` | `ng build --watch --configuration development` | Watch and rebuild Angular app during development |
| `build:watch:prod` | `ng build --watch --configuration production` | Watch and rebuild Angular app during production builds |
| `test` | `jest` | Run unit tests for the Angular app |
| `test:watch` | `jest --watch` | Watch and rerun Angular tests on file changes |
| `test:coverage` | `jest --coverage` | Generate code coverage report for Angular tests |
| `test:ci` | `jest --ci --coverage --runInBand` | Run Angular tests in Continuous Integration mode |
| `docs` | `compodoc -p tsconfig.json` | Generate static documentation for the Angular app using Compodoc |
| `docs:start` | `compodoc -p tsconfig.json -s` | Serve the generated Angular documentation locally |

## Backend Scripts

| Script | Command | Description |
|:-------|:--------|:------------|
| `start` | `nest start` | Start the NestJS backend server in default mode |
| `start:dev` | `nest start --watch` | Start the NestJS backend server in development watch mode |
| `start:debug` | `nest start --debug --watch` | Start the NestJS backend server in debug watch mode |
| `start:prod` | `node dist/main` | Run compiled NestJS server in production mode |
| `build` | `nest build` | Compile the NestJS backend project |
| `test` | `jest` | Run unit tests for the backend project |
| `test:watch` | `jest --watch` | Watch and rerun backend tests on file changes |
| `test:coverage` | `jest --coverage` | Generate code coverage report for backend tests |
| `test:ci` | `jest --ci --coverage --runInBand` | Run backend tests in Continuous Integration mode |
| `test:debug` | `node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand` | Debug backend unit tests with Node Inspector |
| `test:e2e` | `jest --config ./test/jest-e2e.json` | Run end-to-end (e2e) tests for the backend |
| `docs` | `typedoc --options typedoc.config.mjs` | Generate static API documentation for the backend using TypeDoc |
| `docs:start` | `bunx serve documentation --port 4000` | Serve backend API documentation locally |
