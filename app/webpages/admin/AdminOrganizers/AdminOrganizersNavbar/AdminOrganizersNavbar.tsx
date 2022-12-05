import React, {FC} from 'react';
import styles from "./AdminOrganizersNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";
import Link from "next/link";

const AdminOrganizersNavbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.left}>
                    <Logo/>
                </div>

                <div className={styles.right}>
                    <Link href="/admin/organizers/create">
                        <PrimaryButton>Добавить организатора</PrimaryButton>
                    </Link>
                </div>
            </Container>
        </nav>
    );
};

export default AdminOrganizersNavbar;