import {FC} from 'react';
import styles from "./AdminSidebar.module.scss";
import NavLink from "@/components/NavLink/NavLink";

const AdminSidebar: FC = () => {
    return (
        <aside className={styles.sidebar}>
            <NavLink
                href="/admin/events"
                className={styles.link}
                activeClassName={styles.link_active}
            >
                Мероприятия
            </NavLink>

            <NavLink
                href="/admin/organizers"
                className={styles.link}
                activeClassName={styles.link_active}
            >
                Организаторы
            </NavLink>

            <NavLink
                href="/admin/competitors"
                className={styles.link}
                activeClassName={styles.link_active}
            >
                Участники
            </NavLink>
        </aside>
    );
};

export default AdminSidebar;