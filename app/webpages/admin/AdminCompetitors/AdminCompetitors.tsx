import React, {FC, useState} from "react";
import styles from "./AdminCompetitors.module.scss";
import {useCompetitorsFetch} from "./useCompetitorsFetch";
import AdminCompetitorsItem from "./AdminCompetitorsItem/AdminCompetitorsItem";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminCompetitorsNavbar from "@/webpages/admin/AdminCompetitors/AdminCompetitorsNavbar/AdminCompetitorsNavbar";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Modal from "@/UI/modals/Modal/Modal";
import AdminCompetitorsLoader from "@/webpages/admin/AdminCompetitors/AdminCompetitorsLoader/AdminCompetitorsLoader";


const AdminCompetitors: FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [competitorId, setCompetitorId] = useState<number | null>(null);

    const {data, isLoading, deleteAsync} = useCompetitorsFetch();
    const competitors = data?.data;

    return (
        <>
            <AdminCompetitorsNavbar/>
            <AdminContent title="Типы участников">
                <div className={styles.competitors}>
                    <div className={styles.items}>
                        {
                            isLoading
                                ? <AdminCompetitorsLoader/>
                                : competitors?.length
                                    ? [...competitors].sort((a, b) => {
                                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                            return -1;
                                        }
                                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map(competitor =>
                                        <AdminCompetitorsItem
                                            key={competitor.id}
                                            competitor={competitor}
                                            setCompetitorId={setCompetitorId}
                                            setActiveModal={setActiveModal}
                                        />)
                                    : <div>Типы участников не найдены</div>
                        }
                    </div>
                </div>
            </AdminContent>

            <Modal
                title="Вы точно хотите удалить тип участника?"
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
                            deleteAsync(Number(competitorId));
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

export default AdminCompetitors;

