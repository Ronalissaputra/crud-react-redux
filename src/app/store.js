import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import darkModeReducer from "../features/darkSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    darkMode: darkModeReducer,
  },
});
