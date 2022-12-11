import React, {FC, useState} from "react";
import styles from "./EventCard.module.scss";
import DisabledBg from "@/assets/img/disabled_card.png";
import Link from "next/link";
import {IEventMin} from "@/models/IEvent";
import {favouritesSlice} from "@/store/favourites/favouritesSlice";
import {useDispatch} from "react-redux";
import {joinBySemicolons} from "@/utils/string/joinBySemicolons";
import {convertPostgresDateToNormalDate} from "../../../helpers/date/convertPostgresDateToNormalDate";


interface EventCardProps {
    className?: string,
    link: string,
    eventMin: IEventMin,
    checkbox?: boolean,
    setEventId?: (eventId: number) => void;
    setActiveModal?: (activeModal: boolean) => void,
}

const EventCard: FC<EventCardProps> = ({className, link, eventMin, checkbox, setEventId, setActiveModal}) => {
    const {favouritesSelect, favouritesDeselect} = favouritesSlice.actions;
    const dispatch = useDispatch();
    const [isCheckboxActive, setIsCheckboxActive] = useState<boolean>(false);
    const sortedCompetitors = eventMin.competitors.sort((a, b) => a - b);

    const checkboxHandler = () => {
        if (isCheckboxActive) {
            setIsCheckboxActive(false);
            dispatch(favouritesDeselect(eventMin.id));
        } else {
            setIsCheckboxActive(true);
            dispatch(favouritesSelect(eventMin.id));
        }
    }

    const deleteHandler = () => {
        if (setEventId && setActiveModal) {
            setEventId(eventMin.id);
            setActiveModal(true);
        }
    }

    return (
        <div className={`${styles.item} ${eventMin.organizer.level === "FED" ? styles.item_fed : eventMin.organizer.level === "REG" ? styles.item_reg : eventMin.organizer.level === "SCI" ? styles.item_sci : eventMin.organizer.level === "EDU" && styles.item_edu} ${className}`}>
            <div className={styles.content}>
                <img className={styles.logo} src={eventMin.organizer.logo} alt={eventMin.title}/>

                <div className={styles.title}>{eventMin?.title}</div>

                <div className={styles.property}>
                    <span>Финансирование:</span> {new Intl.NumberFormat('ru-RU').format(eventMin.founding_range.low)}р - {new Intl.NumberFormat('ru-RU').format(eventMin.founding_range.high)}р
                </div>

                <div className={styles.property}>
                    <span>Софинансирование:</span> {eventMin.co_founding_range.low}% - {eventMin.co_founding_range.high}%
                </div>

                <div className={styles.property}>
                    <span>Тип финансирования:</span> {joinBySemicolons(eventMin.founding_type)}
                </div>

                <div className={styles.property}>
                    <span>Срок подачи документов:</span> до {convertPostgresDateToNormalDate(eventMin.submission_deadline)}
                </div>

                <div className={styles.property}>
                    <span>Длительность реализации:</span> {eventMin.realisation_period}
                </div>
            </div>

            <div className={styles.disabledBg} style={{backgroundImage: `url(${DisabledBg})`}}></div>

            <Link href={link} className={styles.link}></Link>

            <div className={styles.trls}>
                {
                    sortedCompetitors.map(competitor => <div key={competitor} className={styles.trl}>{competitor}</div>)
                }
            </div>

            {checkbox && <div onClick={checkboxHandler} className={styles.checkbox}>
                {isCheckboxActive && <div className={styles.checkbox__dot}></div>}
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