import React, {FC, useRef, useState} from "react";
import styles from "./FavouritesEventNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {useRouter} from "next/router";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {favouritesSlice} from "@/store/favourites/favouritesSlice";
import {useDispatch} from "react-redux";
import PrintButton from "@/UI/PrintButton/PrintButton";
import ShareModal from "@/UI/modals/ShareModal/ShareModal";
import {convertIdsToURL} from "@/utils/string/convertIdsToURL";


const FavouritesEventNav: FC = () => {
    const {query, push} = useRouter();
    const eventId = Number(query.id);
    const printContentRef = useRef<HTMLDivElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const {eventIds} = useTypedSelector(state => state.favouritesReducer);
    const eventIdIndex = eventIds.findIndex(id => id === eventId);
    const prevEventId = eventIdIndex > 0 ? eventIds[eventIdIndex - 1] : eventIds[eventIds.length - 1];
    const nextEventId = eventIdIndex < eventIds.length - 1 ? eventIds[eventIdIndex + 1] : eventIds[0];

    const {favouritesAdd, favouritesDelete} = favouritesSlice.actions;
    const dispatch = useDispatch();

    const prevHandler = () => {
        push(`/favourites/${prevEventId}`)
    }

    const nextHandler = () => {
        push(`/favourites/${nextEventId}`)
    }

    const deleteHandler = () => {
        dispatch(favouritesDelete(eventId))
        if(eventIds.length > 1) {
            push(`/favourites/${nextEventId}`)
        } else push(`/favourites`);
    }

    return (
        <nav className={styles.nav}>
            <Logo/>
            <div className={styles.right}>
                <PrimaryButton onClick={() => setIsActive(true)} className={styles.btn}>поделиться</PrimaryButton>

                <ReactToPrint
                    trigger={() => <PrintButton isLoading={isLoading} title="печать"/>}
                    content={() => printContentRef.current}
                    // onBeforePrint={() => setStr("before")}
                    // onAfterPrint={() => setStr("after")}
                />

                <PrimaryButton onClick={deleteHandler} className={styles.btn}>удалить из избранного</PrimaryButton>

                <Link href="/favourites">
                    <PrimaryButton className={styles.btn}>избранное</PrimaryButton>
                </Link>

                <EventsPrint setIsLoading={setIsLoading} eventIds={eventIds.filter(id => id === eventId)}
                             refContent={printContentRef}/>

                <div className={styles.arrows}>
                    <button
                        onClick={prevHandler}
                        className={`${styles.arrow} ${styles.arrow_prev}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4.29289 8.29292C4.68342 7.9024 5.31658 7.9024 5.70711 8.29292L12 14.5858L18.2929 8.29292C18.6834 7.9024 19.3166 7.9024 19.7071 8.29292C20.0976 8.68345 20.0976 9.31661 19.7071 9.70714L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L4.29289 9.70714C3.90237 9.31661 3.90237 8.68345 4.29289 8.29292Z"/>
                        </svg>
                    </button>

                    <span className={styles.indexes}>{eventIdIndex + 1} / {eventIds.length}</span>

                    <button
                        onClick={nextHandler}
                        className={`${styles.arrow} ${styles.arrow_next}`}
                    >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M4.29289 8.29292C4.68342 7.9024 5.31658 7.9024 5.70711 8.29292L12 14.5858L18.2929 8.29292C18.6834 7.9024 19.3166 7.9024 19.7071 8.29292C20.0976 8.68345 20.0976 9.31661 19.7071 9.70714L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L4.29289 9.70714C3.90237 9.31661 3.90237 8.68345 4.29289 8.29292Z"/>
                        </svg>
                    </button>
                </div>
            </div>

            <ShareModal
                modalTitle="Поделиться мероприятием"
                title=""
                url={`https://sevsu-event-map.onrender.com/event/${eventId}`}
                setIsActive={setIsActive}
                isActive={isActive}
            />
        </nav>
    );
}

export default FavouritesEventNav;

