import React, {FC, RefObject} from "react";
import styles from "./Event.module.scss";
import Container from "@/components/Container/Container";
import EventNav from "@/webpages/Event/EventNav/EventNav";
import MinRF from "@/assets/img/min_rf.png"
import EventInfo from "@/webpages/Event/EventInfo/EventInfo";
import Dropdown from "@/UI/Dropdown/Dropdown";
import {useEvent} from "@/webpages/Event/useEvent";
import {useOrganizer} from "@/hooks/useOrganizer";
import {joinByVerticalLine} from "@/utils/string/joinByVerticalLine";
import {convertPostgresDateToNormalDate} from "../../helpers/date/convertPostgresDateToNormalDate";


const Event: FC = () => {
    const {data: eventData, isLoading: isEventLoading} = useEvent();
    const event = eventData?.data;
    const {data: organizerData, isLoading: isOrganizerLoading} = useOrganizer(Number(event?.organizer));
    const organizer = organizerData?.data;

    return (
        <section className={styles.event}>
            <Container>
                <EventNav/>

                {
                    isEventLoading
                        ? <div>loading...</div>
                        : event && <>
                        {
                            isOrganizerLoading
                                ? <div>loading...</div>
                                : organizer && <img
                                src={organizer.logo}
                                className={styles.logo}
                                alt={organizer.name}
                            />
                        }

                        <div className={styles.title}>{event.title}</div>

                        <div className={styles.infos}>
                            <div className={styles.info}>
                                <EventInfo
                                    title="Организатор" text={organizer?.name}
                                    // hint="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                                />

                                <EventInfo
                                    title="Тип финансирования" text="грант, субсидирование банковского процента"
                                />

                                <EventInfo
                                    title="Виды участников" text="частное лицо, университет"
                                />

                                <EventInfo
                                    title="Финансирование" text={`${event.founding_range.low} - ${event.founding_range.high}р`}
                                />

                                <EventInfo
                                    title="Софинансирование" text={`${event.co_founding_range.low} - ${event.co_founding_range.high}%`}
                                />

                                <EventInfo
                                    title="Срок подачи документов" text={`до ${convertPostgresDateToNormalDate(event.submission_deadline)}`}
                                />
                                <EventInfo
                                    title="Длительность реализации" text={event.realisation_period}
                                />

                                <EventInfo
                                    title="Тематики" text={joinByVerticalLine(event.subjects)}
                                />

                                <EventInfo
                                    title="Срок рассмотрения" text={event.consideration_period}
                                />

                                {
                                    event.precursor && <EventInfo
                                        title="Мероприятие-прекурсор" text="Минцифры России"
                                    />
                                }

                                <EventInfo
                                    title="TRL/УГТ" text={String(event.trl)}
                                />

                                {
                                    event.precursor && <EventInfo
                                        title="Сайт мероприятия-прекурсора" link="Минцифры России"
                                    />
                                }

                                <EventInfo
                                    title="Сайт мероприятия" link={event.site}
                                />
                            </div>

                            <div className={`${styles.info} ${styles.info_scrollable}`}>
                                <Dropdown isBig title="Регламентирующие документы">
                                    <div className={styles.docs}>
                                        <a href="" target="_blank" className={styles.doc}>Ссылка 1</a>
                                        <a href="" target="_blank" className={styles.doc}>Ссылка 2</a>
                                        <a href="" target="_blank" className={styles.doc}>Ссылка 3</a>
                                        <a href="" target="_blank" className={styles.doc}>Ссылка 4</a>
                                    </div>
                                </Dropdown>

                                <Dropdown isBig title="Контакты для консультаций внутри СевГУ">
                                    dd
                                </Dropdown>

                                <Dropdown isBig title="Результат">
                                    dd
                                </Dropdown>
                            </div>
                        </div>
                    </>
                }
            </Container>
        </section>
    );
}

export default Event;

