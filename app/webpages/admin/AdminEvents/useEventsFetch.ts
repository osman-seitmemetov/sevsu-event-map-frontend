import {SubmitHandler} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useEventsFetch = () => {
    const queryData = useQuery('admin-get-all-events', () => EventService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении мероприятий');
        },

        onSuccess: ({data}) => {
        }
    });

    console.log(queryData);

    return queryData;
}