import { configureStore, combineReducers } from "@reduxjs/toolkit";
import message from "./slices/messageSlice";

const rootReducer = combineReducers({
  message,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
}

export const store = makeStore();

export type RootState = typeof rootReducer;

export type AppDispatch = typeof store.dispatch;
