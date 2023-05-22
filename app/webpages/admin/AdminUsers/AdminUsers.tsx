import React, {FC, useState} from "react";
import styles from "./AdminUsers.module.scss";
import {useUsersFetch} from "./useUsersFetch";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminOrganizersNavbar from "@/webpages/admin/AdminOrganizers/AdminOrganizersNavbar/AdminOrganizersNavbar";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import AdminUsersItem from "@/webpages/admin/AdminUsers/AdminUsersItem/AdminUsersItem";
import AdminUsersNavbar from "@/webpages/admin/AdminUsers/AdminUsersNavbar/AdminUsersNavbar";


const AdminUsers: FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const {
        data, isLoading, grandAsync, degrandAsync
    } = useUsersFetch();
    const users = data?.data;

    return (
        <>
            <AdminUsersNavbar/>
            <AdminContent title="Пользователи">
                <div className={styles.items}>
                    {
                        isLoading
                            ? <SkeletonLoader
                                count={4}
                                style={{
                                    width: "100%",
                                    height: 108,
                                    marginBottom: 20,
                                    borderRadius: 12
                                }}
                            />
                            : users?.length && [...users].sort((a, b) => {
                                if (a.username.toLowerCase() < b.username.toLowerCase()) {
                                    return -1;
                                }
                                if (a.username.toLowerCase() > b.username.toLowerCase()) {
                                    return 1;
                                }
                                return 0;
                            }).map(user =>
                                <AdminUsersItem
                                    user={user}
                                    key={user.id}
                                    grand={grandAsync}
                                    degrand={degrandAsync}
                                />
                            )
                    }
                </div>
            </AdminContent>
        </>
    );
}

export default AdminUsers;

