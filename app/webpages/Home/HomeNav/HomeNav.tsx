import React, {FC} from "react";
import styles from "./HomeNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";


const HomeNav: FC = () => {
    return (
        <nav className={styles.nav}>
            <Logo />

            <div className={styles.right}>
                <Link href="/admin/events" className={styles.btn}>
                    <PrimaryButton>панель администратора</PrimaryButton>
                </Link>

                <Link href="/favourites" className={styles.btn}>
                    <PrimaryButton>избранное</PrimaryButton>
                </Link>
            </div>
        </nav>
    );
}

export default HomeNav;

