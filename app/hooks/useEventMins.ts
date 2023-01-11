import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {EventService} from "@/services/EventService";
import {filterState} from "@/store/filter/filterSlice";
import {useDebounce} from "@/hooks/useDebounce";
import {useActions} from "@/hooks/useActions";
import {useEffect} from "react";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {PayloadAction} from "@reduxjs/toolkit";

export const useEventMins = (filterState: Omit<filterState, 'sortedSubjects' | 'isEventsLoading'>) => {
    const debouncedFilterState = useDebounce(filterState, 200);
    // const {loadEventIds, subjectsSort} = useActions();
    // useEffect(() => {
    //     loadEventIds({isLoading: true})
    // }, [])

    // const state = useTypedSelector(state => state.filterReducer)
    //
    // console.log(state.isEventsLoading)

    const queryData = useQuery(['get-event-mins', debouncedFilterState], () => EventService.getMinByIds([], debouncedFilterState), {
        onError: (error) => {
            toastError(error, "Ошибка при получении мероприятий");
        },
        // onSuccess: (data) => {
        //     const events = data.data || [];
        //     loadEventIds({ids: events.map((e): number => e.id), isLoading: false})
        //     console.log(state.isEventsLoading)
        //     console.log(state.eventIds)
        //     subjectsSort(events.map((e): number => e.id))
        // }
    });

    return queryData;
}