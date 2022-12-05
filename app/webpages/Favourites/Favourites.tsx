import React, {FC} from "react";
import styles from "./Favourites.module.scss";
import Container from "@/components/Container/Container";
import EventNav from "@/webpages/Event/EventNav/EventNav";
import MinRF from "@/assets/img/min_rf.png"
import EventInfo from "@/webpages/Event/EventInfo/EventInfo";
import Dropdown from "@/UI/Dropdown/Dropdown";
import FavouritesNav from "@/webpages/Favourites/FavouritesNav/FavouritesNav";
import EventCard from "@/UI/EventCard/EventCard";


const Favourites: FC = () => {
    return (
        <section className={styles.favourites}>
            <Container>
                <FavouritesNav/>

                <div className={styles.title}>Избранное</div>

                <div className={styles.items}>
                    <EventCard link="" />
                    <EventCard link="" />
                    <EventCard link="" />
                    <EventCard link="" />
                    <EventCard link="" />
                    <EventCard link="" />
                </div>
            </Container>
        </section>
    );
}

export default Favourites;

