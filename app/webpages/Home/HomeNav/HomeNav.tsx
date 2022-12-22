import React, {FC} from "react";
import styles from "./HomeNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {useAuth} from "@/hooks/useAuth";


const HomeNav: FC = () => {
    const {isAuthorized} = useAuth();

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>
                {
                    isAuthorized
                        ? <Link href="/admin/events" className={styles.btn}>
                            <PrimaryButton>панель администратора</PrimaryButton>
                        </Link>
                        : <Link href="/login" className={styles.btn}>
                            <PrimaryButton>войти</PrimaryButton>
                        </Link>
                }

                <Link href="/favourites" className={styles.btn}>
                    <PrimaryButton>избранное</PrimaryButton>
                </Link>
            </div>
        </nav>
    );
}

export default HomeNav;

