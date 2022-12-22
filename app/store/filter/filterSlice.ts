import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISubject} from "@/models/ISubject";

export interface filterState {
    organizers: number[],
    competitorTypes: number[],
    foundingRange: {
        low: string,
        high: string
    },
    coFoundingRange: {
        low: string,
        high: string
    },
    foundingType: number[],
    submissionDeadlineBefore: Date | undefined,
    submissionDeadlineAfter: Date | undefined,
    trls: number[],
    subjects: ISubject[]
}

const initialState: filterState = {
    organizers: [],
    competitorTypes: [],
    foundingRange: {
        low: "",
        high: ""
    },
    coFoundingRange: {
        low: "",
        high: ""
    },
    foundingType: [],
    submissionDeadlineBefore: undefined,
    submissionDeadlineAfter: undefined,
    trls: [],
    subjects: []
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        organizerSelect(state, action: PayloadAction<number>) {
            state.organizers = [...state.organizers, action.payload];
        },
        organizerDeselect(state, action: PayloadAction<number>) {
            state.organizers = state.organizers.filter(id => id !== action.payload);
        },

        competitorTypeSelect(state, action: PayloadAction<number>) {
            state.competitorTypes = [...state.competitorTypes, action.payload];
        },
        competitorTypeDeselect(state, action: PayloadAction<number>) {
            state.competitorTypes = state.competitorTypes.filter(id => id !== action.payload);
        },

        foundingTypeSelect(state, action: PayloadAction<number>) {
            state.foundingType = [...state.foundingType, action.payload];
        },
        foundingTypeDeselect(state, action: PayloadAction<number>) {
            state.foundingType = state.foundingType.filter(id => id !== action.payload);
        },

        TRLSelect(state, action: PayloadAction<number>) {
            state.trls = [...state.trls, action.payload];
        },
        TRLDeselect(state, action: PayloadAction<number>) {
            state.trls = state.trls.filter(id => id !== action.payload);
        },

        changeFoundingRangeLow(state, action: PayloadAction<string>) {
            state.foundingRange.low = action.payload;
        },
        changeFoundingRangeHigh(state, action: PayloadAction<string>) {
            state.foundingRange.high = action.payload;
        },

        changeCoFoundingRangeLow(state, action: PayloadAction<string>) {
            state.coFoundingRange.low = action.payload;
        },
        changeCoFoundingRangeHigh(state, action: PayloadAction<string>) {
            state.coFoundingRange.high = action.payload;
        },

        changeSubmissionDeadlineBefore(state, action: PayloadAction<Date>) {
            state.submissionDeadlineBefore = action.payload;
        },
        changeSubmissionDeadlineAfter(state, action: PayloadAction<Date>) {
            state.submissionDeadlineAfter = action.payload;
        },

        subjectSelect(state, action: PayloadAction<ISubject>) {
            state.subjects = [...state.subjects, action.payload];
        },
        subjectDeselect(state, action: PayloadAction<ISubject>) {
            state.subjects = state.subjects.filter(s => s.id !== action.payload.id);
        },
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;