import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestCarsDetailsById} from "../../services/api.js";

export const apiRequestCarDetailsById = createAsyncThunk(
  "productDetaisl/get",
  async (carId, thunkApi) => {
    try {
      const data = await requestCarsDetailsById(carId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
