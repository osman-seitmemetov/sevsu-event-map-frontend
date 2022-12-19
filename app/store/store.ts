import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { reducer as toastrReducer } from 'react-redux-toastr';
import favouritesReducer from "./favourites/favouritesSlice";
import filterReducer from "./filter/filterSlice";
import {TypedUseSelectorHook, useSelector, useDispatch} from "react-redux";


const rootReducer = combineReducers({
    filterReducer,
    favouritesReducer,
    toastr: toastrReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type RootState = ReturnType<typeof rootReducer>;
export type TypeRootState = ReturnType<typeof store.getState>;