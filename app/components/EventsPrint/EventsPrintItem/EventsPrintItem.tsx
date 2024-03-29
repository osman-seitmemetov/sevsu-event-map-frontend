import React, {FC} from 'react';
import styles from "./EventsPrintItem.module.scss";
import {IEventOrganizer} from "@/models/IEventOrganizer";
import QRCode from "react-qr-code";
import {joinBySemicolons} from "@/utils/string/joinBySemicolons";
import {convertPostgresDateToNormalDate} from "../../../helpers/date/convertPostgresDateToNormalDate";
import {APP_URL} from "@/config/API";


const EventsPrintItem: FC<{ event: IEventOrganizer }> = ({event}) => {
    return (
        <section className={styles.event}>
            {event && <div className={styles.title}>{event.title}</div>}

            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.infos}>
                        <div className={styles.info}>
                            <div className={styles.info}>
                                <span className={styles.info__title}>Организатор: </span>{event.organizer.name}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Тип финансирования: </span>{joinBySemicolons(event.founding_type)}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Виды участников: </span>{joinBySemicolons(event.competitors)}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Финансирование: </span>{`${new Intl.NumberFormat('ru-RU').format(event.founding_range.low)}р - ${new Intl.NumberFormat('ru-RU').format(event.founding_range.high)}р`}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Софинансирование: </span>{`${event.co_founding_range.low}% - ${event.co_founding_range.high}%`}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Срок подачи документов: </span>{`до ${convertPostgresDateToNormalDate(event.submission_deadline)}`}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Длительность реализации: </span>{event.realisation_period}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Тематики: </span>{joinBySemicolons(event.subjects)}
                            </div>

                            <div className={styles.info}>
                                <span
                                    className={styles.info__title}>Срок рассмотрения: </span>{event.consideration_period}
                            </div>

                            {
                                event.precursor && <div className={styles.info}>
                                    <span
                                        className={styles.info__title}>Мероприятие-прекурсор: </span>{event.precursor.title}
                                </div>
                            }

                            <div className={styles.info}>
                                <span className={styles.info__title}>TRL/УГТ: </span>{event.trl}
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlock__head}>
                            Контакты для консультаций внутри СевГУ
                        </div>

                        <div className={styles.infoBlock__items}>
                            {event.internal_contacts}
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <img className={styles.logo} src={event.organizer.logo} alt="logo"/>
                    <QRCode size={300} value={`${APP_URL}/event/${event.id}`}/>
                    <div className={styles.annotation}>Отсканируйте QR код, чтобы увидеть ссылки на файлы и сайты</div>
                </div>
            </div>

            <div className={styles.infoBlock}>
                <div className={styles.infoBlock__head}>
                    Результат
                </div>

                <div className={styles.infoBlock__items}>
                    {event.result}
                </div>
            </div>
        </section>
    );
};

export default EventsPrintItem;