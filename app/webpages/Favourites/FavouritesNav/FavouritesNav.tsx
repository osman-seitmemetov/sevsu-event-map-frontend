import React, {FC} from "react";
import styles from "./FavouritesNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";


const FavouritesNav: FC = () => {
    return (
        <nav className={styles.nav}>
            <Logo />

            <div className={styles.right}>
                <PrimaryButton className={styles.btn}>Поделиться</PrimaryButton>
                <PrimaryButton className={styles.btn}>Печать всех мероприятий</PrimaryButton>
            </div>
        </nav>
    );
}

export default FavouritesNav;

