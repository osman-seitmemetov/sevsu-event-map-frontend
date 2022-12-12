import React, {FC} from "react";
import styles from "./Event.module.scss";
import Container from "@/components/Container/Container";
import EventNav from "@/webpages/Event/EventNav/EventNav";
import {useEvent} from "@/webpages/Event/useEvent";
import EventContent from "@/components/EventContent/EventContent";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import EventsPrintItem from "@/components/EventsPrint/EventsPrintItem/EventsPrintItem";


const Event: FC = () => {
    const {data, isLoading} = useEvent();
    const event = data?.data[0];

    return (
        <section className={styles.event}>
            <Container>
                {/*{event && <EventsPrintItem event={event}/>}*/}
                <EventNav/>
                <EventContent isLoading={isLoading} event={event} />
            </Container>
        </section>
    );
}

export default Event;

