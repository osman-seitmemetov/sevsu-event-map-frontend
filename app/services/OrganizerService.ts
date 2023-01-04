import {IOrganizerLevel} from "@/models/organizer";
import {IOrganizer} from "@/models/IOrganizer";
import {IOrganizerFields} from "@/models/form";
import {axiosClassic, instance} from "../api/interceptots";


export const OrganizerService = {
    async getAll() {
        return await axiosClassic.get<IOrganizer[]>('/v1/organizer/');
    },

    async getById(organizerId: string) {
        return await axiosClassic.get<IOrganizerFields>(`/v1/organizer/${organizerId}`);
    },

    async create(data: IOrganizerFields) {
        return await instance.post<IOrganizer>('/v1/organizer/', data);
    },

    async getOrganizerLevels() {
        return await axiosClassic.get<IOrganizerLevel[]>('/v1/organizer_level/');
    },

    async edit(organizerId: string, data: IOrganizerFields) {
        return await instance.put<IOrganizerFields>(`/v1/organizer/${organizerId}`, {
            ...data, level: Number(data.level)
        });
    },

    async delete(id: string) {
        return await instance.delete<string>(`/v1/organizer/${id}`);
    }
}