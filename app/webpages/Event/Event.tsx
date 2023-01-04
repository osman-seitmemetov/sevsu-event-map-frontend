import React, {FC} from "react";
import styles from "./Event.module.scss";
import Container from "@/components/Container/Container";
import EventNav from "@/webpages/Event/EventNav/EventNav";
import {useEvent} from "@/webpages/Event/useEvent";
import EventContent from "@/components/EventContent/EventContent";
import EventsPrintItem from "@/components/EventsPrint/EventsPrintItem/EventsPrintItem";
import {IEvent} from "@/models/IEvent";
import {IEventOrganizer} from "@/models/IEventOrganizer";
import Meta from "@/utils/Meta/Meta";


const Event: FC<{ event: IEventOrganizer }> = ({}) => {
    const {data, isLoading} = useEvent();
    const event = data?.data[0];

    return (
        <Meta title={event?.title || "Мероприятие"} description="Карта инновационных мероприятий">
            <section className={styles.event}>
                <Container>
                    <EventNav/>
                    <EventContent event={event} isLoading={isLoading}/>
                </Container>
            </section>
        </Meta>
    );
}

export default Event;

