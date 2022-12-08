import React, {FC} from "react";
import styles from "./Favourites.module.scss";
import Container from "@/components/Container/Container";
import FavouritesNav from "@/webpages/Favourites/FavouritesNav/FavouritesNav";
import EventCard from "@/UI/EventCard/EventCard";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {favouritesSlice} from "@/store/favourites/favouritesSlice";
import {useDispatch} from "react-redux";


const Favourites: FC = () => {
    const {events, eventsSelected} = useTypedSelector(state => state.favouritesReducer);

    return (
        <section className={styles.favourites}>
            <Container>
                <FavouritesNav/>

                <div className={styles.title}>Избранное</div>

                <div className={styles.items}>
                    {
                        events.map(ev => <EventCard key={ev.id} checkbox link={`/favourites/${ev.id}`} event={ev} />)
                    }
                </div>
            </Container>
        </section>
    );
}

export default Favourites;

