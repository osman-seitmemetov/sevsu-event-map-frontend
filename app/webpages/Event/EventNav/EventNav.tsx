import React, {FC} from "react";
import styles from "./EventNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";


const EventNav: FC = () => {
    return (
        <nav className={styles.nav}>
            <Logo />

            <div className={styles.right}>
                <PrimaryButton className={styles.btn}>показать qr код</PrimaryButton>
                <PrimaryButton className={styles.btn}>печать</PrimaryButton>
                <Link href="/favourites" className={styles.btn}>
                    <PrimaryButton>избранное</PrimaryButton>
                </Link>
            </div>
        </nav>
    );
}

export default EventNav;

