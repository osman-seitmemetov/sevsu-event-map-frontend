import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useRouter} from "next/router";
import {useMutation, useQuery} from "react-query";
import {getKeys} from "@/utils/object/getKeys";
import {OrganizerService} from "@/services/OrganizerService";
import {IOrganizerFields} from "@/models/form";
import {toastr} from "react-redux-toastr";
import {toastError} from "@/utils/api/withToastrErrorRedux";

export const useEditOrganizer = (setValue: UseFormSetValue<IOrganizerFields>) => {
    const {push, query} = useRouter();
    const organizerId = String(query.id);

    const queryData = useQuery(['admin-get-organizer', organizerId], () => OrganizerService.getById(organizerId), {
        onSuccess: ({data}) => {
            setValue("name", data.name);
            setValue("level", String(data.level));
            setValue("logo", data.logo);
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при получении организатора');
        },
        enabled: !!query.id
    });

    const {mutateAsync} = useMutation('admin-put-organizer', (data: IOrganizerFields) => OrganizerService.edit(organizerId, data), {
        onError: (error) => {
            alert(error)
        },
        onSuccess: () => {
            toastr.success('Редактирование организатора', 'Организатор успешно изменен');
            push('/admin/organizers');
        }
    });

    const onSubmit: SubmitHandler<IOrganizerFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, ...queryData};
}