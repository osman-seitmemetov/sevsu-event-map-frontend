import {createSlice} from "@reduxjs/toolkit";
import {checkAuth, login, logout, registration} from "@/store/auth/AuthActionCreators";
import {IUser} from "@/models/IUser";
import {getStoreLocal} from "@/utils/localStorage";


interface authState {
    user: IUser | null,
    isAuthorized: boolean
    isLoading: boolean
}

const initialState: authState = {
    user: getStoreLocal('user'),
    isAuthorized: false,
    isLoading: false
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, state => {
            state.isLoading = true;
        }).addCase(login.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.user = payload.user;
            state.isAuthorized = true;
        }).addCase(login.rejected, state => {
            state.isLoading = false;
            state.user = null;
            state.isAuthorized = false;
        }).addCase(registration.pending, state => {
            state.isLoading = true;
        }).addCase(registration.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.isAuthorized = true;
            state.user = payload.user;
        }).addCase(registration.rejected, state => {
            state.isLoading = false;
            state.user = null;
            state.isAuthorized = false;
        }).addCase(logout.fulfilled, (state) => {
            state.isLoading = false;
            state.user = null
            state.isAuthorized = false;
        }).addCase(checkAuth.fulfilled, (state, {payload}) => {
            if (localStorage.getItem('token') !== payload.access)
                state.user = payload.user;
            if(payload.access) state.isAuthorized = true;
        })
    }
})

export const {reducer} = authSlice;