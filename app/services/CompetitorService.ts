import {ICompetitor} from "@/models/ICompetitor";
import {ICompetitorFields} from "@/models/form";
import {axiosClassic, instance} from "@/api/interceptots";


export const CompetitorService = {
    async getAll() {
        return await axiosClassic.get<ICompetitor[]>('/v1/competitor');
    },

    async getById(id: number) {
        return await axiosClassic.get<ICompetitorFields>(`/v1/competitor/${id}`);
    },

    async create(data: ICompetitorFields) {
        return await instance.post<ICompetitor>(`/v1/competitor/`, {
            ...data, code: Number(data.code)
        });
    },

    async edit(id: number, data: ICompetitorFields) {
        return await instance.put<ICompetitor>(`/v1/competitor/${id}`, {
            ...data, code: Number(data.code)
        });
    },

    async delete(id: number) {
        return await instance.delete<string>(`/v1/competitor/${id}`);
    },
}