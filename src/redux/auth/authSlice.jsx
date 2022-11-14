import { createSlice } from "@reduxjs/toolkit";
import { signup } from "./operationAuth";
import { login } from "./operationAuth";
import { logout } from "./operationAuth"; 
import { current } from "./operationAuth";

const initialState = {
    token: '',
    isLogin: false,
    userName: '',
    loading: false,
    error: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [signup.pending]: (store) => {
            store.isLogin = false;
            store.loading = true;
        },
        [signup.fulfilled]: (store, { payload }) => {
            store.isLogin = true;
            store.loading = false;
            store.userName = payload.name;
            store.token = payload.token;
        },
        [signup.rejected]: (store, { payload }) => {
            store.isLogin = false;
            store.loading = false;
            store.error = payload.error;
        },
        [login.pending]: (store) => {
            store.isLogin = false;
            store.loading = true;
            store.error = '';
        },
        [login.fulfilled]: (store, { payload }) => {
            store.isLogin = true;
            store.loading = false;
            store.userName = payload.user.name;
            store.token = payload.token;
        },
        [login.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload.error;
        },
         [logout.pending]: (store) => {
            store.isLogin = false;
            store.loading = true;
            store.error = '';
        },
        [logout.fulfilled]: (store) => {
            store.isLogin = false;
            store.loading = false;
            store.userName = '';
            store.token = '';
        },
        [logout.rejected]: (store, { payload }) => {
            store.loading = false;
            store.error = payload.error;
        },
        [current.pending]: (store) => {
            store.isLogin = false;
            store.loading = true;
            store.error = '';
        },
        [current.fulfilled]: (store, { payload }) => {
            console.log('payload', payload);
            store.isLogin = true;
            store.loading = false;
            store.userName = payload.name;
        },
        [current.rejected]: (store, { payload }) => {
            store.loading = false;
            store.isLogin = false;
            store.error = payload.error;
        },
    }
});

export default authSlice.reducer;
