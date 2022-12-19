// import * as userActions from "@/store/auth/AuthActionCreators";
import favouritesReducer from "./favourites/favouritesSlice";
import {filterActions} from "@/store/filter/filterSlice";


export const allActions = {
    // ...userActions
    ...filterActions
}