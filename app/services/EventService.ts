import axios from "axios";
import {IEvent, IEventMin} from "@/models/IEvent";
import {IEventFields, IEventFieldsClient, IEventFieldsServer} from "@/models/form";
import {convertInputDateToPostgresDate} from "../helpers/date/convertInputDateToPostgresDate";
import {separateBySemicolons} from "@/utils/string/separateBySemicolons";
import {IFoundingType} from "@/models/IFoundingType";
import {convertIdsToURL} from "@/utils/string/convertIdsToURL";
import {IEventOrganizer} from "@/models/IEventOrganizer";


export const EventService = {
    async getAll() {
        return await axios.get<IEventMin[]>('https://event-map-django.onrender.com/api/v1/event_minimal');
    },

    async getById(id: number) {
        return await axios.get<IEvent>(`https://event-map-django.onrender.com/api/v1/event/${id}`);
    },

    async getByIds(ids: number[]) {
        return await axios.get<IEventOrganizer[]>(`https://event-map-django.onrender.com/api/v1/event_print${convertIdsToURL(ids)}`);
    },

    async getMinByIds(ids: number[]) {
        return await axios.get<IEventMin[]>(`https://event-map-django.onrender.com/api/v1/event_minimal${convertIdsToURL(ids)}`);
    },

    async getByIdFields(id: number) {
        return await axios.get<IEventFieldsServer>(`https://event-map-django.onrender.com/api/v1/event/${id}`);
    },

    async edit(id: number, data: IEventFieldsClient) {
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
            founding_type: String(data.founding_type).split(',').map(ft => +ft),
            competitors: String(data.competitors).split(',').map(ft => +ft),
            organizer: Number(data.organizer)
        });
    },

    async delete(id: number) {
        return await axios.delete<string>(`https://event-map-django.onrender.com/api/v1/event/${id}`);
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
            founding_type: String(data.founding_type).split(',').map(ft => +ft),
            competitors: String(data.competitors).split(',').map(ft => +ft),
            organizer: Number(data.organizer)
        });
    },

    async getAllFoundingTypes() {
        return await axios.get<IFoundingType[]>('https://event-map-django.onrender.com/api/v1/founding_type');
    }
}