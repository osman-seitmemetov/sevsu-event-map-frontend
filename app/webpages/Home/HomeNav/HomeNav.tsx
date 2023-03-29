import React, {FC} from "react";
import styles from "./HomeNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {useAuth} from "@/hooks/useAuth";
import FavouritesButton from "@/components/FavouritesButton/FavouritesButton";
import {useActions} from "@/hooks/useActions";


const HomeNav: FC = () => {
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
                            <Link href="/admin/events" className={styles.btn}>
                                <PrimaryButton>панель администратора</PrimaryButton>
                            </Link>
                        </>
                        : <Link href="/login" className={styles.btn}>
                            <PrimaryButton>войти</PrimaryButton>
                        </Link>
                }

                <Link href="/guide" className={styles.btn}>
                    <PrimaryButton>инструкция для пользователя</PrimaryButton>
                </Link>
                <FavouritesButton className={styles.btn}/>
            </div>
        </nav>
    );
}

export default HomeNav;

