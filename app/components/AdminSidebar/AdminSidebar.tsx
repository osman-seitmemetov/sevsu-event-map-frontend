import {FC, useEffect, useState} from 'react';
import styles from "./AdminSidebar.module.scss";
import NavLink from "@/components/NavLink/NavLink";
import {useAuth} from "@/hooks/useAuth";

const AdminSidebar: FC = () => {
    const {user} = useAuth();

    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
    }, [domLoaded]);

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

            <NavLink
                href="/admin/founding"
                className={styles.link}
                activeClassName={styles.link_active}
            >
                Типы финансирования
            </NavLink>

            {
                domLoaded && user?.is_superuser && <NavLink
                    href="/admin/users"
                    className={styles.link}
                    activeClassName={styles.link_active}
                >
                    Пользователи
                </NavLink>
            }
        </aside>
    );
};

export default AdminSidebar;