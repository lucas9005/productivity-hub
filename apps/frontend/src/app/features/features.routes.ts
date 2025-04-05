import { Routes } from '@angular/router';

/**
 * @description Base routes configuration for feature modules.
 * Each feature module will have its own route configuration that will be lazy loaded.
 */
export const FEATURE_ROUTES: Routes = [
  // Feature routes will be added here as they are implemented
  // Example:
  // {
  //   path: 'task-manager',
  //   loadChildren: () => import('./task-manager/task-manager.routes').then(m => m.TASK_MANAGER_ROUTES)
  // }
];
