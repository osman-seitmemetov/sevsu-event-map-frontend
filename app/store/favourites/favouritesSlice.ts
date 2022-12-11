import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface eventsState {
    eventIds: number[],
    eventIdsSelected: number[]
}

const initialState: eventsState = {
    eventIds: [],
    eventIdsSelected: [],
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        favouritesSelect(state, action: PayloadAction<number>) {
            state.eventIdsSelected = [...state.eventIdsSelected, action.payload];
        },

        favouritesDeselect(state, action: PayloadAction<number>) {
            state.eventIdsSelected = state.eventIdsSelected.filter(id => id !== action.payload);
        },

        favouritesAdd(state, action: PayloadAction<number>) {
            state.eventIds = [...state.eventIds, action.payload];
        },

        favouritesDelete(state, action: PayloadAction<number>) {
            state.eventIds = state.eventIds.filter(id => id !== action.payload);
        }
    }
})

export default favouritesSlice.reducer;