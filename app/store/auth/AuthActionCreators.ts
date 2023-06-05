import {LoginResponse} from "@/models/response/LoginResponse";
import {AuthService} from "@/services/AuthService";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginFields, IRegistrationFields} from "@/models/form";
import {axiosClassic, instance} from "@/api/interceptots";
import {saveToStorage} from "@/helpers/auth/saveToStorage";
import {RegistrationResponse} from "@/models/response/RegistrationResponse";
import {IUser} from "@/models/IUser";
import {AxiosError} from 'axios';
import {useErrorHandler} from "@/hooks/useErrorHandler";

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
        if (error instanceof AxiosError) {
            if (error?.response?.data.detail) {
                useErrorHandler(
                    'Ошибка авторизации',
                    error?.response?.data.detail === 'No active account found with the given credentials'
                        ? 'Неверный логин или пароль.'
                        : error?.response?.data.detail
                );
            }
        } else {
            console.log(error);
        }
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
        if (error instanceof AxiosError) {
            if (error?.response?.data.username) {
                useErrorHandler(
                    'Ошибка в поле "Логин"',
                    error?.response?.data.username[0] === 'A user with that username already exists.'
                        ? 'Данный логин уже занят другим пользователем.'
                        : error?.response?.data.username[0]
                );
            }
            if (error?.response?.data.first_name) {
                useErrorHandler('Ошибка в поле "Имя"', error?.response?.data.first_name[0]);
            }
            if (error?.response?.data.last_name) {
                useErrorHandler('Ошибка в поле "Фамилия"', error?.response?.data.last_name[0]);
            }
            if (error?.response?.data.email) {
                useErrorHandler('Ошибка в поле "Email"', error?.response?.data.email[0]);
            }
            if (error?.response?.data.password) {
                useErrorHandler(
                    'Ошибка в поле "Пароль"',
                    error?.response?.data.password[0] === 'This password is too short. It must contain at least 8 characters.'
                        ? 'Пароль слишком короткий. Он должен содержать не менее 8 символов.'
                        : error?.response?.data.password[0] === 'The password is too similar to the username.'
                            ? 'Пароль не должен быть слишком похожим на логин.'
                            : error?.response?.data.password[0] === 'This password is too common.'
                                ? 'Пароль слишком простой.'
                                : error?.response?.data.password[0] === 'The password is too similar to the first name.'
                                    ? 'Пароль не должен быть слишком похожим на имя.'
                                    : error?.response?.data.password[0] === 'The password is too similar to the last name.'
                                        ? 'Пароль не должен быть слишком похожим на фамилию.'
                                        : error?.response?.data.password[0]
                );
            }
            if (error?.response?.data.password_confirm) {
                useErrorHandler(
                    'Ошибка в поле "Подтвердите пароль"',
                    error?.response?.data.password_confirm[0] === 'Passwords don\'t match'
                        ? 'Пароли не совпадают.'
                        : error?.response?.data.password_confirm[0]
                );
            }
        } else {
            console.log(error);
        }
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