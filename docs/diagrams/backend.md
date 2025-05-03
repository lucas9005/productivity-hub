# 🚀 Productivity Hub — Backend Architecture Overview

```mermaid
graph LR;
  subgraph Project Shared Libraries
    SharedLibs[Shared Libraries]
    SharedLibs --> Models["@models"]
    SharedLibs --> APIContracts["@api-contracts"]
  end
  SharedLibs -.- BackendApp[Backend Application]

  BackendApp --> SharedModule[Shared Module]
  BackendApp --> CoreModule[Core Module]
  BackendApp --> FeaturesModules[Features Modules]

  subgraph Backend Features Modules
    FeaturesModules --> TasksModule[Tasks Module]
    FeaturesModules --> FinanceModule[Finance Module]
    FeaturesModules --> RecipesModule[Recipes Module]
    FeaturesModules --> TravelModule[Travel Module]
    FeaturesModules --> ChatModule[Chat Module]

    TasksModule --> TasksController[Tasks Controller]
    TasksModule --> TasksService[Tasks Service]
    FinanceModule --> FinanceController[Finance Controller]
    FinanceModule --> FinanceService[Finance Service]
    RecipesModule --> RecipesController[Recipes Controller]
    RecipesModule --> RecipesService[Recipes Service]
    TravelModule --> TravelController[Travel Controller]
    TravelModule --> TravelService[Travel Service]
    ChatModule --> ChatGateway[Chat WebSocket Gateway]
    ChatModule --> ChatService[Chat Service]
  end

  subgraph Backend Core Module
    CoreModule --> ConfigService[Config Service]
    CoreModule --> LoggerService[Logger Service]
    CoreModule --> GlobalGuards[Auth Guards and Exception Filters]
  end

  subgraph Backend Shared Module
    SharedModule --> Pipes[Pipes]
    SharedModule --> Validators[Validators]
  end
```

## 📖 Notes

- **Project Shared Libraries:** Global TypeScript libraries reused across frontend and backend:
  - `@models`: Core business entities and shared types
  - `@api-contracts`: DTOs and request/response schemas for API communication
- **Backend Application:** Root NestJS server instance orchestrating all modules.
- **Shared Module:** Common utilities (e.g., pipes, validators) accessible across features.
- **Core Module:** Global singleton providers (e.g., config, logger, guards).
- **Feature Modules:** Domain-specific NestJS modules (tasks, finance, recipes, travel, chat) following Controller ➔ Service clean separation.
- **Chat Module:** Uses WebSocket Gateway to enable real-time messaging services.

This overview defines the modular backend architecture optimized for scalability, maintainability, and clean separation of concerns.
