# 🚀 Productivity Hub — Frontend Architecture Overview

```mermaid
graph LR;
  subgraph Project Shared Layer
    ProjectSharedLayer[Project Shared Layer]
    ProjectSharedLayer --> ProjectSharedModels[Models]
    ProjectSharedLayer --> ProjectSharedAPIContracts[API Contracts]
  end
  ProjectSharedLayer -.- FrontendApp[Frontend Application]

  FrontendApp --> SharedLayer[Shared Layer]
  FrontendApp --> CoreLayer[Core Layer]
  FrontendApp --> FeatureModules[Features Modules]

  subgraph Feature Modules
    FeatureModules --> TasksFeature[Tasks Feature]
    FeatureModules --> FinanceFeature[Finance Feature]
    FeatureModules --> RecipesFeature[Recipes Feature]
    FeatureModules --> TravelFeature[Travel Feature]
    FeatureModules --> ChatFeature[Chat Feature]

    TasksFeature --> TasksDashboard[Tasks Dashboard]
    FinanceFeature --> FinanceDashboard[Finance Dashboard]
    RecipesFeature --> RecipesDashboard[Recipes Dashboard]
    TravelFeature --> TravelDashboard[Travel Dashboard]
    ChatFeature --> ChatDashboard[Chat Dashboard]
  end

  subgraph Core Layer
    CoreLayer --> FECoreComponents[Components]
    CoreLayer --> FECoreHandlers[Handlers]
    CoreLayer --> FECoreInterceptors[Interceptors]
    CoreLayer --> FECorePages[Pages]
  end

  subgraph Shared Layer
    SharedLayer --> FESharedComponents[Components]
    SharedLayer --> FESharedModels[Models]
    SharedLayer --> FESharedServices[HTTP Services]
  end
```

## 📖 Notes

- **Project Shared Layer:** Global TypeScript layer reused across frontend and backend:
  - `@models`: Core business entities and shared types
  - `@api-contracts`: DTOs and request/response schemas for API communication
- **Frontend Application:** Root Angular app managing layout, routing, and module integration.
- **Shared Layer:** Shared services, models and reusable UI components available across all pages and features.
- **Core Layer:** Core pages, handlers, interceptors and structural components.
- **Feature Modules:** Standalone, lazy-loaded modules for individual app areas (e.g., tasks, finance, recipes, travel, chat).

This overview defines the frontend structure to support scalable module development, shared logic, and maintainable UI composition.
