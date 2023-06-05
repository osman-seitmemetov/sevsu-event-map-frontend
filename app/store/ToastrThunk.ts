import { AnyAction, Dispatch, Middleware } from 'redux';
import {store, RootState} from "@/store/store";

const toastrThunkMiddleware: Middleware<Dispatch<AnyAction>, RootState> = (store) => (next) => (action) => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState);
    }

    return next(action);
};

export default toastrThunkMiddleware;