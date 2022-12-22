import {useAuth} from "@/hooks/useAuth";
import {useRouter} from "next/router";
import {useEffect} from "react";

export const useAuthRedirect = () => {
    const {isAuthorized} = useAuth();
    const {query, push} = useRouter();

    const redirect = query.redirect ? String(query.redirect) : '/';

    useEffect(() => {
        if(isAuthorized) push(redirect);
    }, [isAuthorized, redirect, push])
}