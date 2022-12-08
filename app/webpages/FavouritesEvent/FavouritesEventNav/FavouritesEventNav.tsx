import React, {FC, useRef} from "react";
import styles from "./FavouritesEventNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {useRouter} from "next/router";
import {useTypedSelector} from "@/hooks/useTypedSelector";


const FavouritesEventNav: FC = () => {
    const {query, push} = useRouter();
    const eventId = Number(query.id);
    const printContentRef = useRef<HTMLDivElement>(null);

    const {events} = useTypedSelector(state => state.favouritesReducer);
    const eventIndex = events.findIndex(ev => ev.id === eventId);
    const prevEventId = eventIndex > 0 ? events[eventIndex - 1].id : events[events.length - 1].id;
    const nextEventId = eventIndex < events.length - 1 ? events[eventIndex + 1].id : events[0].id;

    const prevHandler = () => {
        push(`/favourites/${prevEventId}`)
    }

    const nextHandler = () => {
        push(`/favourites/${nextEventId}`)
    }

    return (
        <nav className={styles.nav}>
            <Logo/>
            <div className={styles.right}>
                <PrimaryButton className={styles.btn}>показать qr код</PrimaryButton>

                <ReactToPrint
                    trigger={() => <PrimaryButton className={styles.btn}>печать</PrimaryButton>}
                    content={() => printContentRef.current}
                    // onBeforePrint={() => setStr("before")}
                    // onAfterPrint={() => setStr("after")}
                />

                <Link href="/favourites/index" className={styles.btn}>
                    <PrimaryButton>удалить из избранного</PrimaryButton>
                </Link>

                <EventsPrint events={events.filter(ev => ev.id === eventId)} refContent={printContentRef}/>

                <div className={styles.arrows}>
                    <button
                        onClick={prevHandler}
                        className={`${styles.arrow} ${styles.arrow_prev}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29292C4.68342 7.9024 5.31658 7.9024 5.70711 8.29292L12 14.5858L18.2929 8.29292C18.6834 7.9024 19.3166 7.9024 19.7071 8.29292C20.0976 8.68345 20.0976 9.31661 19.7071 9.70714L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L4.29289 9.70714C3.90237 9.31661 3.90237 8.68345 4.29289 8.29292Z"/>
                        </svg>
                    </button>

                    <span className={styles.indexes}>{eventIndex + 1} / {events.length}</span>

                    <button
                        onClick={nextHandler}
                        className={`${styles.arrow} ${styles.arrow_next}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29292C4.68342 7.9024 5.31658 7.9024 5.70711 8.29292L12 14.5858L18.2929 8.29292C18.6834 7.9024 19.3166 7.9024 19.7071 8.29292C20.0976 8.68345 20.0976 9.31661 19.7071 9.70714L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L4.29289 9.70714C3.90237 9.31661 3.90237 8.68345 4.29289 8.29292Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default FavouritesEventNav;

