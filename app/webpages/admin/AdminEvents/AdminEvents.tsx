import React, {FC, useState} from "react";
import styles from "./AdminEvents.module.scss";
import EventCard from "@/UI/EventCard/EventCard";
import {useEventsFetch} from "./useEventsFetch";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminEventsNavbar from "@/webpages/admin/AdminEvents/AdminEventsNavbar/AdminEventsNavbar";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ButtonTransparent from "@/UI/buttons/ButtonTransparent/ButtonTransparent";
import Modal from "@/UI/modals/Modal/Modal";
import AdminEventsLoader from "@/webpages/admin/AdminEvents/AdminEventsLoader/AdminEventsLoader";


const AdminEvents: FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const [eventId, setEventId] = useState<number | null>(null);
    const {data, isLoading, deleteAsync} = useEventsFetch();
    const events = data?.data;

    return (
        <>
            <AdminEventsNavbar/>
            <AdminContent title="Мероприятия">
                <div className={styles.items}>
                    {
                        isLoading
                            ? <AdminEventsLoader />
                            : events?.length
                                ? events.map(ev => <EventCard
                                    eventMin={ev}
                                    key={ev.id}
                                    link={`/admin/events/${ev.id}`}
                                    setEventId={setEventId}
                                    setActiveModal={setActiveModal}
                                />)
                                : <div>Мероприятия не найдены</div>
                    }

                    <Modal
                        title="Вы точно хотите удалить мероприятие?"
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
                                    deleteAsync(Number(eventId));
                                    console.log(eventId)
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
                </div>
            </AdminContent>
        </>
    );
}

export default AdminEvents;

