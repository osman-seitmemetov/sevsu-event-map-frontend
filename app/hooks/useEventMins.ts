import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {EventService} from "@/services/EventService";
import {filterState} from "@/store/filter/filterSlice";
import {useDebounce} from "@/hooks/useDebounce";
import {useActions} from "@/hooks/useActions";

export const useEventMins = (filterState: Omit<filterState, 'sortedSubjects' | 'isEventsLoading'>) => {
    const debouncedFilterState = useDebounce(filterState, 200);
    // const {subjectsSort, loadEventIds} = useActions();

    // useEffect(() => {
    //     loadEventIds({isLoading: debouncedLoading})
    // }, [debouncedFilterState])

    // loadEventIds({isLoading: true})

    const queryData = useQuery(['get-event-mins', debouncedFilterState], () => EventService.getMinByIds([], debouncedFilterState), {
        onError: (error) => {
            toastError(error, "Ошибка при получении мероприятий");
        },
    });

    return queryData;
}