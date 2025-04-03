/// <reference types="jest" />
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import '@jest/globals';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStore } from './store/app.store';
import { AsyncPipe } from '@angular/common';

/**
 * @description Test suite for the AppComponent.
 * Tests the component's creation, title property, and UI elements.
 */
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let mockAppStore: jest.Mocked<AppStore>;

  beforeEach(async () => {
    mockAppStore = {
      initializeApp: jest.fn(),
    } as unknown as jest.Mocked<AppStore>;

    await TestBed.configureTestingModule({
      imports: [AppComponent, MatButtonModule, AsyncPipe],
      providers: [{ provide: AppStore, useValue: mockAppStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * @description Tests if the component can be created
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**
   * @description Tests if the component has the correct title
   */
  it('should have the productivity-hub title', () => {
    expect(component.title).toEqual('productivity-hub');
  });

  /**
   * @description Tests if the component renders Tailwind and Material UI elements correctly
   */
  it('should render Tailwind and Material UI elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[mat-raised-button]')).toBeTruthy();
    expect(compiled.querySelector('.text-xl')).toBeTruthy();
  });

  it('should initialize the app on init', () => {
    component.ngOnInit();
    expect(mockAppStore.initializeApp).toHaveBeenCalled();
  });
});
