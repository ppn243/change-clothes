import { configureStore } from "@reduxjs/toolkit";
import changeClothesReducer from "./redux/changeClothesReducer";
export const store = configureStore({
  reducer: {
    changeClothesReducer: changeClothesReducer,
  },
});
