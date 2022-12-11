import React, {FC} from "react";
import styles from "./Shared.module.scss";
import Container from "@/components/Container/Container";
import FavouritesNav from "@/webpages/Favourites/FavouritesNav/FavouritesNav";
import EventCard from "@/UI/EventCard/EventCard";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import Error404 from "../../../pages/404";
import {TelegramIcon, TelegramShareButton, VKIcon, VKShareButton} from "react-share";
import SharedNav from "@/webpages/Shared/SharedNav/SharedNav";
import {useEventsByIds} from "@/hooks/useEventsByIds";
import {useEventMinsByIds} from "@/hooks/useEventMinsByIds";


const Shared: FC = () => {
    const {query} = useRouter();
    const ids = typeof query.id === "object" ? query.id.map(ft => +ft) : [];

    const {data, isLoading, error} = useEventMinsByIds(ids);
    const eventMins = data?.data;

    if (!query.id) return <Error404/>;

    return (
        <section className={styles.favourites}>
            <Container>
                <SharedNav eventIds={ids}/>

                <div className={styles.title}>Мероприятия, которыми поделились</div>

                <div className={styles.items}>
                    {
                        isLoading
                            ? <div>loading...</div>
                            : eventMins && eventMins.map(ev => <EventCard key={ev.id} link={`/event/${ev.id}`} eventMin={ev}/>)
                    }
                </div>
            </Container>
        </section>
    );
}

export default Shared;

