import {FC} from 'react';
import styles from "./AdminCompetitorsNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";

const AdminCompetitorsNavbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.left}>
                    <Logo/>
                </div>

                <div className={styles.left}>
                    {/*<PrimaryButton>Создать участника</PrimaryButton>*/}
                </div>
            </Container>
        </nav>
    );
};

export default AdminCompetitorsNavbar;