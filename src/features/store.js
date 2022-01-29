import { createStore } from "@reduxjs/toolkit";
import carReducer from "./carSlice";
export const store = createStore({
  reducer: {
    car: carReducer,
  },
});
