import React, {FC} from "react";
import styles from "./EventContent.module.scss";
import EventInfo from "./EventInfo/EventInfo";
import Dropdown from "@/UI/Dropdown/Dropdown";
import {convertPostgresDateToNormalDate} from "../../helpers/date/convertPostgresDateToNormalDate";
import {joinBySemicolons} from "@/utils/string/joinBySemicolons";
import {IEventOrganizer} from "@/models/IEventOrganizer";
import EventContentLoader from "@/components/EventContent/EvenContentLoader/EventContentLoader";


interface EventContentProps {
    isLoading: boolean,
    event?: IEventOrganizer
}

const EventContent: FC<EventContentProps> = ({isLoading, event}) => {
    return (
        <>
            {
                isLoading
                    ? <EventContentLoader/>
                    : event && <>
                    <img
                        src={event.organizer.logo}
                        className={styles.logo}
                        alt={event.organizer.name}
                    />

                    <div className={styles.title}>{event.title}</div>

                    <div className={styles.infos}>
                        <div className={styles.info}>
                            <EventInfo
                                title="Организатор" text={event.organizer.name}
                                // hint="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                            />

                            <EventInfo
                                title="Тип финансирования" text={joinBySemicolons(event.founding_type)}
                            />

                            <EventInfo
                                title="Виды участников" text={joinBySemicolons(event.competitors)}
                            />

                            <EventInfo
                                title="Финансирование"
                                text={`${new Intl.NumberFormat('ru-RU').format(event.founding_range.low)}р - ${new Intl.NumberFormat('ru-RU').format(event.founding_range.high)}р`}
                            />

                            <EventInfo
                                title="Софинансирование"
                                text={`${event.co_founding_range.low}% - ${event.co_founding_range.high}%`}
                            />

                            <EventInfo
                                title="Срок подачи документов"
                                text={`до ${convertPostgresDateToNormalDate(event.submission_deadline)}`}
                            />
                            <EventInfo
                                title="Длительность реализации" text={event.realisation_period}
                            />

                            <EventInfo
                                title="Тематики" text={joinBySemicolons(event.subjects)}
                            />

                            <EventInfo
                                title="Срок рассмотрения" text={event.consideration_period}
                            />

                            {
                                event.precursor && <EventInfo
                                    title="Мероприятие-прекурсор" text={event.precursor.title}
                                />
                            }

                            <EventInfo
                                title="TRL/УГТ" text={String(event.trl)}
                            />

                            {
                                event.precursor && <EventInfo
                                    title="Сайт мероприятия-прекурсора" link={event.precursor.site}
                                />
                            }

                            <EventInfo
                                title="Сайт мероприятия" link={event.site}
                            />
                        </div>

                        <div className={`${styles.info} ${styles.info_scrollable}`}>
                            <Dropdown isBig title="Регламентирующие документы">
                                <div className={styles.dropContent}>
                                    {event.document}
                                </div>
                            </Dropdown>

                            <Dropdown isBig title="Контакты для консультаций внутри СевГУ">
                                <div className={styles.dropContent}>
                                    {event.internal_contacts}
                                </div>
                            </Dropdown>

                            <Dropdown isBig title="Результат">
                                <div className={styles.dropContent}>
                                    {event.result}
                                </div>
                            </Dropdown>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default EventContent;

