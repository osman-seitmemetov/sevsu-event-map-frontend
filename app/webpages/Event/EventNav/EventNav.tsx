import React, {FC, useRef, useState,} from "react";
import styles from "./EventNav.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {favouritesSlice} from "@/store/favourites/favouritesSlice";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import PrintButton from "@/UI/PrintButton/PrintButton";
import ShareModal from "@/UI/modals/ShareModal/ShareModal";
import FavouritesButton from "@/components/FavouritesButton/FavouritesButton";
import {APP_URL} from "@/config/API";
import {useActions} from "@/hooks/useActions";
import {FavouritesService} from "@/services/FavouritesService";
import {useAuth} from "@/hooks/useAuth";


export interface EventNavProps {
    // event: IEvent,
    // organizer: IOrganizer
}

const EventNav: FC<EventNavProps> = () => {
    const printContentRef = useRef<HTMLDivElement>(null);
    const {eventIds} = useTypedSelector(state => state.favouritesReducer);
    const {favouritesAdd, favouritesDelete} = useActions();
    const {query} = useRouter();
    const eventId = Number(query.id);
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const {user, isAuthorized} = useAuth();

    const addHandler = () => {
        favouritesAdd(eventId);
        if(isAuthorized && user) FavouritesService.updateFavourites(user.id, [...eventIds, eventId]);
    }

    const deleteHandler = () => {
        favouritesDelete(eventId);
        if(isAuthorized && user) FavouritesService.updateFavourites(user.id, eventIds.filter((n) => n != eventId));
    }

    return (
        <nav className={styles.nav}>
            <Logo/>
            <div className={styles.right}>
                <PrimaryButton onClick={() => setIsActive(true)} className={styles.btn}>Поделиться</PrimaryButton>

                <ReactToPrint
                    trigger={() => <PrintButton title="Печать" isLoading={isLoading} />}
                    content={() => printContentRef.current}
                    // onBeforePrint={() => setStr("before")}
                    // onAfterPrint={() => setStr("after")}
                />

                {
                    eventIds?.find(id => id === eventId)
                        ? <PrimaryButton onClick={deleteHandler} className={styles.btn}>удалить из избранного</PrimaryButton>
                        : <PrimaryButton onClick={addHandler} className={styles.btn}>Добавить в избранное</PrimaryButton>
                }

                <EventsPrint setIsLoading={setIsLoading} eventIds={[eventId]} refContent={printContentRef}/>

                <FavouritesButton className={styles.btn} />
            </div>

            <ShareModal
                modalTitle="Поделиться мероприятием"
                title=""
                url={`${APP_URL}/event/${eventId}`}
                setIsActive={setIsActive}
                isActive={isActive}
            />
        </nav>
    );
}

export default EventNav;

