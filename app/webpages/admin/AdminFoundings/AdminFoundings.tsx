import React, {FC, useState} from "react";
import styles from "./AdminFoundings.module.scss";
import {useFoundingsFetch} from "./useFoundingsFetch";
import AdminFoundingsItem from "./AdminFoundingsItem/AdminFoundingsItem";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Modal from "@/UI/modals/Modal/Modal";
import AdminFoundingsNavbar from "@/webpages/admin/AdminFoundings/AdminFoundingsNavbar/AdminFoundingsNavbar";
import AdminFoundingsLoader from "@/webpages/admin/AdminFoundings/AdminFoundingsLoader/AdminFoundingsLoader";


const AdminFoundings: FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [foundingTypeId, setFoundingTypeId] = useState<number | null>(null);

    const {data, isLoading, deleteAsync} = useFoundingsFetch();
    const foundingTypes = data?.data;

    return (
        <>
            <AdminFoundingsNavbar/>
            <AdminContent title="Типы финансирования">
                <div className={styles.competitors}>
                    <div className={styles.items}>
                        {
                            isLoading
                                ? <AdminFoundingsLoader/>
                                : foundingTypes?.length
                                    ? [...foundingTypes].sort((a, b) => {
                                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                            return -1;
                                        }
                                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map(foundingType =>
                                        <AdminFoundingsItem
                                            key={foundingType.id}
                                            foundingType={foundingType}
                                            setFoundingTypeId={setFoundingTypeId}
                                            setActiveModal={setActiveModal}
                                        />)
                                    : <div>Типы участников не найдены</div>
                        }
                    </div>
                </div>
            </AdminContent>

            <Modal
                title="Вы точно хотите удалить тип финансирования?"
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
                            deleteAsync(Number(foundingTypeId));
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

export default AdminFoundings;

