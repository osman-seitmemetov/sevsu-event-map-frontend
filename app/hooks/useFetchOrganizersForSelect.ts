import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {IOption} from "@/models/IOption";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useFetchOrganizersForSelect = () => {
    const queryData = useQuery('admin-get-all-organizers-for-select', () => OrganizerService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении организаторов');
        },

        select: ({data}) =>
            data.map(
                (organizer): IOption => ({
                    label: organizer.name,
                    value: String(organizer.id)
                })
            ),
    });

    return queryData;
}