import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {EventService} from "@/services/EventService";

export const useEventMinsByIds = (ids: number[]) => {
    const queryData = useQuery(['get-event=min-by-ids', ids], () => EventService.getMinByIds(ids), {
        onError: (error) => {
            toastError(error, "Ошибка при получении мероприятий");
        },
    });

    return queryData;
}