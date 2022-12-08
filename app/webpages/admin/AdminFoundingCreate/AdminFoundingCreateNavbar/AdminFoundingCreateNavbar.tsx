import {FC} from 'react';
import styles from "./AdminFoundingCreateNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";
import Link from "next/link";

const AdminFoundingCreateNavbar: FC = () => {
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

export default AdminFoundingCreateNavbar;