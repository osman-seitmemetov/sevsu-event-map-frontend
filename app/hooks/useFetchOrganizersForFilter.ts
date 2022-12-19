import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {CheckboxFilterOption} from "@/UI/CheckboxFilter/CheckboxFilter";

export const useFetchOrganizersForFilter = () => {
    const queryData = useQuery('admin-get-all-organizers-for-filter', () => OrganizerService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении организаторов');
        },

        select: ({data}) =>
            data.map(
                (organizer): CheckboxFilterOption => ({
                    id: organizer.id,
                    title: organizer.name
                })
            ),
    });

    return queryData;
}