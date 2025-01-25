import { createSlice } from "@reduxjs/toolkit";
import { apiLogOut, apiLogin, apiRegister } from "./operations.js";

const INITAL_STATE = {
    isSignedIn: true,
    userData: null,
    token: null,
    isLoading: false,  
    isError: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITAL_STATE,
    extraReducers: (builder) =>
        builder
          .addCase(apiRegister.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiRegister.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true
            state.userData = action.payload.user
            state.token = action.payload.token
          })
          .addCase(apiRegister.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })


          .addCase(apiLogin.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSignedIn = true
            state.userData = action.payload.user
            state.token = action.payload.token
          })
          .addCase(apiLogin.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })


          .addCase(apiLogOut.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(apiLogOut.fulfilled, () => {
          return INITAL_STATE
          })
          .addCase(apiLogOut.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
          })
   
});

export const authReducer = authSlice.reducer;