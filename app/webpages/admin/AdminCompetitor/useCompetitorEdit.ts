import {SubmitHandler, UseFormSetValue} from "react-hook-form";
import {useMutation, useQuery} from "react-query";
import {ICompetitorFields} from "@/models/form";
import {useRouter} from "next/router";
import {getKeys} from "@/utils/object/getKeys";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {CompetitorService} from "@/services/CompetitorService";

export const useCompetitorEdit = (setValue: UseFormSetValue<ICompetitorFields>) => {
    const {push, query} = useRouter();
    const competitorId = Number(query.id);

    const queryData = useQuery(['admin-get-competitor', competitorId], () => CompetitorService.getById(competitorId), {
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

    const {mutateAsync, isLoading: isUpdateLoading} = useMutation('admin-update-competitor', (data: ICompetitorFields) => CompetitorService.edit(competitorId, data), {
        onError: (error) => {
            toastError(error, 'Возникла ошибка при редактировании типа участника');
        },
        onSuccess: ({data}) => {
            toastr.success('Редактирование типа участника', 'Тип участника успешно отредактирован');
            push('/admin/competitors');
        }
    });

    const onSubmit: SubmitHandler<ICompetitorFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isUpdateLoading, ...queryData};
}