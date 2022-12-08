import axios from "axios";
import {ICompetitor} from "@/models/ICompetitor";
import {ICompetitorFields, IEventFields, IEventFieldsClient} from "@/models/form";
import {IEvent} from "@/models/IEvent";
import {convertInputDateToPostgresDate} from "../helpers/date/convertInputDateToPostgresDate";
import {separateBySemicolons} from "@/utils/string/separateBySemicolons";


export const CompetitorService = {
    async getAll() {
        return await axios.get<ICompetitor[]>('https://event-map-django.onrender.com/api/v1/competitor');
    },

    async getById(id: number) {
        return await axios.get<ICompetitorFields>(`https://event-map-django.onrender.com/api/v1/competitor/${id}`);
    },

    async create(data: ICompetitorFields) {
        return await axios.post<ICompetitor>(`https://event-map-django.onrender.com/api/v1/competitor/`, {
            ...data, code: Number(data.code)
        });
    },

    async edit(id: number, data: ICompetitorFields) {
        return await axios.put<ICompetitor>(`https://event-map-django.onrender.com/api/v1/competitor/${id}`, {
            ...data, code: Number(data.code)
        });
    },

    async delete(id: number) {
        return await axios.delete<string>(`https://event-map-django.onrender.com/api/v1/competitor/${id}`);
    },
}