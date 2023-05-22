import {FC} from "react";
import {TypeComponentAuthFields} from "@/types/authProvider";
import {useRouter} from "next/router";
import Error404Page from "../../../pages/404";
import {useAuth} from "@/hooks/useAuth";

const CheckRole: FC<TypeComponentAuthFields> = ({children, Component: {isOnlyAdmin, isOnlyUser, isOnlySuperuser}}) => {
    const {user} = useAuth();
    const router = useRouter();

    const Children = () => <>{children}</>

    if(user?.is_superuser) return <Children />
    if (isOnlySuperuser) return <Error404Page/>

    if(user?.is_staff) return <Children />
    if (isOnlyAdmin) return <Error404Page/>

    const isUser = user && !user.is_staff;
    if (isUser && isOnlyUser) return <Children/>;
    else {
        router.pathname !== '/login' && router.replace('/login');
        return null;
    }
};

export default CheckRole;