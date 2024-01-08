import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// export const register = createAsyncThunk(
//   'auth/register',
//   async (credentials, thunkAPI) => {
//     try {
//       const responce = await axios.post('users/signup', credentials);
//       setAuthHeader(responce.data.token);
//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logIn = createAsyncThunk(
//   'auth/login',
//   async (credentials, thunkAPI) => {
//     try {
//       const responce = await axios.post('users/login', credentials);
//       setAuthHeader(responce.data.token);
//       return responce.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await axios.post('users/logout');
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const responce = await axios.get('/users/current');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('users/logout');
      clearAuthHeader();
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// export const refreshUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, { rejectWithValue }) => {
//     const state = rejectWithValue.getState();
//     const persistedToken = state.auth.token;
//     if (persistedToken === null) {
//       return rejectWithValue('Unable to fetch user');
//     }

//     try {
//       setAuthHeader(persistedToken);
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (e) {
//       return rejectWithValue(e);
//     }
//   }
// );
