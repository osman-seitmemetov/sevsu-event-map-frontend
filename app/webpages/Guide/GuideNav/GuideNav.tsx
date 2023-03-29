import React, {FC} from "react";
import styles from "./GuideNav.module.scss";
import Logo from "@/components/Logo/Logo";


const GuideNav: FC = () => {

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>

            </div>
        </nav>
    );
}

export default GuideNav;

