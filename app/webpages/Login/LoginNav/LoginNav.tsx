import React, {FC} from "react";
import styles from "./LoginNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";


const LoginNav: FC = () => {

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>
                <Link href="/" className={styles.btn}>
                    <PrimaryButton>назад на главную</PrimaryButton>
                </Link>
            </div>
        </nav>
    );
}

export default LoginNav;

