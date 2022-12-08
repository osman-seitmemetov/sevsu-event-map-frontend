import {FC} from 'react';
import styles from "./AdminFoundingsNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";
import Link from "next/link";

const AdminFoundingsNavbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.left}>
                    <Logo/>
                </div>

                <div className={styles.left}>
                    <Link href="/admin/founding/create"><PrimaryButton>Создать тип финансирования</PrimaryButton></Link>
                </div>
            </Container>
        </nav>
    );
};

export default AdminFoundingsNavbar;