import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  carsDetails: null, 
  isLoading: false,  
  isError: false,    
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCarsDetailsStart(state) {
      state.isLoading = true;
      state.isError = false;
    },
    fetchCarsDetailsSuccess(state, action) {
      state.isLoading = false;
      state.carsDetails = action.payload;
    },
    fetchCarsDetailsFailure(state) {
      state.isLoading = false;
      state.isError = true;
    },
    clearCarsDetails(state) {
      state.carsDetails = null;
      state.isLoading = false;
      state.isError = false;
    },
  },
});

export const {
  fetchCarsDetailsStart,
  fetchCarsDetailsSuccess,
  fetchCarsDetailsFailure,
  clearCarsDetails,
} = carsSlice.actions;

export const carsReducer = carsSlice.reducer;
