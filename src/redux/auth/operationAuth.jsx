import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../services/Api/auth-service";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {

            const response = await api.signup(data);
            return response;
        } catch (error) {
            console.log(error)
            rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.login(data);
            return response;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await api.logout();
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const current = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { auth } = getState();
            const { data } = await api.currentUser(auth.token);
        return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
        
)