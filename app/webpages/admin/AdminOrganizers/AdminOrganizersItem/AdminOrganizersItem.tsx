import React, {FC} from "react";
import styles from "./AdminOrganizersItem.module.scss";
import Link from "next/link";
import {IOrganizer} from "@/models/IOrganizer";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Modal from "@/UI/modals/Modal/Modal";


interface AdminOrganizersItemProps {
    organizer: IOrganizer,
    removeHandler: (articleId: string) => void,
    setActiveModal: (activeModal: boolean) => void,
    activeModal: boolean
}

const AdminOrganizersItem: FC<AdminOrganizersItemProps> = ({organizer, removeHandler, activeModal, setActiveModal}) => {
    console.log(organizer);

    return (
        <>
            <div className={styles.item}>
                <div className={styles.left}>
                    <div className={styles.img}>
                        <img src={organizer.logo} alt={organizer.name}/>
                    </div>

                    <div className={styles.title}>{organizer.name}</div>
                </div>

                <div className={styles.right}>
                    <Link href={`/admin/organizers/${organizer.id}`}>
                        <button className={styles.button}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <path
                                    d="M 23.90625 3.96875 C 22.859375 3.96875 21.8125 4.375 21 5.1875 L 5.1875 21 L 5.125 21.3125 L 4.03125 26.8125 L 3.71875 28.28125 L 5.1875 27.96875 L 10.6875 26.875 L 11 26.8125 L 26.8125 11 C 28.4375 9.375 28.4375 6.8125 26.8125 5.1875 C 26 4.375 24.953125 3.96875 23.90625 3.96875 Z M 23.90625 5.875 C 24.410156 5.875 24.917969 6.105469 25.40625 6.59375 C 26.378906 7.566406 26.378906 8.621094 25.40625 9.59375 L 24.6875 10.28125 L 21.71875 7.3125 L 22.40625 6.59375 C 22.894531 6.105469 23.402344 5.875 23.90625 5.875 Z M 20.3125 8.71875 L 23.28125 11.6875 L 11.1875 23.78125 C 10.53125 22.5 9.5 21.46875 8.21875 20.8125 Z M 6.9375 22.4375 C 8.136719 22.921875 9.078125 23.863281 9.5625 25.0625 L 6.28125 25.71875 Z"/>
                            </svg>
                        </button>
                    </Link>

                    <button
                        className={styles.button}
                        onClick={() => setActiveModal(true)}
                    >
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.85873 4.02135L3.93499 3.93499C4.26543 3.60455 4.78539 3.57913 5.14499 3.85873L5.23135 3.93499L10.9998 9.70275L16.7683 3.93499C17.1263 3.57701 17.7067 3.57701 18.0647 3.93499C18.4227 4.29297 18.4227 4.87337 18.0647 5.23135L12.2969 10.9998L18.0647 16.7683C18.3951 17.0988 18.4205 17.6187 18.1409 17.9783L18.0647 18.0647C17.7342 18.3951 17.2143 18.4205 16.8547 18.1409L16.7683 18.0647L10.9998 12.2969L5.23135 18.0647C4.87337 18.4227 4.29297 18.4227 3.93499 18.0647C3.57701 17.7067 3.57701 17.1263 3.93499 16.7683L9.70275 10.9998L3.93499 5.23135C3.60455 4.90091 3.57913 4.38095 3.85873 4.02135L3.93499 3.93499L3.85873 4.02135Z"
                                fill="#232323"/>
                        </svg>
                    </button>
                </div>
            </div>

            <Modal
                title="Вы точно хотите удалить организатора?"
                active={activeModal}
                setActive={setActiveModal}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: '100%'
                    }}
                >
                    <PrimaryButton
                        onClick={() => {
                            removeHandler(String(organizer.id));
                            setActiveModal(false);
                        }}
                        style={{width: '48%'}}
                    >
                        Да
                    </PrimaryButton>

                    <ButtonTransparent
                        onClick={() => setActiveModal(false)}
                        style={{width: '48%'}}
                    >
                        Нет
                    </ButtonTransparent>
                </div>
            </Modal>
        </>
    );
}

export default AdminOrganizersItem;

