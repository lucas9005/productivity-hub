# 🚀 Productivity Hub — Repository Standards

## Overview

This document defines the repository standards for the Productivity Hub project.
Following these standards ensures a secure, consistent, and scalable workflow.

## Branch Protection Rules

### Dev Branch Protection

| Setting | Status |
|:--------|:-------|
| Target Branch | `dev` |
| Restrict creations | ✅ Enabled |
| Restrict updates | ✅ Enabled |
| Restrict deletions | ✅ Enabled |
| Require linear history | ✅ Enabled (no merge commits) |
| Require pull request before merging | ✅ Enabled |
| Require status checks to pass | ✅ Enabled (CI checks enforced) |
| Block force pushes | ✅ Enabled |
| Require code scanning results | ✅ Enabled (CodeQL, Medium+ severity) |

### Summary

- Git history must remain linear.
- All changes to `dev` must go through Pull Requests.
- Pull Requests must pass required CI and security scans.

## Branch Naming Convention

| Type | Pattern | Example |
|:-----|:--------|:--------|
| **Feature** | `feature/<area>-<short-description>` | `feature/tasks-create-task-form` |
| **Bugfix** | `bugfix/<area>-<short-description>` | `bugfix/tasks-fix-validation-error` |
| **Chore** | `chore/<area>-<short-description>` | `chore/dev-update-prettier-config` |
| **Refactor** | `refactor/<area>-<short-description>` | `refactor/tasks-service-cleanup` |
| **Documentation** | `docs/<area>-<short-description>` | `docs/tasks-architecture-entry` |

- Only branches matching the naming regex are allowed: `^(chore\|refactor\|docs\|feature\|bugfix)/[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$`
- Branch names must use lowercase letters and hyphens.

## Pull Request Standards

- Pull Requests must be created from feature, bugfix, chore, refactor or docs branches.
- PRs must pass all required status checks before merge.
- Squash & Merge is required to maintain clean commit history.
- PR templates exist for different types of contributions:

| PR Type | Template | Required Labels |
|:--------|:---------|:-----------------|
| **Feature** | `feature-template.md` | `feature`, `feat`, `enhancement` |
| **Bugfix** | `bugfix-template.md` | `bugfix`, `bug`, `fix` |
| **Change** (Chore, Refactor, Docs) | `change-template.md` | `change`, `chore`, `refactor`, `docs` |

- Each PR must include:
  - Clear title and description
  - Linked issues (if applicable)
  - Screenshots (optional but encouraged)

## CI/CD and Code Quality Enforcement

- **CI/CD:** GitHub Actions workflows must pass (format, lint, test, build).
- **Static Code Analysis:** CodeQL scanning must pass.
- **Code Coverage:** Codecov integration active (badge displayed in README).
- **Linting & Formatting:**
  - Prettier formatting enforced globally and on staged commits.
  - ESLint Flat Config with TypeScript + Angular rules enforced.
- **Git Hooks:** Husky and lint-staged prevent bad commits locally.
