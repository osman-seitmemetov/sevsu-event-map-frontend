import * as userActions from "@/store/auth/AuthActionCreators";
import * as filterA from "@/store/filter/filterAC";
import * as favouritesA from "@/store/favourites/FavouritesActionCreators";
import {filterActions} from "@/store/filter/filterSlice";
import {favouritesActions} from "@/store/favourites/favouritesSlice";


export const allActions = {
    ...userActions,
    ...filterActions,
    ...filterA,
    ...favouritesActions,
    ...favouritesA
}