import {AxiosResponse} from "axios";
import {LoginResponse} from "@/models/response/LoginResponse";
import {axiosClassic} from "../api/interceptots";
import {saveTokenToLocalStorage} from "@/utils/saveTokenToLocalStorage";


export const AuthService =  {
    async login(username: string, password: string): Promise<AxiosResponse<LoginResponse>> {
        const response = await axiosClassic.post<LoginResponse>('https://event-map-django.onrender.com/api/token/', {username, password});
        if(response.data.access) saveTokenToLocalStorage(response.data.access);
        return response;
    },

    async logout(): Promise<void> {
        localStorage.removeItem('token');
        return axiosClassic.post('https://event-map-django.onrender.com/api/token/refresh/');
    }
}