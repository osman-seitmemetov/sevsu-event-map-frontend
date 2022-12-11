import React, {FC} from "react";
import styles from "./Favourites.module.scss";
import Container from "@/components/Container/Container";
import FavouritesNav from "@/webpages/Favourites/FavouritesNav/FavouritesNav";
import EventCard from "@/UI/EventCard/EventCard";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import QRCode from "react-qr-code";
import {IEventMin} from "@/models/IEvent";
import {useEventMinsByIds} from "@/hooks/useEventMinsByIds";


const Favourites: FC = () => {
    const {eventIds} = useTypedSelector(state => state.favouritesReducer);


    const {data, isLoading} = useEventMinsByIds(eventIds);
    const eventMins = data?.data;

    return (
        <section className={styles.favourites}>
            <Container>
                <FavouritesNav/>

                <div className={styles.title}>Избранное</div>

                <div className={styles.items}>
                    {
                        eventIds.length > 0 ? isLoading
                                ? <div>loading...</div>
                                : eventMins && eventIds.length > 0 && eventMins.map(ev =>
                                <EventCard
                                    key={ev.id}
                                    checkbox={eventIds.length > 1}
                                    link={`/favourites/${ev.id}`} eventMin={ev}
                                />)
                            : <div>Нет мероприятий</div>
                    }
                </div>
            </Container>
        </section>
    );
}

export default Favourites;

