import {FC} from 'react';
import styles from "./AdminEventCreateNavbar.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Container from "@/components/Container/Container";

const AdminEventCreateNavbar: FC = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
                <div className={styles.left}>
                    <Logo/>
                </div>

                <div className={styles.left}>
                    {/*<PrimaryButton>создать мероприятие</PrimaryButton>*/}
                </div>
            </Container>
        </nav>
    );
};

export default AdminEventCreateNavbar;