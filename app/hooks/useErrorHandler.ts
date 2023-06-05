import {toastr} from "react-redux-toastr";
import {useDispatch} from "react-redux";

export const useErrorHandler = (title: string, message: string) => {
    toastr.error(title, message);
    const dispatch = useDispatch();
    dispatch({type: 'FETCH_ERROR', payload: message});
}