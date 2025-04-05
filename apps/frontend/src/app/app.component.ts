import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AppStore } from './store/app.store';

/**
 * @description Root component of the Productivity Hub application.
 * Serves as the main application shell and demonstrates the integration of Tailwind CSS and Angular Material.
 *
 * @usageNotes
 * The component should be used as the root component of the application:
 * ```html
 * <app-root></app-root>
 * ```
 *
 * Example of template usage:
 * ```html
 * <div class="app-container">
 *   <header>
 *     <button (click)="initializeApp()">Initialize App</button>
 *   </header>
 *   <main>
 *     <router-outlet></router-outlet>
 *   </main>
 * </div>
 * ```
 *
 * @implements OnInit
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  /**
   * @description The title of the application
   * Used in the application header and browser title
   * @default 'productivity-hub'
   */
  title = 'productivity-hub';

  /**
   * @description Creates an instance of AppComponent
   * Initializes the application state through the AppStore
   * @param appStore The application store service for state management
   *
   * @example
   * ```typescript
   * // Component instantiation (handled by Angular DI)
   * const component = new AppComponent(appStore);
   * ```
   */
  constructor(private appStore: AppStore) {}

  /**
   * @description Lifecycle hook that is called after data-bound properties are initialized
   * Initializes the application state through the AppStore
   *
   * @example
   * ```typescript
   * // Lifecycle hook (called by Angular)
   * ngOnInit() {
   *   this.appStore.initializeApp();
   * }
   * ```
   */
  ngOnInit(): void {
    this.appStore.initializeApp();
  }
}
