import React, {FC} from "react";
import styles from "./Shared.module.scss";
import Container from "@/components/Container/Container";
import EventCard from "@/UI/EventCard/EventCard";
import {useRouter} from "next/router";
import Error404 from "../../../pages/404";
import SharedNav from "@/webpages/Shared/SharedNav/SharedNav";
import {useEventMinsByIds} from "@/hooks/useEventMinsByIds";
import SharedLoader from "@/webpages/Shared/SharedLoader/SharedLoader";


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
                            ? <SharedLoader />
                            : eventMins && eventMins.map(ev => <EventCard key={ev.id} link={`/event/${ev.id}`} eventMin={ev}/>)
                    }
                </div>
            </Container>
        </section>
    );
}

export default Shared;

