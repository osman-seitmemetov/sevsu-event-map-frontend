import {IUser} from "@/models/IUser";

export const saveToStorage = (user: IUser) => {
    localStorage.setItem('user', JSON.stringify(user));
}