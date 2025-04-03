# 🚀 Productivity Hub

An all-in-one suite for enhancing personal efficiency by consolidating essential productivity and lifestyle utilities.  
Built with Angular 19, Tailwind CSS, Angular Material, and modern full-stack practices.

## 🌟 Project Goals

- 🧩 Modular productivity platform
- 🎯 Practice advanced Angular + NestJS architecture
- 💼 Professional portfolio project (interviews & showcase)
- 🌍 Public-facing application with user personalization

## 🧭 Project Structure

- **Landing page**: Server-Side Rendered (SSR) at `/`
- **Dashboard**: `/app` — Main shell with modular, lazy-loaded features
- **Monorepo style**: Organized, scalable, and maintainable

## 🧩 Core Features

| #   | App Module             | Features                              |
| --- | ---------------------- | ------------------------------------- |
| 1   | Task Manager           | Tasks, priorities, due dates, filters |
| 2   | Finance Tracker        | Income/expenses, budgets, charts      |
| 3   | Recipe Sharing         | Share, search, filter, rate recipes   |
| 4   | Blog Platform          | Markdown posts, comments, tags        |
| 5   | Event Booking          | Listings, seat selection, payments    |
| 6   | E-commerce Catalog     | Products, cart, checkout              |
| 7   | Social Media Dashboard | API integration, metrics              |
| 8   | Chat App               | Real-time messaging                   |
| 9   | Travel Planner         | Itinerary, booking, geolocation       |
| 10  | Survey System          | Create & share polls, charts          |

## 🛠️ Tech Stack

- **Frontend**: Angular 19 (standalone) + Angular Material + Tailwind CSS
- **State Management**: NgRx v18+ Signals + Angular Services hybrid
- **Authentication**: Firebase Authentication (Frontend)
- **Backend**: NestJS API (WIP for Firebase token verification)
- **Testing**: Jest (unit testing)
- **CI/CD**: GitHub Actions
- **Package Manager**: Bun
- **Linting & Formatting**: ESLint + Prettier
- **Git Hooks**: Husky + lint-staged
- **Realtime**: Planned Firebase (Firestore), NestJS WebSockets (optional)

## ⚙️ Setup & Usage

### 1. Install Dependencies

```bash
bun install
```

### 2. Run Application (Dev)

```bash
bun run start
```

### 3. Run Application (Prod)

```bash
bun run start:prod
```

### 4. Build Application (Dev)

```bash
bun run build
```

### 5. Build Application (Prod)

```bash
bun run build:prod
```

### 6. Build Application Watch Mode (Dev)

```bash
bun run build:watch
```

### 7. Build Application Watch Mode (Prod)

```bash
bun run build:watch:prod
```

### 8. Format Code

```bash
bun run format
```

### 9. Check Code Formatting

```bash
bun run format:check
```

### 10. Lint Code

```bash
bun run lint
```

### 11. Check Code Linting

```bash
bun run lint:check
```

### 12. Run Tests

```bash
bun run test
```

### 13. Run Tests (Watch Mode)

```bash
bun run test:watch
```

### 14. Run Tests (Coverage Report)

```bash
bun run test:coverage
```

### 15. Run Tests (CI)

```bash
bun run test:ci
```

### 16. Generate Docs

```bash
bun run docs
```

### 17. Generate and Run Docs

```bash
bun run docs:serve
```

## 🧩 Folder Structure

```
src/
├── app/               # Main application shell
│   ├── features/      # Modular feature apps
│   ├── store/         # NgRx global store
│   ├── core/          # Singleton services, guards
│   └── shared/        # Shared components
├── assets/            # Static assets
├── environments/      # Environment configs
public/                # Static public files
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request 🚀

## 📄 License

MIT License

## 🔗 Repository

[Productivity Hub — GitHub Repo](https://github.com/lucas9005/productivity-hub)
