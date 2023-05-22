import {useMutation, useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {toastr} from "react-redux-toastr";
import {useMemo} from "react";
import {UserService} from "@/services/UserService";

export const useUsersFetch = () => {
    const queryData = useQuery('admin get all users', () => UserService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении пользователей');
        },
    });

    const {mutateAsync: grandAsync} = useMutation(
        'admin-grand-user',
        (userId: number) => UserService.grand(userId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при изменении статуса пользователя');
            },
            onSuccess() {
                toastr.success('Изменение статуса пользователя', 'Статус пользователя успешно изменен');
                queryData.refetch();
            },
        }
    )

    const {mutateAsync: degrandAsync} = useMutation(
        'admin-degrand-user',
        (userId: number) => UserService.degrand(userId),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при изменении статуса пользователя');
            },
            onSuccess() {
                toastr.success('Изменение статуса пользователя', 'Статус пользователя успешно изменен');
                queryData.refetch();
            },
        }
    )

    return useMemo(() => ({
        grandAsync, degrandAsync, ...queryData
    }), [
        grandAsync, degrandAsync, queryData
    ]);
}