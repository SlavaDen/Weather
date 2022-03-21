import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./root-reducer";
import * as api from "api/";


const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk.withExtraArgument({api})))
)

export {store};
