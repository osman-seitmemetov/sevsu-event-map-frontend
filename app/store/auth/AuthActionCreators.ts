import {LoginResponse} from "@/models/response/LoginResponse";
import {AuthService} from "@/services/AuthService";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILogin} from "@/models/form";
import {axiosClassic} from "../../api/interceptots";
import {saveToStorage} from "../../helpers/auth/saveToStorage";


export const login = createAsyncThunk<LoginResponse, ILogin>('auth/login', async (
    {username, password}, thunkAPI
) => {
    try {
        const response = await AuthService.login(username, password);

        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await AuthService.logout();
})

export const checkAuth = createAsyncThunk<LoginResponse>('auth/check', async (
    _, thunkAPI
) => {
    try {
        const response = await axiosClassic.get<LoginResponse>(`/user/refresh`);
        localStorage.setItem('token', response.data.access);
        if (response.data.access) {
            saveToStorage(response.data)
        }
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})