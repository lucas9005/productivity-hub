# 🚀 Productivity Hub — Frontend Architecture Overview

```mermaid
graph LR;
  subgraph Project Shared Libraries
    SharedLibs[Shared Libraries]
    SharedLibs --> Models["@models"]
    SharedLibs --> APIContracts["@api-contracts"]
  end
  SharedLibs -.- FrontendApp[Frontend Application]

  FrontendApp --> SharedLayer[Shared Layer]
  FrontendApp --> CorePages[Core Pages]
  FrontendApp --> FeaturesModules[Features Modules]

  subgraph Frontend Features Modules
    FeaturesModules --> TasksFeature[Tasks Feature]
    FeaturesModules --> FinanceFeature[Finance Feature]
    FeaturesModules --> RecipesFeature[Recipes Feature]
    FeaturesModules --> TravelFeature[Travel Feature]
    FeaturesModules --> ChatFeature[Chat Feature]

    TasksFeature --> TasksDashboard[Tasks Dashboard]
    FinanceFeature --> FinanceDashboard[Finance Dashboard]
    RecipesFeature --> RecipesDashboard[Recipes Dashboard]
    TravelFeature --> TravelDashboard[Travel Dashboard]
    ChatFeature --> ChatDashboard[Chat Dashboard]
  end

  subgraph Frontend Core Pages
    CorePages --> Landing[Landing]
    CorePages --> Login[Login]
    CorePages --> MainDashboard[Main Dashboard]
  end

  subgraph Frontend Shared Layer
    SharedLayer --> UIComponents[Reusable UI Components]
    SharedLayer --> HTTPServices[HTTP Services]
    SharedLayer --> AuthServices[Authentication Services]
  end
```

## 📖 Notes

- **Project Shared Libraries:** Global TypeScript libraries reused across frontend and backend:
  - `@models`: Core business entities and shared types
  - `@api-contracts`: DTOs and request/response schemas for API communication
- **Frontend Application:** Root Angular app managing layout, routing, and module integration.
- **Shared Layer:** Core services and reusable UI components available across all pages and features.
- **Core Pages:** Application entry points and key shell views (e.g., landing, login, dashboard).
- **Feature Modules:** Standalone, lazy-loaded modules for individual app areas (e.g., tasks, finance, recipes, travel, chat).

This overview defines the frontend structure to support scalable module development, shared logic, and maintainable UI composition.
