import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {IOption} from "@/models/IOption";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useFetchOrganizerLevelsForSelect = () => {
    const queryData = useQuery('admin-get-all-organizer-levels-for-select', () => OrganizerService.getOrganizerLevels(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении типов организатора');
        },

        select: ({data}) =>
            data.map(
                (category): IOption => ({
                    label: category.name,
                    value: String(category.id)
                })
            ),
    });

    return queryData;
}