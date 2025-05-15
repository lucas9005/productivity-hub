# 🚀 Productivity Hub — Developer Setup Guide

## Developer Environment Setup

### 1. Node.js Version

- Required Node.js version: **18.20.7**
- Use **NVM (Node Version Manager)** to manage Node versions:

  ```bash
  nvm install 18.20.7
  nvm use 18.20.7
  ```

### 2. Install Bun

- Bun is required globally:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

- Verify installation:

  ```bash
  bun --version
  ```

### 3. Clone the Repository

```bash
git clone https://github.com/lucas9005/productivity-hub.git
cd productivity-hub
```

### 4. Install Project Dependencies

```bash
bun run install:dependencies
```

This installs dependencies for:

- Root
- Frontend (`apps/frontend`)
- Backend (`apps/backend`)

### 5. Setup Git Hooks (Husky)

```bash
bun run prepare
```

This configures local Git hooks for Prettier and ESLint checks.

### 6. Verify Development Setup

- Format Check:

  ```bash
  bun run format:check
  ```

- Lint Check:

  ```bash
  bun run lint:check
  ```

If both pass, your development environment is ready!
