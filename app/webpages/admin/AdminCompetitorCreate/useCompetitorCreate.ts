import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {ICompetitorFields} from "@/models/form";
import {useRouter} from "next/router";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {CompetitorService} from "@/services/CompetitorService";

export const useCompetitorCreate = () => {
    const {push} = useRouter();

    const { mutateAsync } = useMutation(
        'admin-create-competitor-type',
        (data: ICompetitorFields) => CompetitorService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при типа участника');
            },
            onSuccess() {
                toastr.success('Создание типа участника', 'Тип участника успешно создан');
                push('/admin/founding');
            },
        }
    )

    const onSubmit: SubmitHandler<ICompetitorFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit};
}