import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {CheckboxFilterOption} from "@/UI/CheckboxFilter/CheckboxFilter";
import {FoundingService} from "@/services/FoundingService";

export const useFetchFoundingTypesForFilter = () => {
    const queryData = useQuery('get-all-founding-types-for-filter', () => FoundingService.getAll(), {
        onError: (error: any) => {
            toastError(error, 'Возникла ошибка при получении типов финансирования');
        },

        select: ({data}) =>
            data.map(
                (foundingType): CheckboxFilterOption => ({
                    id: foundingType.id,
                    title: foundingType.name
                })
            ),
    });

    return queryData;
}