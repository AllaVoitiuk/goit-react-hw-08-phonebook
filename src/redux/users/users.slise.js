import { createSlice } from '@reduxjs/toolkit';
import { registerUser, logIn , logOut} from './users.operations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
     },
     extraReducers: {
        [registerUser.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        },
        [logIn.fulfilled](state, action) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        },
        [logOut.fulfilled](state) {
          state.user = { name: null, email: null };
          state.token = null;
          state.isLoggedIn = false;
        },
        
      },
    });

    // export const userReducer = persistReducer({
    //   key: 'auth',
    //   storage,
    // }, userSlice.reducer);
    
    export const userReducer = userSlice.reducer;

 