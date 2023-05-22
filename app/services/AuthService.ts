import axios, {AxiosResponse} from "axios";
import {LoginResponse} from "@/models/response/LoginResponse";
import {axiosClassic, instance} from "@/api/interceptots";
import {saveTokenToLocalStorage} from "@/utils/saveTokenToLocalStorage";
import {RegistrationResponse} from "@/models/response/RegistrationResponse";
import {API_SERVER} from "@/config/API";
import {IUser} from "@/models/IUser";


export const AuthService = {
    async login(username: string, password: string): Promise<LoginResponse> {
        const response = await axiosClassic.post<{access: string, refresh: string}>('/token/', {username, password});
        if (response.data.access) saveTokenToLocalStorage(response.data.access);

        const user = await instance.get<IUser>('/user/info');

        return {...response.data, user: user.data};
    },

    async registration(
        username: string, firstName: string, lastName: string, email: string, password: string,
        confirmPassword: string, eventIds: number[]
    ): Promise<{access: string, refresh: string, user: IUser}> {
        const user = await axios.post<IUser>(`${API_SERVER}/accounts/register/`, {
            username, first_name: firstName, last_name: lastName, email, password, password_confirm: confirmPassword
        });

        const tokens = await axiosClassic.post<{access: string, refresh: string}>('/token/', {username, password});
        if(tokens.data.access) saveTokenToLocalStorage(tokens.data.access);

        await instance.post('/v1/favorite_list/', {user: user.data.id, events: eventIds});

        return {...tokens.data, user: user.data};
    },

    // async logout(): Promise<void> {
    //     localStorage.removeItem('token');
    //     return axiosClassic.post('/token/refresh/');
    // }
}