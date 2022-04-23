import { combineReducers, compose, createStore, PreloadedState } from 'redux';
import { testReducer } from './reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  test: testReducer,
});

const configureStore = (preloadedState: PreloadedState<RootStateType>) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(),
);

export const store = configureStore({});

export type RootStateType = ReturnType<typeof rootReducer>
