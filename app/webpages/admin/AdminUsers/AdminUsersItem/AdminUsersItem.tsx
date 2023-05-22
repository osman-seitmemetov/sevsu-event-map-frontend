import React, {FC} from "react";
import styles from "./AdminUsersItem.module.scss";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import {IUser} from "@/models/IUser";


interface AdminUsersItemProps {
    user: IUser,
    grand: (userId: number) => void,
    degrand: (userId: number) => void,
}

const AdminUsersItem: FC<AdminUsersItemProps> = ({user, degrand, grand}) => {
    return (
        <>
            <div className={styles.item}>
                <div className={styles.left}>
                    <div className={styles.title}>{user.username}</div>
                </div>

                <div className={styles.right}>
                    <div className={styles.name}>{user.first_name} {user.last_name}</div>

                    {
                        user.is_staff
                            ? <ButtonTransparent
                                style={{width: 320}}
                                onClick={() => degrand(user.id)}
                            >
                                Отнять права администратора
                            </ButtonTransparent>
                            : <ButtonTransparent
                                style={{width: 320}}
                                onClick={() => grand(user.id)}
                            >
                                Дать права администратора
                            </ButtonTransparent>
                    }
                </div>
            </div>
        </>
    );
}

export default AdminUsersItem;

