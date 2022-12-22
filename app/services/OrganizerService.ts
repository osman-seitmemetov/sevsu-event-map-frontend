import axios from "axios";
import {IOrganizerLevel} from "@/models/organizer";
import {IOrganizer} from "@/models/IOrganizer";
import {IOrganizerFields} from "@/models/form";


export const OrganizerService = {
    async getAll() {
        return await axios.get<IOrganizer[]>('https://event-map-django.onrender.com/api/v1/organizer/');
    },

    async getById(organizerId: string) {
        return await axios.get<IOrganizerFields>(`https://event-map-django.onrender.com/api/v1/organizer/${organizerId}`);
    },

    async create(data: IOrganizerFields) {
        return await axios.post<IOrganizer>('https://event-map-django.onrender.com/api/v1/organizer/', data);
    },

    async getOrganizerLevels() {
        return await axios.get<IOrganizerLevel[]>('https://event-map-django.onrender.com/api/v1/organizer_level/');
    },

    async edit(organizerId: string, data: IOrganizerFields) {
        return await axios.put<IOrganizerFields>(`https://event-map-django.onrender.com/api/v1/organizer/${organizerId}`,{
            ...data, level: Number(data.level)
        });
    },

    async delete(id: string) {
        return await axios.delete<string>(`https://event-map-django.onrender.com/api/v1/organizer/${id}`);
    }
}