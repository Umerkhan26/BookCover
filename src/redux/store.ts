import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/Reducer";

export const store = configureStore({
  reducer: {
    example: exampleReducer, // Add your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
