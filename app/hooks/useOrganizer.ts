import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useOrganizer = (id: number) => {
    const queryData = useQuery(['admin-get-organizer', id], () => OrganizerService.getById(String(id)), {
        onSuccess: ({data}) => {},
        onError: (error) => {
            toastError(error, "Ошибка при получении организатора")
        },
    });

    return queryData;
}