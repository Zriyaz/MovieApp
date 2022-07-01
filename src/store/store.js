import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesAPI } from "../services/movies";

export const store = configureStore({
  reducer: {
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesAPI.middleware),
});
setupListeners(store.dispatch);
