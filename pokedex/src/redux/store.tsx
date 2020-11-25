import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootReducer";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
      compose
  )
);
