import {IEvent, IEventMin} from "@/models/IEvent";
import {IEventFieldsClient, IEventFieldsServer} from "@/models/form";
import {convertInputDateToPostgresDate} from "../helpers/date/convertInputDateToPostgresDate";
import {IFoundingType} from "@/models/IFoundingType";
import {convertIdsToURL} from "@/utils/string/convertIdsToURL";
import {IEventOrganizer} from "@/models/IEventOrganizer";
import {filterState} from "@/store/filter/filterSlice";
import {ISubject} from "@/models/ISubject";
import {convertSubjectsToIds} from "@/utils/string/convertSubjectsToIds";
import {axiosClassic, instance} from "../api/interceptots";


export const EventService = {
    async getAll() {
        return await axiosClassic.get<IEventMin[]>('/v1/event_minimal');
    },

    async getById(id: number) {
        return await axiosClassic.get<IEvent>(`/v1/event/${id}`);
    },

    async getByIds(ids: number[]) {
        return await axiosClassic.get<IEventOrganizer[]>(`/v1/event_print?${ids.length > 0 ? convertIdsToURL(ids, "id") : ""}`);
    },

    async getMinByIds(ids: number[], filterParams?: filterState) {
        const organizersURL = filterParams?.organizers ? convertIdsToURL(filterParams.organizers, "organizer") : "";
        const competitorTypesURL = filterParams?.competitorTypes ? convertIdsToURL(filterParams.competitorTypes, "competitors") : "";
        const foundingRangeMinURL = filterParams?.foundingRange.low ? `f_range_min=${filterParams.foundingRange.low}&)` : "";
        const foundingRangeMaxURL = filterParams?.foundingRange.high ? `f_range_max=${filterParams.foundingRange.high}&)` : "";
        const coFoundingRangeMinURL = filterParams?.coFoundingRange.low ? `cf_range_min=${filterParams.coFoundingRange.low}&)` : "";
        const coFoundingRangeMaxURL = filterParams?.coFoundingRange.high ? `cf_range_max=${filterParams.coFoundingRange.high}&)` : "";
        const foundingTypesURL = filterParams?.foundingType ? convertIdsToURL(filterParams.foundingType, "founding") : "";
        const TRLsURL = filterParams?.trls ? convertIdsToURL(filterParams.trls, "trl") : "";
        const submissionDeadlineBeforeURL = filterParams?.submissionDeadlineBefore ? `submission_deadline_before=${convertInputDateToPostgresDate(filterParams.submissionDeadlineBefore)}&` : "";
        const submissionDeadlineAfterURL = filterParams?.submissionDeadlineAfter ? `submission_deadline_after=${convertInputDateToPostgresDate(filterParams.submissionDeadlineAfter)}&` : "";
        const eventIds = filterParams?.subjects ? convertIdsToURL(convertSubjectsToIds(filterParams.subjects), "id") : "";
        const iDs = ids ? convertIdsToURL(ids, "id") : "";

        return await axiosClassic.get<IEventMin[]>(
            `/v1/event_minimal?${organizersURL}${competitorTypesURL}${foundingRangeMinURL}${foundingRangeMaxURL}${coFoundingRangeMinURL}${coFoundingRangeMaxURL}${foundingTypesURL}${TRLsURL}${submissionDeadlineBeforeURL}${submissionDeadlineAfterURL}${eventIds}${iDs}`, {
                params: {
                    // ...filterParams,
                    ids
                },
            });
    },

    async getByIdFields(id: number) {
        return await axiosClassic.get<IEventFieldsServer>(`/v1/event/${id}`);
    },

    async edit(id: number, data: IEventFieldsClient) {
        return await instance.put<IEvent>(`/v1/event/${id}`, {
            ...data, submission_deadline: convertInputDateToPostgresDate(data.submission_deadline),
            subjects: data.subjects.split(';\n'),
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
            organizer: Number(data.organizer),
            precursor: Number(data.precursor)
        });
    },

    async delete(id: number) {
        return await instance.delete<string>(`/v1/event/${id}`);
    },

    async create(data: IEventFieldsClient) {
        return await instance.post<IEvent>(`/v1/event/`, {
            ...data, submission_deadline: convertInputDateToPostgresDate(data.submission_deadline),
            subjects: data.subjects.split(';\n'),
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
            organizer: Number(data.organizer),
            precursor: Number(data.precursor)
        });
    },

    async getAllFoundingTypes() {
        return await axiosClassic.get<IFoundingType[]>('/v1/founding_type');
    },

    async getAllSubjects() {
        return await axiosClassic.get<ISubject[]>('/v1/subjects/');
    },
}