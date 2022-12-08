import {FC} from 'react';
import styles from "./AdminCompetitorCreateNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";
import Link from "next/link";

const AdminCompetitorCreateNavbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.left}>
                    <Logo/>
                </div>

                <div className={styles.left}>
                </div>
            </Container>
        </nav>
    );
};

export default AdminCompetitorCreateNavbar;