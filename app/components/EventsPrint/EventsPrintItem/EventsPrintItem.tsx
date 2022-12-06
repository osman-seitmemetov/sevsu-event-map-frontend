import React, {FC, ReactNode} from 'react';
import styles from "./EventsPrintItem.module.scss";
import {IEvent} from "@/models/IEvent";
import Logo from "@/assets/img/edu_rf.png"
import QR from "@/assets/img/qr.jpg"


const EventsPrintItem: FC<{ event: IEvent }> = ({event}) => {
    return (
        <section className={styles.event}>
            <div className={styles.title}>{event.title}</div>

            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.infos}>
                        <div className={styles.info}>
                            <div className={styles.info}>
                                <span className={styles.info__title}>Организатор:&nbsp;</span>Минцифры России
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Тип финансирования:&nbsp;</span>грант,
                                субсидирование банковского процента
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Виды участников:&nbsp;</span>частное лицо,
                                университет
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Финансирование:&nbsp;</span>20 - 100млн
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Софинансирование:&nbsp;</span>10 - 50млн
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Срок подачи документов:&nbsp;</span>до
                                12.12.2023
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Длительность реализации:&nbsp;</span>3 года
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Тематики:&nbsp;</span>тематика 1, тематика
                                2, тематика 3
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>Срок рассмотрения:&nbsp;</span>до
                                12.12.2023
                            </div>

                            <div className={styles.info}>
                                <span className={styles.info__title}>TRL/УГТ:&nbsp;</span>2
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlock__head}>
                            Контакты для консультаций внутри СевГУ
                        </div>

                        <div className={styles.infoBlock__items}>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 1</a>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 2</a>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 3</a>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 4</a>
                        </div>
                    </div>

                    <div className={styles.infoBlock}>
                        <div className={styles.infoBlock__head}>
                            Результат
                        </div>

                        <div className={styles.infoBlock__items}>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 1</a>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 2</a>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 3</a>
                            <a href="" target="_blank" className={styles.infoBlock__item}>Ссылка 4</a>
                        </div>
                    </div>
                </div>

                <div className={styles.right}>
                    <img className={styles.logo} src={Logo.src} alt="logo"/>

                    <img className={styles.qr} src={QR.src} alt="QR"/>

                    <div className={styles.annotation}>Отсканируйте QR код, чтобы увидеть ссылки на файлы и сайты</div>
                </div>
            </div>
        </section>
    );
};

export default EventsPrintItem;