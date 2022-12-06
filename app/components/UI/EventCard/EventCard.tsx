import {FC, useState} from "react";
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
    checkbox?: boolean
}

const EventCard: FC<EventCardProps> = ({className, link, event, checkbox}) => {
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
        if(isActive) {
            setIsActive(false);
            dispatch(favouritesDeselect(event));
        } else {
            setIsActive(true);
            dispatch(favouritesSelect(event));
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
        </div>
    );
}

export default EventCard;