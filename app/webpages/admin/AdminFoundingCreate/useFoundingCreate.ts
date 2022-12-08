import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {ICompetitorFields, IFoundingTypeFields} from "@/models/form";
import {useRouter} from "next/router";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {FoundingService} from "@/services/FoundingService";

export const useFoundingCreate = () => {
    const {push} = useRouter();

    const { mutateAsync } = useMutation(
        'admin-create-founding-type',
        (data: IFoundingTypeFields) => FoundingService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при создании типа финансирования');
            },
            onSuccess() {
                toastr.success('Создание типа финансирования', 'Тип финансирования успешно создан');
                push('/admin/competitors');
            },
        }
    )

    const onSubmit: SubmitHandler<IFoundingTypeFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit};
}