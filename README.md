# 🚀 Productivity Hub

![CI Status](https://github.com/lucas9005/productivity-hub/actions/workflows/ci.yml/badge.svg?branch=dev)
![CodeQL](https://github.com/lucas9005/productivity-hub/actions/workflows/codeql.yml/badge.svg?branch=dev)
![Coverage](https://codecov.io/gh/lucas9005/productivity-hub/branch/dev/graph/badge.svg)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
![ESLint](https://img.shields.io/badge/linting-eslint-blue.svg)
![Angular](https://img.shields.io/badge/Angular-19-red?logo=angular)
![NestJS](https://img.shields.io/badge/NestJS-11-e0234e?logo=nestjs)
![Built with Bun](https://img.shields.io/badge/built%20with-bun-ffc233?logo=bun)
![License](https://img.shields.io/github/license/lucas9005/productivity-hub)

A modular full-stack suite designed to enhance personal productivity by combining essential tools like task management, finance tracking, and real-time collaboration — built with Angular 19, NestJS 11, and modern development best practices.

## 🌟 Project Goals

- 🎯 Practice advanced Angular + NestJS architecture
- 🧩 Public-facing modular productivity platform
- 💼 Professional portfolio project

## 🧩 Core Features

| #   | App Module      | Features                              |
| --- | --------------- | ------------------------------------- |
| 1   | Task Manager    | Tasks, priorities, due dates, filters |
| 2   | Finance Tracker | Income/expenses, budgets, charts      |
| 3   | Recipe Sharing  | Share, search, filter, rate recipes   |
| 4   | Travel Planner  | Itinerary, booking, geolocation       |
| 5   | Chat App        | Real-time messaging                   |

## 🛠️ Tech Stack

| Scope        | Area                 | Tools / Details                            |
| ------------ | -------------------- | ------------------------------------------ |
| **Global**   | Package Manager      | Bun                                        |
|              | Git Hooks            | Husky + lint-staged                        |
|              | Linting & Formatting | ESLint (Flat Config) + Prettier            |
|              | CI/CD                | GitHub Actions                             |
| **Frontend** | Framework            | Angular 19 (standalone) + Angular Material |
|              | State Management     | Signals + Angular Services (NgRx optional) |
|              | Authentication       | Firebase Authentication (planned)          |
|              | Testing              | Jest (with coverage)                       |
|              | Documentation        | Compodoc                                   |
| **Backend**  | Framework            | NestJS 11 REST API                         |
|              | Testing              | Jest (unit + e2e), Supertest               |
|              | Documentation        | TypeDoc, Swagger                           |
|              | Environment Config   | `@nestjs/config` (planned)                 |

## 🔧 Tooling Overview

| Tool            | Scope              | Details                                |
| --------------- | ------------------ | -------------------------------------- |
| **Bun**         | Global             | Package manager + scripts              |
| **Husky**       | Global             | Git hooks for pre-commit and pre-push  |
| **Prettier**    | Global             | Enforced via CLI and lint-staged       |
| **ESLint**      | Global             | Flat config, Angular + TS + HTML rules |
| **Lint-Staged** | Global             | Formats/lints only staged files        |
| **Jest**        | Frontend & Backend | Unit + E2E tests                       |
| **Compodoc**    | Frontend           | Angular documentation generator        |
| **Typedoc**     | Backend            | Nest API documentation generator       |
| **Swagger**     | Backend            | Nest API schema explorer               |

## 📂 Project Structure

```text
productivity-hub/
├── apps/
│   ├── frontend/       # Angular 19 app with Material, Jest, Compodoc
│   └── backend/        # NestJS 11 app with Jest, Supertest, Swagger, TypeDoc
├── docs/               # Markdown-based developer docs
├── eslint.config.js    # Flat ESLint config (TS + Angular templates)
├── prettier.config.js  # Prettier formatting rules
├── tsconfig.base.json  # Shared TypeScript base config
```

## 🧰 Available Scripts

### 1. Setup Git Hooks

```bash
"prepare": "git config core.hooksPath .husky"
```

### 2. Install Dependencies

```bash
"install:all": "bun install && (cd apps/frontend && bun install) && (cd apps/backend && bun install)"
```

### 3. Clean Dependencies and Caches

```bash
"clean:all": "rm -rf node_modules bun.lock apps/*/node_modules apps/*/bun.lock apps/*/dist apps/*/coverage apps/frontend/.angular"
```

### 4. Clean Dependencies and Caches then Install Dependencies

```bash
"reset:all": "bun run clean:all && bun run install:all"
```

### 5. Format Code

```bash
"format": "prettier --write \"**/*.{ts,js,json,html,scss,css,md,yml,yaml}\""
```

### 6. Check Code Formatting

```bash
"format:check": "prettier --check \"**/*.{ts,js,json,html,scss,css,md,yml,yaml}\""
```

### 7. Lint Code

```bash
"lint": "eslint \"**/*.{ts,html}\" --fix"
```

### 8. Check Code Linting

```bash
"lint:check": "eslint \"**/*.{ts,html}\""
```

## 📄 License

[MIT License](./LICENSE)

## 🔗 Repository

[Productivity Hub — GitHub Repo](https://github.com/lucas9005/productivity-hub)
