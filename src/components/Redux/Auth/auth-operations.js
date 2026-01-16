import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://curly-halibut-67vx99gw6q625wp-3020.app.github.dev/api';

const errorNotify = (error) => toast.error(error);

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    errorNotify(error.response.data.message.details[0].message);
  }
});

const login = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/auth/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    toast.error('Wrong password or username entered, please try again');
  }
});

const logOut = createAsyncThunk('auth/logout', async id => {
  try {
    await axios.post('auth/users/logout', id);
    token.unset();
  } catch (error) {
    errorNotify();
  }
});

const getCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkApi) => {
  const state = thunkApi.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkApi.rejectWithValue();
  }

  token.set(persistedToken);
  try {
    const { data } = await axios.get('/auth/users/current');
    console.log(data);

    return data;
  } catch (error) {
    errorNotify();
  }
});

export { register, login, logOut, getCurrentUser };
