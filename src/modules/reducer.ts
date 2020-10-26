import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Gender } from "./types";

type LoginState = {
  name: string;
  email: string;
  password: string;
  country: string;
  gender: Gender | null;
};

const initialState: LoginState = {
  name: "",
  email: "",
  password: "",
  country: "",
  gender: null,
};

type SetNameAction = PayloadAction<string>;
type SetEmailAction = PayloadAction<string>;
type SetPasswordAction = PayloadAction<string>;
type SetCountryAction = PayloadAction<string>;
type SetGenderAction = PayloadAction<Gender>;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setName: (state, action: SetNameAction) => ({
      ...state,
      name: action.payload,
    }),
    setEmail: (state, action: SetEmailAction) => ({
      ...state,
      name: action.payload,
    }),
    setPassword: (state, action: SetPasswordAction) => ({
      ...state,
      name: action.payload,
    }),
    setCountry: (state, action: SetCountryAction) => ({
      ...state,
      name: action.payload,
    }),
    setGender: (state, action: SetGenderAction) => ({
      ...state,
      name: action.payload,
    }),
  },
});
