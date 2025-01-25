import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
    isSignedIn: false,
    userData: null,
    token: null,
    isLoading: false,  
    isError: false
};

const authSlice = createSlice({
    name: "auth",
    initialState: INITAL_STATE,
   
});

export const authReducer = authSlice.reducer;