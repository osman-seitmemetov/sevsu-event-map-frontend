import {TypeComponentAuthFields} from "@/types/authProvider";
import {FC} from "react";
import AuthProvider from "./AuthProvider/AuthProvider";
import {QueryClient, QueryClientProvider} from "react-query";
import HeadProvider from "./HeadProvider/HeadProvider";
import ReduxToastr from "@/UI/ReduxToastr/ReduxToastr";
import {Provider} from "react-redux";
import {store} from "@/store/store";


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const MainProvider: FC<TypeComponentAuthFields> = ({children, Component}) => {
    return (
        <HeadProvider>
            <Provider store={store}>
                {/*@ts-ignore*/}
                <QueryClientProvider client={queryClient}>
                    <AuthProvider Component={Component}>
                        <ReduxToastr/>
                        {children}
                    </AuthProvider>
                </QueryClientProvider>
            </Provider>
        </HeadProvider>
    )
}

export default MainProvider;