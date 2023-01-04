import React, {FC} from "react";
import styles from "./FavouritesEvent.module.scss";
import Container from "@/components/Container/Container";
import {useRouter} from "next/router";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import FavouritesEventNav from "@/webpages/FavouritesEvent/FavouritesEventNav/FavouritesEventNav";
import Error404 from "../../../pages/404";
import {useEventsByIds} from "@/hooks/useEventsByIds";
import EventContent from "@/components/EventContent/EventContent";
import Meta from "@/utils/Meta/Meta";


const FavouritesEvent: FC = () => {
    const {query} = useRouter();
    const eventId = Number(query.id);
    const {data, isLoading} = useEventsByIds([eventId]);
    const event = data?.data[0];

    const {eventIds} = useTypedSelector(state => state.favouritesReducer);
    if (eventIds.filter(id => id === eventId).length === 0) return <Error404/>;

    return (
        <Meta title={event?.title || "Мероприятие"} description="Карта инновационных мероприятий">
            <section className={styles.event}>
                <Container>
                    <FavouritesEventNav/>
                    <EventContent isLoading={isLoading} event={event}/>
                </Container>
            </section>
        </Meta>
    );
}

export default FavouritesEvent;

