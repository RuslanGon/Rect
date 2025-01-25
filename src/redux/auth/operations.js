import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://connections-api.goit.global/docs/'
})

export const setToken = (token) => {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const cleanToken = () => {
instance.defaults.headers.common.Authorization = ''
}

export const apiReqister = createAsyncThunk(
    "auth/register",
    async (formDate, thunkApi) => {
      try {
        const {data} = await instance.post('/users/signup', formDate);
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );