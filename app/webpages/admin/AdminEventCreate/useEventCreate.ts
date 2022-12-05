import {SubmitHandler} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {EventService} from "@/services/EventService";
import {IEventFields, IEventFieldsClient} from "@/models/form";
import {useRouter} from "next/router";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";

export const useEventCreate = () => {
    const {push} = useRouter();

    const { mutateAsync } = useMutation(
        'admin-create-event',
        (data: IEventFieldsClient) => EventService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании мероприятия');
            },
            onSuccess() {
                toastr.success('Создание мероприятия', 'Мероприятие успешно создано');
                push('/admin/events');
            },
        }
    )

    const onSubmit: SubmitHandler<IEventFieldsClient> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit};
}