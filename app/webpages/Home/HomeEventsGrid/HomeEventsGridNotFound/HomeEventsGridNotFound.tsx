import React, {FC} from "react";
import styles from "./HomeEventsGridNotFound.module.scss";


interface HomeEventsGridNotFoundProps {
}

const HomeEventsGridNotFound: FC<HomeEventsGridNotFoundProps> = () => {
    return (
        <div className={styles.eventGrid}>
            <div className={styles.title}>Простите, по вашему запросу мероприятий сейчас нет.</div>
        </div>
    );
}

export default HomeEventsGridNotFound;

