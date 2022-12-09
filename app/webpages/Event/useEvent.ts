import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {IEventFieldsClient} from "@/models/form";
import {useRouter} from "next/router";
import {joinBySemicolons} from "@/utils/string/joinBySemicolons";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";


export const useEvent = () => {
    const {query} = useRouter();
    const eventId = Number(query.id);

    const queryData = useQuery(['get-event', eventId], () => EventService.getById(eventId), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных мероприятия');
        },
        enabled: !!query.id
    });

    return queryData;
}