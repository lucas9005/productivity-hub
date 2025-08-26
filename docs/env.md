# 🚀 Productivity Hub — Environment Variables

## Frontend Environment Strategy

Angular environment configuration is handled via TypeScript files located in:

```plaintext
apps/frontend/src/environments/
```

The project uses the Angular CLI’s built-in `fileReplacements` feature to swap environment files during builds:

| Build Target | Replacement Logic                        |
| ------------ | ---------------------------------------- |
| Development  | `environment.ts` → `environment.dev.ts`  |
| Production   | `environment.ts` → `environment.prod.ts` |

All app code should import from:

```ts
import { environment } from '@env/environment';
```

This ensures proper replacement during both local and CI builds.

### Environment Files

* `environment.ts` — Base template used for interface conformance and future copies
* `environment.dev.ts` — Used during development builds
* `environment.prod.ts` — Used during production builds (excluded from Git)
* `environment.prod.sample.ts` — Used to test prod builds in CI, contains example prod file with non-secret placeholders

All environment files are strongly typed using the `AppEnvironment` interface located at:

```plaintext
apps/frontend/src/shared/models/environment.model.ts
```

## Backend Environment Strategy

Environment variable usage and structure for runtime in backend will be documented here once is implemented during development.
