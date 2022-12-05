import {FC} from "react";
import styles from "./EventCard.module.scss";
import DisabledBg from "@/assets/img/disabled_card.png";
import Link from "next/link";
import {IEvent} from "@/models/IEvent";
import {useOrganizer} from "@/hooks/useOrganizer";
import {useFetchOrganizerLevels} from "@/hooks/useFetchOrganizerLevels";


interface EventCardProps {
    className?: string,
    link: string,
    event: IEvent
}

const EventCard: FC<EventCardProps> = ({className, link, event}) => {
    const {data: organizerData} = useOrganizer(event?.organizer);
    const {data: organizerLevelData} = useFetchOrganizerLevels();
    const organizer = organizerData?.data;
    console.log(organizerLevelData?.data);
    const organizerLevel = organizerLevelData?.data.find(organizerLevel => organizerLevel.id === organizer?.level);
    console.log(organizer)

    return (
        <Link href={link}>
            {
                organizer && <div className={`${styles.item} ${organizerLevel?.code === "FED" ? styles.item_fed : organizerLevel?.code === "REG" ? styles.item_reg : organizerLevel?.code === "SCI" ? styles.item_sci : organizerLevel?.code === "EDU" && styles.item_edu}`}>
                    <div className={styles.content}>
                        <img className={styles.logo} src={organizer?.logo} alt="logo"/>

                        <div className={styles.title}>{event.title}</div>

                        <div className={styles.property}>
                            <span>Финансирование:</span>&nbsp;
                            {event.founding_range.low} - {event.founding_range.high}р
                        </div>

                        <div className={styles.property}>
                            <span>Софинансирование:</span>&nbsp;
                            {event.co_founding_range.low} - {event.co_founding_range.high}₽
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

                    {/*<div className={styles.disabledBg} style={{backgroundImage: `url(${DisabledBg})`}}></div>*/}

                    <div className={styles.trls}>
                        <div className={styles.trl}>1</div>
                        <div className={styles.trl}>2</div>
                    </div>
                </div>
            }
        </Link>
    );
}

export default EventCard;