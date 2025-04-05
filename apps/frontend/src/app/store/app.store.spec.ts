import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AppStore, appFeature, AppState, initializeApp } from './app.store';
import { of } from 'rxjs';

describe('AppStore', () => {
  let store: AppStore;
  let mockStore: jest.Mocked<Store>;
  const initialState: AppState = {
    isInitialized: false,
    version: '1.0.0',
  };

  beforeEach(() => {
    mockStore = {
      dispatch: jest.fn(),
      select: jest.fn(() => of(initialState)),
    } as unknown as jest.Mocked<Store>;

    TestBed.configureTestingModule({
      providers: [AppStore, { provide: Store, useValue: mockStore }],
    });

    store = TestBed.inject(AppStore);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should update state when initialized', () => {
    store.initializeApp();
    expect(mockStore.dispatch).toHaveBeenCalledWith(initializeApp({ isInitialized: true }));
  });

  describe('Reducer', () => {
    it('should handle initializeApp action', () => {
      const state = appFeature.reducer(initialState, initializeApp({ isInitialized: true }));
      expect(state).toEqual({
        ...initialState,
        isInitialized: true,
      });
    });
  });
});
