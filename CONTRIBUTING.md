# Contributing to Productivity Hub

Welcome! This project is a full-stack, modular productivity hub combining tools like task management, finance tracking, recipe management,
travel planning, and real-time messaging — built with Angular 19, NestJS 11, and modern development best practices.
We appreciate all forms of contributions — from code to docs, testing, and ideas.

## 🛠 Project Setup

Please follow the [Developer Setup Guide](./docs/setup.md) for installing dependencies and running the project locally using **Bun**.

Refer to:

- [Architecture Overview](./docs/architecture.md)
- [Tooling Reference](./docs/tooling.md)
- [Environment Variables](./docs/env.md)

## 📁 Repository Structure

- Apps live in [`/apps`](./apps/)
- Shared libraries live in [`/libs`](./libs/)
- Developer docs live in [`/docs`](./docs/)
- CI, PR, and Issue templates live in [`.github`](./.github/)

## 🚀 How to Contribute

1. **Check open issues** or [GitHub Project Board](https://github.com/lucas9005/productivity-hub/projects) for tasks.
2. **Create a feature branch** with

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Follow [Conventional Commits](https://www.conventionalcommits.org/)
4. Commit clean and small changes, with meaningful descriptions.
5. Use our PR templates when submitting.
6. Ensure:
   - Tests pass (`bun run test`)
   - Formatting and linting pass (`bun run check`)

## 🔍 Standards and Code Style

This project uses:

- Bun for scripts and package management
- ESLint (Flat), Prettier, Husky, lint-staged
- Jest for testing
- Codecov for coverage reports

See: [Scripts Reference](./docs/scripts.md) and [Tooling Docs](./docs/tooling.md)

## 🤝 Code of Conduct

By participating, you agree to abide by our [Code of Conduct](./CODE_OF_CONDUCT.md).

## 💬 Questions?

Open an issue or email [lucas9005@gmail.com](mailto:lucas9005@gmail.com)
