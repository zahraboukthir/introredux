import { createStore } from "redux";
import counterreducer from "../reducer/counterreducer";
export const store = createStore(
  counterreducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
