import {useMutation, useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useMemo} from "react";

export const useOrganizersFetch = () => {
    const queryData = useQuery('admin get all organizers', () => OrganizerService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении организаторов');
        },
    });

    const { mutateAsync: deleteAsync } = useMutation(
        'admin delete article',
        (organizerId: string) => OrganizerService.delete(organizerId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при удалении организатора');
            },
            onSuccess() {
                toastr.success('Удаление организатора', 'Организатор успешно удален');
                queryData.refetch();
            },
        }
    )

    return useMemo(() => ({
        deleteAsync, ...queryData
    }),[deleteAsync, queryData]);
}