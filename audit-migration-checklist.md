# ✅ Productivity Hub — Monorepo Migration Checklist

### 🕒 Timestamp: 2025-04-07 [Final Version]

> Working checklist to track monorepo migration progress.

---

## ✅ Phase 1: Preparation

- [x] Branch created: `feat/monorepo-migration-wip`
- [x] Backup existing state (zip & commits)

## ✅ Phase 2: Project Restructure

- [x] Create `/apps/frontend/`
- [x] Move Angular app into `/apps/frontend/`
- [x] Adjust `angular.json` paths
- [x] Adjust `tsconfig.*` references
- [x] Adjust Jest config
- [x] Move `.eslintrc.json` and create isolated frontend ESLint config
- [x] Package.json scripts updated to point to frontend app

## ✅ Phase 3: Tooling & Improvements

- [x] ESLint scoped to frontend app only
- [x] Jest scoped to frontend app only
- [x] Prettier scoped to frontend app only
- [x] Husky + lint-staged running successfully
- [x] Prepare GitHub diff reference
- [x] Audit current changes vs dev

## ⏳ Phase 4: Post-Migration Clean-up

- [ ] Improve ESLint for spec files
- [ ] Update CI/CD for monorepo
- [ ] Prepare for backend app scaffolding
- [ ] Add global tooling improvements (optional)

## 🚀 Future Improvements

- [ ] Backend NestJS app setup in `/apps/backend/`
- [ ] Nx-style workspace orchestration (optional)
- [ ] Workspace-wide lint/test/format
- [ ] End-to-end testing integration
