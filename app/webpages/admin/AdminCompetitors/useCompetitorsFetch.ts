import {useQuery} from "react-query";
import {CompetitorService} from "@/services/CompetitorService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useCompetitorsFetch = () => {
    const queryData = useQuery('admin-get-all-competitors', () => CompetitorService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Ошибка при получении типов участников')
        },

        onSuccess: ({data}) => {
        }
    });

    return queryData;
}