import React, {FC, useRef, useState,} from "react";
import styles from "./EventNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {IEvent} from "@/models/IEvent";
import {IOrganizer} from "@/models/IOrganizer";
import {favouritesSlice} from "@/store/favourites/favouritesSlice";
import {useDispatch} from "react-redux";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";
import PrintButton from "@/UI/PrintButton/PrintButton";
import Modal from "@/UI/modals/Modal/Modal";
import QRCode from "react-qr-code";
import {convertIdsToURL} from "@/utils/string/convertIdsToURL";
import ShareModal from "@/UI/modals/ShareModal/ShareModal";


export interface EventNavProps {
    // event: IEvent,
    // organizer: IOrganizer
}

const EventNav: FC<EventNavProps> = () => {
    const printContentRef = useRef<HTMLDivElement>(null);
    const {eventIds} = useTypedSelector(state => state.favouritesReducer);
    const {favouritesAdd, favouritesDelete} = favouritesSlice.actions;
    const dispatch = useDispatch();
    const {query} = useRouter();
    const eventId = Number(query.id);
    const [isLoading, setIsLoading] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const {asPath} = useRouter();

    const addHandler = () => {
        dispatch(favouritesAdd(eventId))
    }

    const deleteHandler = () => {
        dispatch(favouritesDelete(eventId))
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

                <Link href="/favourites">
                    <PrimaryButton className={styles.btn}>избранное</PrimaryButton>
                </Link>
            </div>

            <ShareModal
                modalTitle="Поделиться мероприятием"
                title=""
                url={`https://sevsu-event-map.onrender.com/event/${eventId}`}
                setIsActive={setIsActive}
                isActive={isActive}
            />
            {/*<Modal title="Отсканируйте QR код" active={isActive} setActive={setIsActive}>*/}
            {/*    <QRCode size={400} value={`https://sevsu-event-map.onrender.com${asPath}`} />*/}
            {/*</Modal>*/}
        </nav>
    );
}

export default EventNav;

