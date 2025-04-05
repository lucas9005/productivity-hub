import { Injectable } from '@angular/core';
import { createAction, createSelector, props } from '@ngrx/store';
import { createFeature, createReducer, on, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * @description Interface defining the application's global state structure managed by NgRx store.
 * @property isInitialized - Flag indicating application initialization status
 * @property version - Application version string
 *
 * @example
 * ```typescript
 * // Access state through AppStore service
 * constructor(private appStore: AppStore) {
 *   this.version$ = this.appStore.version$;
 * }
 * ```
 */
export interface AppState {
  /** Flag indicating whether the application has completed initialization */
  isInitialized: boolean;

  /** Application version string (MAJOR.MINOR.PATCH) */
  version: string;
}

export const initialState: AppState = {
  isInitialized: false,
  version: '1.0.0',
};

export const initializeApp = createAction('[App] Initialize', props<{ isInitialized: boolean }>());

export const appFeature = createFeature({
  name: 'app',
  reducer: createReducer(
    initialState,
    on(initializeApp, (state, { isInitialized }) => ({ ...state, isInitialized }))
  ),
});

export const selectAppState = (state: { app: AppState }) => state.app;
export const selectIsInitialized = createSelector(
  selectAppState,
  (state: AppState) => state.isInitialized
);
export const selectVersion = createSelector(selectAppState, (state: AppState) => state.version);

/**
 * @description Injectable service for managing application state through NgRx.
 * Provides observables and methods for initialization state.
 *
 * @example
 * ```typescript
 * @Component({
 *   selector: 'app-settings',
 *   template: `
 *     <div>
 *       <button (click)="initializeApp()">Initialize App</button>
 *     </div>
 *   `
 * })
 * export class SettingsComponent {
 *   version$ = this.appStore.version$;
 *
 *   constructor(private appStore: AppStore) {}
 *
 *   initializeApp() {
 *     this.appStore.initializeApp();
 *   }
 * }
 * ```
 */
@Injectable({ providedIn: 'root' })
export class AppStore {
  /** Observable stream indicating if the app has been initialized */
  readonly initialized$: Observable<boolean>;

  /** Observable stream of the app version */
  readonly version$: Observable<string>;

  /**
   * @description Creates an instance of AppStore.
   * Initializes observables from NgRx selectors.
   * @param store - The NgRx Store instance for state management
   */
  constructor(private store: Store) {
    this.initialized$ = this.store.select(appFeature.selectIsInitialized);
    this.version$ = this.store.select(appFeature.selectVersion);
  }

  /** Initializes the application state */
  initializeApp(): void {
    this.store.dispatch(initializeApp({ isInitialized: true }));
  }
}
