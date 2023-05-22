import {IUser} from "@/models/IUser";

export interface LoginResponse {
    access: string,
    refresh: string,
    user: IUser
}