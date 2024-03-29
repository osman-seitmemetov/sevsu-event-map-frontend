import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {IEventFieldsClient} from "@/models/form";
import {useRouter} from "next/router";
import {joinBySemicolons} from "@/utils/string/joinBySemicolons";
import {convertPostgresDateWithoutTime} from "../../../helpers/date/convertPostgresDateWithoutTime";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {joinBySemicolonsForInput} from "@/utils/string/joinBySemicolonsForInput";


export const useEventEdit = (setValue: UseFormSetValue<IEventFieldsClient>) => {
    const {push, query} = useRouter();
    const eventId = Number(query.id);

    const queryData = useQuery(['admin-get-event', eventId], () => EventService.getById(eventId), {
        onSuccess: ({data}) => {
            // const convertedData = convertServerToClient(data) // плюс минус так должно выглядеть
            setValue('title', data.title);
            setValue('organizer', String(data.organizer));
            // @ts-ignore
            setValue('founding_type', String(data.founding_type));
            setValue('co_founding_range.high', String(data.co_founding_range.high));
            setValue('co_founding_range.low', String(data.co_founding_range.low));
            setValue('founding_range.high', String(data.founding_range.high));
            setValue('founding_range.low', String(data.founding_range.low));
            setValue('submission_deadline', convertPostgresDateWithoutTime(data.submission_deadline));
            setValue('consideration_period', data.consideration_period);
            setValue('realisation_period', data.realisation_period);
            setValue('result', data.result);
            setValue('site', data.site);
            setValue('document', data.document);
            setValue('internal_contacts', data.internal_contacts);
            setValue('trl', String(data.trl));
            // @ts-ignore
            setValue('competitors', String(data.competitors));
            setValue('subjects', joinBySemicolonsForInput(data.subjects));
            setValue('precursor', String(data.precursor));
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных мероприятия');
        },
        enabled: !!query.id
    });

    const {mutateAsync, isLoading: isUpdateLoading} = useMutation('admin-update-event', (data: IEventFieldsClient) => {
        return EventService.edit(eventId, data)
    }, {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании мероприятия');
        },
        onSuccess: () => {
            toastr.success('Редактирование мероприятия', 'Мероприятие успешно отредактировано')
            push('/admin/events');
        }
    });

    const onSubmit: SubmitHandler<IEventFieldsClient> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, ...queryData, isUpdateLoading};
}