import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEvent} from "@/models/IEvent";

interface eventsState {
    events: IEvent[],
    eventsSelected: IEvent[]
}

const initialState: eventsState = {
    events: [
        {
            id: 2,
            founding_range: {
                id: 3,
                low: 10,
                high: 2555
            },
            co_founding_range: {
                id: 3,
                low: 44,
                high: 45
            },
            subjects: [
                "subject 36",
                "subject 37",
                "subject 38",
                "subject 6545"
            ],
            title: "title of event",
            submission_deadline: "2023-04-11",
            consideration_period: "cons.period",
            realisation_period: "real.period",
            result: "result",
            site: "site",
            document: "doc",
            internal_contacts: "IC",
            trl: 6,
            organizer: 1,
            precursor: 1,
            founding_type: [1],
            competitors: [
                1,
                2,
                3
            ]
        },
        {
            id: 3,
            founding_range: {
                id: 3,
                low: 10,
                high: 2555
            },
            co_founding_range: {
                id: 3,
                low: 44,
                high: 45
            },
            subjects: [
                "subject 36",
                "subject 37",
                "subject 38",
                "subject 6545"
            ],
            title: "Title bla bla bla",
            submission_deadline: "2023-04-11",
            consideration_period: "cons.period",
            realisation_period: "real.period",
            result: "result",
            site: "site",
            document: "doc",
            internal_contacts: "IC",
            trl: 6,
            organizer: 1,
            precursor: 1,
            founding_type: [1],
            competitors: [
                1,
                2,
                3
            ]
        },
        {
            id: 5,
            founding_range: {
                id: 3,
                low: 10,
                high: 2555
            },
            co_founding_range: {
                id: 3,
                low: 44,
                high: 45
            },
            subjects: [
                "subject 36",
                "subject 37",
                "subject 38",
                "subject 6545"
            ],
            title: "Название мероприятия",
            submission_deadline: "2023-04-11",
            consideration_period: "cons.period",
            realisation_period: "real.period",
            result: "result",
            site: "site",
            document: "doc",
            internal_contacts: "IC",
            trl: 6,
            organizer: 1,
            precursor: 1,
            founding_type: [1],
            competitors: [
                1,
                2,
                3
            ]
        },
    ],
    eventsSelected: [],
}

export const favouritesSlice = createSlice({
    name: 'favourites',
    initialState,
    reducers: {
        favouritesSelect(state, action: PayloadAction<IEvent>) {
            state.eventsSelected = [...state.eventsSelected, action.payload];
            console.log(state.eventsSelected);
        },
        favouritesDeselect(state, action: PayloadAction<IEvent>) {
            state.eventsSelected = state.eventsSelected.filter(({ id }) => id !== action.payload.id);
            console.log(state.eventsSelected);
        }
    }
})

export default favouritesSlice.reducer;