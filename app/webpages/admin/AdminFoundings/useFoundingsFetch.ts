import {useMutation, useQuery} from "react-query";
import {CompetitorService} from "@/services/CompetitorService";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useMemo} from "react";
import {FoundingService} from "@/services/FoundingService";

export const useFoundingsFetch = () => {
    const queryData = useQuery('admin-get-all-founding-types', () => FoundingService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Ошибка при получении типов финансирования')
        }
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin-delete-founding-type',
        (foundingTypeId: number) => FoundingService.delete(foundingTypeId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении типа финансирования');
            },
            onSuccess() {
                toastr.success('Удаление типа финансирования', 'Тип финансирования успешно удален');
                queryData.refetch();
            },
        }
    )

    return useMemo(() => ({
        deleteAsync, ...queryData
    }),[deleteAsync, queryData]);
}