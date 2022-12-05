import axios from "axios";
import {IEvent} from "@/models/IEvent";
import {IEventFields, IEventFieldsClient, IEventFieldsServer} from "@/models/form";
import {convertInputDateToPostgresDate} from "../helpers/date/convertInputDateToPostgresDate";
import {separateBySemicolons} from "@/utils/string/separateBySemicolons";


export const EventService = {
    async getAll() {
        return await axios.get<IEvent[]>('https://event-map-django.onrender.com/api/v1/event/');
    },

    async getById(id: string) {
        return await axios.get<IEventFieldsServer>(`https://event-map-django.onrender.com/api/v1/event/${id}`);
    },

    async edit(id: string, data: IEventFieldsClient) {
        return await axios.put<IEventFields>(`https://event-map-django.onrender.com/api/v1/event/${id}`, {
            ...data, submission_deadline: convertInputDateToPostgresDate(data.submission_deadline),
            subjects: separateBySemicolons(data.subjects),
            founding_range: {
                low: Number(data.founding_range.low),
                high: Number(data.founding_range.high),
            },
            co_founding_range: {
                low: Number(data.co_founding_range.low),
                high: Number(data.co_founding_range.high),
            },
            trl: Number(data.trl),
        });
    },

    async delete(id: string) {
        return await axios.delete<string>(`https://event-map-django.onrender.com/api/product/${id}`);
    },

    async create(data: IEventFieldsClient) {
        return await axios.post<IEvent>(`https://event-map-django.onrender.com/api/v1/event/`, {
            ...data, submission_deadline: convertInputDateToPostgresDate(data.submission_deadline),
            subjects: separateBySemicolons(data.subjects),
            founding_range: {
                low: Number(data.founding_range.low),
                high: Number(data.founding_range.high),
            },
            co_founding_range: {
                low: Number(data.co_founding_range.low),
                high: Number(data.co_founding_range.high),
            },
            trl: Number(data.trl),
        });
    }
}