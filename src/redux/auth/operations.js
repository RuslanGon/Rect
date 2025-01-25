import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const instance = axios.create({
    // baseURL: 'https://connections-api.goit.global/docs/#/User/post_users_signup',
    baseURL: "https://connections-api.goit.global",
    // headers: {
    //   Authorization: `Bearer ${localStorage.getItem('token')}`
    // }
})

export const setToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const cleanToken = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', formData);
      setToken(data.token)
      return data; 
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const apiLogin = createAsyncThunk(
    "auth/login",
    async (formData, thunkApi) => {
      try {
        const { data } = await axios.post('/users/login', formData);
        setToken(data.token)
        return data; 
      } catch (error) {
        return thunkApi.rejectWithValue(
          error.response?.data?.message || error.message
        );
      }
    }
  );

  export const apiRefreshUser = createAsyncThunk(
    "auth/refresh",
    async (_, thunkApi) => {
      try {
        const state = thunkApi.getState()
        const token = state.auth.token;
        setToken(token);

        const {data} = await instance.get('/users/current');
        return data;
      } catch (error) {
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );
