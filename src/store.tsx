import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { loginSlice } from "./modules/";

export const reducer = combineReducers({
  login: loginSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type CurrencyState = ReturnType<typeof reducer>;
