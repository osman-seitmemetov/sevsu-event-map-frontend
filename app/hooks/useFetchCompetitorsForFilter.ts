import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {CheckboxFilterOption} from "@/UI/CheckboxFilter/CheckboxFilter";
import {CompetitorService} from "@/services/CompetitorService";

export const useFetchCompetitorsForFilter = () => {
    const queryData = useQuery('get-all-competitors-for-filter', () => CompetitorService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении типов участника');
        },

        select: ({data}) =>
            data.map(
                (competitor): CheckboxFilterOption => ({
                    id: competitor.id,
                    title: competitor.name
                })
            ),
    });

    return queryData;
}