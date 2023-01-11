import {createSlice, current, PayloadAction} from "@reduxjs/toolkit";
import {ISubjectClient, ISubjectServer} from "@/models/ISubject";
import {loadAllSubjects} from "@/store/filter/filterAC";


const removeDublicatedSubjects = (subjects: ISubjectServer[]) => {
    let sortedSubjects: ISubjectClient[] = [];
    for (let i = 0; i < subjects.length; i++) {
        if (sortedSubjects.filter(({subject}) => subject === subjects[i].subject).length > 0) {
            const index = sortedSubjects.indexOf(sortedSubjects.filter(({subject}) => subject === subjects[i].subject)[0]);
            sortedSubjects[index].event.push(subjects[i].event);
        } else {
            sortedSubjects.push({...subjects[i], event: [subjects[i].event]});
        }
    }

    return sortedSubjects;
}

const sortSubjects = (eventIds: number[], subjects: ISubjectClient[]) => {
    const sortedSubjects: ISubjectClient[] = [];
    for (let i = 0; i < eventIds.length; i++) {
        for (let j = 0; j < subjects.length; j++) {
            for (let k = 0; k < subjects[j].event.length; k++) {
                if (eventIds[i] === subjects[j].event[k] && sortedSubjects.filter(s => s.subject === subjects[j].subject).length === 0) {
                    sortedSubjects.push(subjects[j]);
                    break;
                }
            }
        }
    }

    return sortedSubjects;
}

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
    allSubjects: ISubjectClient[],
    sortedSubjects: ISubjectClient[],
    selectedSubjects: ISubjectClient[],
    isSubjectsLoading: boolean,
    isEventsLoading: boolean,
    eventIds: number[]
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
    selectedSubjects: [],
    sortedSubjects: [],
    allSubjects: [],
    isSubjectsLoading: false,
    isEventsLoading: false,
    eventIds: []
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

        subjectSelect(state, action: PayloadAction<ISubjectClient>) {
            state.selectedSubjects = [...state.selectedSubjects, action.payload];
        },
        subjectDeselect(state, action: PayloadAction<ISubjectClient>) {
            state.selectedSubjects = state.selectedSubjects.filter(s => s.id !== action.payload.id);
        },
        subjectsSort(state, action: PayloadAction<number[]>) {
            state.sortedSubjects = sortSubjects(action.payload, current(state.allSubjects));
        },

        loadEventIds(state, action: PayloadAction<{ ids?: number[], isLoading?: boolean }>) {
            // state.eventIds = action.payload.ids || [];
            state.isEventsLoading = action.payload.isLoading || false;
            state.sortedSubjects = sortSubjects(action.payload.ids || [], current(state.allSubjects));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loadAllSubjects.pending, state => {
            state.isSubjectsLoading = true;
        }).addCase(loadAllSubjects.fulfilled, (state, {payload}) => {
            state.isSubjectsLoading = false;
            state.allSubjects = removeDublicatedSubjects(payload);
        }).addCase(loadAllSubjects.rejected, (state) => {
            state.isSubjectsLoading = false;
        })
    }
})

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;