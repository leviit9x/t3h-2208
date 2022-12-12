import thunk from "redux-thunk"; // no changes here 😀
import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export const store = createStore(rootReducers, applyMiddleware(thunk));

// { type: 'getProduct' } => dispatch lan 1

// middleware / call api/getProduct => fetch data

// { type: 'getProduct', payload: data } => dispatch lan 2

// redux thunk

// redux saga
