import axios from "axios";
import {ICompetitor} from "@/models/ICompetitor";


export const CompetitorService = {
    async getAll() {
        return await axios.get<ICompetitor[]>('https://event-map-django.onrender.com/api/v1/competitor');
    },
}