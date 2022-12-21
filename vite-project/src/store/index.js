import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { mergeReducerService, productApi } from "../services";
import { productReducer } from "./features";
import { logger } from "./middlewares";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  product: productReducer,
  ...mergeReducerService,
});

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    // transforms: [SetTransform],
  },
  rootReducer
);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(productApi.middleware)
      .concat(logger),
});

export const persistor = persistStore(store);
