import * as userActions from "@/store/auth/AuthActionCreators";
import * as filterA from "@/store/filter/filterAC";
import {filterActions} from "@/store/filter/filterSlice";


export const allActions = {
    ...userActions,
    ...filterActions,
    ...filterA
}