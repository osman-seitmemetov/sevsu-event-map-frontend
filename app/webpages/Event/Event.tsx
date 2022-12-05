import React, {FC} from "react";
import styles from "./Event.module.scss";
import Container from "@/components/Container/Container";
import EventNav from "@/webpages/Event/EventNav/EventNav";
import MinRF from "@/assets/img/min_rf.png"
import EventInfo from "@/webpages/Event/EventInfo/EventInfo";
import Dropdown from "@/UI/Dropdown/Dropdown";


const Event: FC = () => {
    return (
        <section className={styles.event}>
            <Container>
                <EventNav/>

                <img
                    src={MinRF.src}
                    className={styles.logo}
                    alt="eventName"
                />

                <div className={styles.title}>Название мероприятия</div>

                <div className={styles.infos}>
                    <div className={styles.info}>
                        <EventInfo
                            title="Организатор" text="Минцифры России"
                            hint="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                        />

                        <EventInfo
                            title="Тип финансирования" text="грант, субсидирование банковского процента"
                        />

                        <EventInfo
                            title="Виды участников" text="частное лицо, университет"
                        />

                        <EventInfo
                            title="Финансирование" text="20 - 100млн"
                        />

                        <EventInfo
                            title="Софинансирование" text="10 - 50"
                        />

                        <EventInfo
                            title="Срок подачи документов" text="до 12.12.2023"
                        />
                        <EventInfo
                            title="Длительность реализации" text="3 года"
                        />

                        <EventInfo
                            title="Тематики" text="тематика 1, тематика 2, тематика 3"
                        />

                        <EventInfo
                            title="Срок рассмотрения" text="до 12.12.2023"
                        />

                        <EventInfo
                            title="Мероприятие-прекурсор" text="Минцифры России"
                        />

                        <EventInfo
                            title="TRL/УГТ" text="4"
                        />

                        <EventInfo
                            title="Сайт мероприятия-прекурсора" link="Минцифры России"
                        />

                        <EventInfo
                            title="Сайт мероприятия" link="Минцифры России"
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

                        </Dropdown>

                        <Dropdown isBig title="Результат">

                        </Dropdown>

                        <Dropdown isBig title="Результат">

                        </Dropdown>

                        <Dropdown isBig title="Результат">

                        </Dropdown>

                        <Dropdown isBig title="Результат">

                        </Dropdown>

                        <Dropdown isBig title="Результат">

                        </Dropdown>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Event;

