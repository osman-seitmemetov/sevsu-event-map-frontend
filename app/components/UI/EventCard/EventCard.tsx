import React, {FC, ReactNode, useState} from "react";
import styles from "./EventCard.module.scss";
import DisabledBg from "@/assets/img/disabled_card.png";
import Link from "next/link";
import {IEvent} from "@/models/IEvent";
import {useOrganizer} from "@/hooks/useOrganizer";
import {useFetchOrganizerLevels} from "@/hooks/useFetchOrganizerLevels";
import Logo from "@/assets/img/edu_rf.png"
import {favouritesSlice} from "@/store/favourites/favouritesSlice";
import {useDispatch} from "react-redux";


interface EventCardProps {
    className?: string,
    link: string,
    event: IEvent,
    checkbox?: boolean,
    setEventId?: (eventId: number) => void;
    setActiveModal?: (activeModal: boolean) => void,
}

const EventCard: FC<EventCardProps> = ({className, link, event, checkbox, setEventId, setActiveModal}) => {
    const {data: organizerData} = useOrganizer(Number(event?.organizer));
    const {data: organizerLevelData} = useFetchOrganizerLevels();
    const organizer = organizerData?.data;
    // console.log(organizerLevelData?.data);
    // const organizerLevel = organizerLevelData?.data.find(organizerLevel => organizerLevel.id === organizer?.level);
    // console.log(organizer)

    const {favouritesSelect, favouritesDeselect} = favouritesSlice.actions;
    const dispatch = useDispatch();

    const [isActive, setIsActive] = useState<boolean>(false);

    const checkboxHandler = () => {
        if (isActive) {
            setIsActive(false);
            dispatch(favouritesDeselect(event));
        } else {
            setIsActive(true);
            dispatch(favouritesSelect(event));
        }
    }

    const deleteHandler = () => {
        if (setEventId && setActiveModal) {
            setEventId(event.id);
            setActiveModal(true);
        }
    }

    return (
        <div className={`${styles.item} ${styles.item_reg}`}>
            <div className={styles.content}>

                {/*ВРЕМЕННООООО*/}
                <img className={styles.logo} src={organizer ? organizer?.logo : Logo.src} alt="logo"/>

                <div className={styles.title}>{event?.title}</div>

                <div className={styles.property}>
                    <span>Финансирование:</span>&nbsp;
                    {event?.founding_range.low} - {event?.founding_range.high}р
                </div>

                <div className={styles.property}>
                    <span>Софинансирование:</span>&nbsp;
                    {event?.co_founding_range.low} - {event?.co_founding_range.high}₽
                </div>

                <div className={styles.property}>
                    <span>Финансирование:</span>&nbsp;
                    20 - 100млн
                </div>

                <div className={styles.property}>
                    <span>Финансирование:</span>&nbsp;
                    20 - 100млн
                </div>

                <div className={styles.property}>
                    <span>Финансирование:</span>&nbsp;
                    20 - 100млн
                </div>

                <div className={styles.property}>
                    <span>Финансирование:</span>&nbsp;
                    20 - 100млн
                </div>
            </div>

            <div className={styles.disabledBg} style={{backgroundImage: `url(${DisabledBg})`}}></div>

            <Link href={link} className={styles.link}></Link>

            <div className={styles.trls}>
                <div className={styles.trl}>1</div>
                <div className={styles.trl}>2</div>
            </div>

            {checkbox && <div onClick={checkboxHandler} className={styles.checkbox}>
                {isActive && <div className={styles.checkbox__dot}></div>}
            </div>}

            {
                setEventId && setActiveModal && <button className={styles.deleteBtn} onClick={deleteHandler}>
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.85873 4.02135L3.93499 3.93499C4.26543 3.60455 4.78539 3.57913 5.14499 3.85873L5.23135 3.93499L10.9998 9.70275L16.7683 3.93499C17.1263 3.57701 17.7067 3.57701 18.0647 3.93499C18.4227 4.29297 18.4227 4.87337 18.0647 5.23135L12.2969 10.9998L18.0647 16.7683C18.3951 17.0988 18.4205 17.6187 18.1409 17.9783L18.0647 18.0647C17.7342 18.3951 17.2143 18.4205 16.8547 18.1409L16.7683 18.0647L10.9998 12.2969L5.23135 18.0647C4.87337 18.4227 4.29297 18.4227 3.93499 18.0647C3.57701 17.7067 3.57701 17.1263 3.93499 16.7683L9.70275 10.9998L3.93499 5.23135C3.60455 4.90091 3.57913 4.38095 3.85873 4.02135L3.93499 3.93499L3.85873 4.02135Z"/>
                    </svg>
                </button>
            }
        </div>
    );
}

export default EventCard;