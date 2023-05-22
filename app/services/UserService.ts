import {axiosClassic, instance} from "@/api/interceptots";
import {IUser} from "@/models/IUser";


export const UserService = {
    async getAll() {
        return await instance.get<IUser[]>('/user/list');
    },

    async getById(userId: string) {
        return await instance.get<IUser>(`/user/about/${userId}`);
    },

    async grand(userId: number) {
        return await instance.put<{ id: number }>(`/user/grand/${userId}`);
    },

    async degrand(userId: number) {
        return await instance.put<{ id: number }>(`/user/degrand/${userId}`, );
    }
}