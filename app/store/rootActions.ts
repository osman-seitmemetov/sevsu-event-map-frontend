import * as userActions from "@/store/auth/AuthActionCreators";
import {filterActions} from "@/store/filter/filterSlice";


export const allActions = {
    ...userActions,
    ...filterActions
}