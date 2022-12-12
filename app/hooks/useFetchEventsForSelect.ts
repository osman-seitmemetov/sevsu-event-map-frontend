import {useQuery} from "react-query";
import {IOption} from "@/models/IOption";
import {EventService} from "@/services/EventService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useFetchEventsForSelect = () => {
    const queryData = useQuery('admin-get-all-events-for-select', () => EventService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении списка мероприятий');
        },

        select: ({data}) =>
            data.map(
                (event): IOption => ({
                    label: event.title,
                    value: String(event.id)
                })
            ),
    });

    return queryData;
}