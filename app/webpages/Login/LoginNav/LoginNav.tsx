import React, {FC} from "react";
import styles from "./LoginNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {useAuth} from "@/hooks/useAuth";
import FavouritesButton from "@/components/FavouritesButton/FavouritesButton";
import {useActions} from "@/hooks/useActions";


const LoginNav: FC = () => {
    const {isAuthorized} = useAuth();
    const {logout} = useActions();

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>
                {
                    isAuthorized
                        ? <>
                            <PrimaryButton className={styles.btn} onClick={() => logout()}>Выйти</PrimaryButton>
                            <Link href="/" className={styles.btn}>
                                <PrimaryButton>Назад на главную</PrimaryButton>
                            </Link>
                        </>
                        : <Link href="/login" className={styles.btn}>
                            <PrimaryButton>войти</PrimaryButton>
                        </Link>
                }
            </div>
        </nav>
    );
}

export default LoginNav;

