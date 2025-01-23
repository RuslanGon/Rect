import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestProductDetailsById } from "../../services/api.js";

export const apiRequestProductDetailsById = createAsyncThunk(
  "productDetaisl/get",
  async (productId, thunkApi) => {
    try {
      const data = await requestProductDetailsById(productId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
