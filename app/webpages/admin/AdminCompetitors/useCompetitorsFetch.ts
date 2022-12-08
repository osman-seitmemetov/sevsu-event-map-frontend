import {useMutation, useQuery} from "react-query";
import {CompetitorService} from "@/services/CompetitorService";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useMemo} from "react";

export const useCompetitorsFetch = () => {
    const queryData = useQuery('admin-get-all-competitors', () => CompetitorService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Ошибка при получении типов участников')
        }
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin-delete-competitor',
        (competitorId: number) => CompetitorService.delete(competitorId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении типа участника');
            },
            onSuccess() {
                toastr.success('Удаление типа участника', 'Тип участника успешно удален');
                queryData.refetch();
            },
        }
    )

    return useMemo(() => ({
        deleteAsync, ...queryData
    }),[deleteAsync, queryData]);
}