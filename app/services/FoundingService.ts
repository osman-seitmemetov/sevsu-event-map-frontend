import axios from "axios";
import {IFoundingTypeFields} from "@/models/form";
import {IFoundingType} from "@/models/IFoundingType";


export const FoundingService = {
    async getAll() {
        return await axios.get<IFoundingType[]>('https://event-map-django.onrender.com/api/v1/founding_type');
    },

    async getById(id: number) {
        return await axios.get<IFoundingTypeFields>(`https://event-map-django.onrender.com/api/v1/founding_type/${id}`);
    },

    async edit(id: number, data: IFoundingTypeFields) {
        return await axios.put<IFoundingTypeFields>(`https://event-map-django.onrender.com/api/v1/founding_type/${id}`, data)
    },

    async delete(id: number) {
        return await axios.delete<string>(`https://event-map-django.onrender.com/api/v1/founding_type/${id}`);
    },

    async create(data: IFoundingTypeFields) {
        return await axios.post<IFoundingType>(`https://event-map-django.onrender.com/api/v1/founding_type/`, data);
    }
}