import {LoginResponse} from "@/models/response/LoginResponse";
import {AuthService} from "@/services/AuthService";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginFields, IRegistrationFields} from "@/models/form";
import {axiosClassic, instance} from "@/api/interceptots";
import {saveToStorage} from "@/helpers/auth/saveToStorage";
import {RegistrationResponse} from "@/models/response/RegistrationResponse";
import {IUser} from "@/models/IUser";

interface IRegistrationFieldsExtend extends IRegistrationFields {
    eventIds: number[]
}

export const login = createAsyncThunk<LoginResponse, ILoginFields>('auth/login', async (
    {username, password}, thunkAPI
) => {
    try {
        const response = await AuthService.login(username, password);

        if (response) localStorage.setItem('refresh', response.refresh);

        return response;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

export const registration = createAsyncThunk<RegistrationResponse, IRegistrationFieldsExtend>('auth/registration', async (
    {
        username,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        eventIds
    }, thunkAPI
) => {
    try {
        const response = await AuthService.registration(
            username, firstName, lastName, email,
            password, confirmPassword, eventIds
        );

        if (response) localStorage.setItem('refresh', response.refresh);

        return response;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const logout = createAsyncThunk('auth/logout', async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');
    localStorage.removeItem('user');
})

export const checkAuth = createAsyncThunk<LoginResponse>('auth/check', async (
    _, thunkAPI
) => {
    try {
        const response = await axiosClassic.post<LoginResponse>(`/token/refresh/`, {refresh: localStorage.getItem('refresh')});
        localStorage.setItem('token', response.data.access);

        const user = await instance.get<IUser>('/user/info');

        if (user) {
            saveToStorage(user.data)
        }

        return {...response.data, user: user.data};
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})