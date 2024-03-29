import {checkAuth} from "@/store/auth/AuthActionCreators";
import {FC, useEffect} from "react";
import {useActions} from "@/hooks/useActions";
import {TypeComponentAuthFields} from "@/types/authProvider";
import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {FavouritesService} from "@/services/FavouritesService";
const DynamicCheckRole = dynamic(() => import('./CheckRole'), {ssr: false})


let AuthProvider: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyAdmin, isOnlyUser}}) => {
    const {isAuthorized} = useAuth();
    const {checkAuth, logout, fetchFavourites, updateFavourites} = useActions();
    const {pathname}  = useRouter();

    useEffect(() => {
        if(isAuthorized) fetchFavourites();
    }, [fetchFavourites, isAuthorized]);

    useEffect(() => {
        if(localStorage.getItem('token')) checkAuth();
    }, []);

    useEffect(() => {
        if(!localStorage.getItem('token') && isAuthorized) logout();
    }, [pathname])

    return !isOnlyAdmin && !isOnlyUser ? <>{children}</> : <DynamicCheckRole Component={{isOnlyUser, isOnlyAdmin}}>
        {children}
    </DynamicCheckRole>
};

export default AuthProvider;