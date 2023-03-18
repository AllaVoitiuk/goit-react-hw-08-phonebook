import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const registerUser = createAsyncThunk(
  'user/signup',
    async (credentials, thunkAPI) => {
        try {
          console.log(credentials);
          const {data}  = await axios.post('/users/signup', credentials);

          console.log(data);
          setAuthHeader(data.token);

          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
      }
  );

  export const logIn = createAsyncThunk(
    'user/login',
    async (credentials, thunkAPI) => {
      try {
        const respons = await axios.post('/users/login', credentials);
        
        console.log(respons.data);
        setAuthHeader(respons.data.token);
        return respons.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logOut = createAsyncThunk('user/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');

      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });