import {createAsyncThunk} from "@reduxjs/toolkit";
import {EventService} from "@/services/EventService";
import {ISubjectServer} from "@/models/ISubject";


export const loadAllSubjects = createAsyncThunk<ISubjectServer[]>('get-all-subjects', async (_, thunkAPI) => {
    try {
        const response = await EventService.getAllSubjects();
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})