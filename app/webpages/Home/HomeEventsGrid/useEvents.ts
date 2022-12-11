import {useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useEvents = () => {
    const queryData = useQuery('get-all-events', () => EventService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении мероприятий');
        }
    });

    return queryData;
}