import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';

import * as api from "../../services/Api/auth-service";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.signup(data);
            toast.success(`Welcome ${response.user.name}`);
            return response;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            toast.error(`This account already exists`);
            rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.login(data);
            toast.success(`Welcome ${response.user.name}`, {autoClose: 5000, closeOnClick: true,});
            return response;
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            toast.error(`Sorry, something is wrong:(`);
            rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            const  data  = await api.logout();
            return data;
        } catch ( response ) {
            const error = {
                status: response.status,
                message: response.data.message
            }
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
        } catch ({response}) {
            const error = {
                status: response.status,
                message: response.data.message
            }
            rejectWithValue(error);
        }
    }
        
)