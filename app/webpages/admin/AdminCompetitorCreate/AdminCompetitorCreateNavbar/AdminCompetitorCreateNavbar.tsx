import {FC} from 'react';
import styles from "./AdminCompetitorCreateNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import Container from "@/components/Container/Container";

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