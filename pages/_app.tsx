import {FC} from "react";
import type {AppProps} from 'next/app';
import MainProvider from "../app/providers/MainProvider";
import {TypeComponentAuthFields} from "@/types/authProvider";
import "react-loading-skeleton/dist/skeleton.css";
import "react-datepicker/dist/react-datepicker.css";
import 'swiper/scss';
import 'swiper/scss/navigation';
import "@/assets/scss/index.scss";
import "@/assets/scss/SelectCustom.scss"
import "@/assets/scss/InputDate.scss"
import 'overlayscrollbars/overlayscrollbars.css';


type TypeAppProps = AppProps & TypeComponentAuthFields;

const MyApp: FC<TypeAppProps> = ({Component, pageProps}) => {
    return (
        <MainProvider Component={Component}>
            <Component {...pageProps} />
        </MainProvider>
    )
}

export default MyApp
