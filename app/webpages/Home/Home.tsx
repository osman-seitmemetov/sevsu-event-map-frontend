import React, {FC} from "react";
import styles from "./Home.module.scss";
import HomeEventsFilter from "@/webpages/Home/HomeEventsFilter/HomeEventsFilter";
import HomeEventsGrid from "@/webpages/Home/HomeEventsGrid/HomeEventsGrid";
import Container from "@/components/Container/Container";
import HomeNav from "@/webpages/Home/HomeNav/HomeNav";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useEventMins} from "@/hooks/useEventMins";


const Home: FC = () => {
    return (
        <section className={styles.home}>
            <Container>
                <div className={styles.content}>
                    <HomeNav/>
                    <HomeEventsGrid/>
                </div>

                <HomeEventsFilter/>
            </Container>
        </section>
    );
}

export default Home;

