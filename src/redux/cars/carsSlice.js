import { createSlice } from "@reduxjs/toolkit";
import { apiRequestCarDetailsById } from "./operations.js";

const INITIAL_STATE = {
  carsDetails: null, 
  isLoading: false,  
  isError: false,    
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiRequestCarDetailsById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiRequestCarDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsDetails = action.payload;
      })
      .addCase(apiRequestCarDetailsById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
});

export const {
  fetchCarsDetailsStart,
  fetchCarsDetailsSuccess,
  fetchCarsDetailsFailure,
  clearCarsDetails,
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
