import React, {FC} from "react";
import styles from "./AdminEvents.module.scss";
import EventCard from "@/UI/EventCard/EventCard";
import {useEventsFetch} from "./useEventsFetch";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminEventsNavbar from "@/webpages/admin/AdminEvents/AdminEventsNavbar/AdminEventsNavbar";


const AdminEvents: FC = () => {
    const {data, isLoading} = useEventsFetch();
    const events = data?.data;

    return (
        <>
            <AdminEventsNavbar/>
            <AdminContent title="Мероприятия">
                <div className={styles.items}>
                    {
                        isLoading
                            ? <div>loading...</div>
                            : events?.length
                                ? events?.map(ev => <EventCard event={ev} key={ev.id} link={`/admin/events/${ev.id}`}/>)
                                : <div>Мероприятия не найдены</div>
                    }
                </div>
            </AdminContent>
        </>
    );
}

export default AdminEvents;

