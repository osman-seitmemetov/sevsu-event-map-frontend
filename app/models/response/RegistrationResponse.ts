import {IUser} from "@/models/IUser";

export interface RegistrationResponse {
    access: string,
    refresh: string,
    user: IUser
}