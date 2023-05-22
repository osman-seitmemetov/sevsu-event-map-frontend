import React, {FC} from 'react';
import styles from "./AdminUsersNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";
import Link from "next/link";

const AdminUsersNavbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.left}>
                    <Logo/>
                </div>
            </Container>
        </nav>
    );
};

export default AdminUsersNavbar;