import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {IOption} from "@/models/IOption";
import {CompetitorService} from "@/services/CompetitorService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useFetchCompetitorsForSelect = () => {
    const queryData = useQuery('admin-get-all-competitors-for-select', () => CompetitorService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении типов участника');
        },

        select: ({data}) =>
            data.map(
                (competitor): IOption => ({
                    label: competitor.name,
                    value: competitor.id
                })
            ),
    });

    return queryData;
}