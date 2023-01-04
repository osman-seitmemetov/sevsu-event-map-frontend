import {IFoundingTypeFields} from "@/models/form";
import {IFoundingType} from "@/models/IFoundingType";
import {axiosClassic, instance} from "../api/interceptots";


export const FoundingService = {
    async getAll() {
        return await axiosClassic.get<IFoundingType[]>('/v1/founding_type');
    },

    async getById(id: number) {
        return await axiosClassic.get<IFoundingTypeFields>(`/v1/founding_type/${id}`);
    },

    async edit(id: number, data: IFoundingTypeFields) {
        return await instance.put<IFoundingTypeFields>(`/v1/founding_type/${id}`, data)
    },

    async delete(id: number) {
        return await instance.delete<string>(`/v1/founding_type/${id}`);
    },

    async create(data: IFoundingTypeFields) {
        return await instance.post<IFoundingType>(`/v1/founding_type/`, data);
    }
}