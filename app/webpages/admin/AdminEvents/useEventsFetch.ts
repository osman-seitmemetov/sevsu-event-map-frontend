import {useMutation, useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useMemo} from "react";


export const useEventsFetch = () => {
    const queryData = useQuery('admin-get-all-events', () => EventService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении мероприятий');
        }
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin-delete-event',
        (eventId: number) => EventService.delete(eventId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении мероприятия');
            },
            onSuccess() {
                toastr.success('Удаление мероприятия', 'Мероприятие успешно удалено');
                queryData.refetch();
            },
        }
    )

    return useMemo(() => ({
        deleteAsync, ...queryData
    }),[deleteAsync, queryData]);
}