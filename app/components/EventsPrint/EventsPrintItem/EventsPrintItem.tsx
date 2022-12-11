import React, {FC} from 'react';
import styles from "./EventsPrintItem.module.scss";
import Logo from "@/assets/img/edu_rf.png"
import QR from "@/assets/img/qr.jpg"
import {IEventOrganizer} from "@/models/IEventOrganizer";
import QRCode from "react-qr-code";
import {joinBySemicolons} from "@/utils/string/joinBySemicolons";
import {convertPostgresDateToNormalDate} from "../../../helpers/date/convertPostgresDateToNormalDate";


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
                                <span className={styles.info__title}>Тип финансирования: </span>{joinBySemicolons(event.founding_type)}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Виды участников: </span>{joinBySemicolons(event.competitors)}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Финансирование: </span>{`${new Intl.NumberFormat('ru-RU').format(event.founding_range.low)}р - ${new Intl.NumberFormat('ru-RU').format(event.founding_range.high)}р`}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Софинансирование: </span>{`${event.co_founding_range.low}% - ${event.co_founding_range.high}%`}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Срок подачи документов: </span>{`до ${convertPostgresDateToNormalDate(event.submission_deadline)}`}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Длительность реализации: </span>{event.realisation_period}
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Тематики: </span>попозже будет готово
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Срок рассмотрения: </span>{event.consideration_period}
                            </div>

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
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 1</a>*/}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 2</a>*/}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 3</a>*/}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 4</a>*/}
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlock__head}>
                            Результат
                        </div>

                        <div className={styles.infoBlock__items}>
                            {event.result}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 1</a>*/}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 2</a>*/}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 3</a>*/}
                            {/*<a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 4</a>*/}
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <img className={styles.logo} src={event.organizer.logo} alt="logo"/>
                    <QRCode size={300} value={`https://sevsu-event-map.onrender.com/event/${event.id}`} />
                    <div className={styles.annotation}>Отсканируйте QR код, чтобы увидеть ссылки на файлы и сайты</div>
                </div>
            </div>
        </section>
    );
};

export default EventsPrintItem;