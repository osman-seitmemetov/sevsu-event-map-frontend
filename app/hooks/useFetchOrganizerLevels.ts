import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useFetchOrganizerLevels = () => {
    const queryData = useQuery('admin-get-all-organizer-levels', () => OrganizerService.getOrganizerLevels(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении типов организатора');
        }
    });

    return queryData;
}