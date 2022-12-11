import {useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {useRouter} from "next/router";
import {toastError} from "@/utils/api/withToastrErrorRedux";


export const useEventsByIds = (ids: number[]) => {
    const queryData = useQuery(['get-events-by-ids', ids], () => EventService.getByIds(ids), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных мероприятия');
        },
    });

    return queryData;
}