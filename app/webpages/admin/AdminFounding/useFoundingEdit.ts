import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {IFoundingTypeFields} from "@/models/form";
import {useRouter} from "next/router";
import {getKeys} from "@/utils/object/getKeys";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {FoundingService} from "@/services/FoundingService";

export const useFoundingEdit = (setValue: UseFormSetValue<IFoundingTypeFields>) => {
    const {push, query} = useRouter();
    const foundingTypeId = Number(query.id);

    const queryData = useQuery(['admin-get-founding-type', foundingTypeId], () => FoundingService.getById(foundingTypeId), {
        onSuccess: ({data}) => {
            getKeys(data).forEach(key => {
                setValue(key, data[key]);
            })
        },
        onError: (error) => {
            toastError(error, 'Возникла ошибка при загрузке данных типа участника');
        },
        enabled: !!query.id
    });

    const {mutateAsync} = useMutation('admin-update-founding-type', (data: IFoundingTypeFields) => FoundingService.edit(foundingTypeId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании типа финансирования');
        },

        onSuccess: ({data}) => {
            toastr.success('Редактирование типа финансирования', 'Тип финансирования успешно отредактирован');
            push('/admin/founding');
        }
    });

    const onSubmit: SubmitHandler<IFoundingTypeFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, ...queryData};
}