import React, {FC} from "react";
import styles from "./FavouritesEvent.module.scss";
import Container from "@/components/Container/Container";
import MinRF from "@/assets/img/min_rf.png"
import Dropdown from "@/UI/Dropdown/Dropdown";
import {useRouter} from "next/router";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import FavouritesEventInfo from "@/webpages/FavouritesEvent/FavouritesEventInfo/FavouritesEventInfo";
import FavouritesEventNav from "@/webpages/FavouritesEvent/FavouritesEventNav/FavouritesEventNav";
import Error404 from "../../../pages/404";
import {useEventsByIds} from "@/hooks/useEventsByIds";
import EventContent from "@/components/EventContent/EventContent";


const FavouritesEvent: FC = () => {
    const {query} = useRouter();
    const eventId = Number(query.id);
    const {data, isLoading} = useEventsByIds([eventId]);
    const event = data?.data[0];

    const {eventIds} = useTypedSelector(state => state.favouritesReducer);
    if (eventIds.filter(id => id === eventId).length === 0) return <Error404/>;

    return (
        <section className={styles.event}>
            <Container>
                <FavouritesEventNav/>

                <EventContent isLoading={isLoading} event={event} />
            </Container>
        </section>
    );
}

export default FavouritesEvent;

