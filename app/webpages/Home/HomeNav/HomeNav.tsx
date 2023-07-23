import React, {FC, useEffect, useState} from "react";
import styles from "./HomeNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import {useAuth} from "@/hooks/useAuth";
import FavouritesButton from "@/components/FavouritesButton/FavouritesButton";
// import AdminGuide from "@/assets/files/admin.docx";
import {useActions} from "@/hooks/useActions";


const HomeNav: FC = () => {
    const {isAuthorized, user} = useAuth();
    const {logout, favouritesDeleteAll} = useActions();
    // console.log(AdminGuide);

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, [domLoaded]);

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>
                {
                    isAuthorized
                        ? <PrimaryButton className={styles.btn} onClick={() => {
                            favouritesDeleteAll();
                            logout();
                        }}>Выйти</PrimaryButton>
                        : <Link href="/login" className={styles.btn}>
                            <PrimaryButton>войти</PrimaryButton>
                        </Link>
                }

                {
                    domLoaded && isAuthorized && user?.is_staff && <Link href="/admin/events" className={styles.btn}>
                        <PrimaryButton>панель администратора</PrimaryButton>
                    </Link>
                }

                {
                    domLoaded && isAuthorized && user?.is_staff
                        ? <Link href="/guide" className={styles.btn}>
                            <PrimaryButton>инструкция для администратора</PrimaryButton>
                        </Link>
                        : <Link href="/guide" className={styles.btn}>
                            <PrimaryButton>инструкция для пользователя</PrimaryButton>
                        </Link>
                }

                <FavouritesButton className={styles.btn}/>
            </div>
        </nav>
    );
}

export default HomeNav;

