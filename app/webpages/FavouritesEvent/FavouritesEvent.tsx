import React, {FC} from "react";
import styles from "./FavouritesEvent.module.scss";
import Container from "@/components/Container/Container";
import MinRF from "@/assets/img/min_rf.png"
import Dropdown from "@/UI/Dropdown/Dropdown";
import {useRouter} from "next/router";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import FavouritesEventInfo from "@/webpages/FavouritesEvent/FavouritesEventInfo/FavouritesEventInfo";
import FavouritesEventNav from "@/webpages/FavouritesEvent/FavouritesEventNav/FavouritesEventNav";


const FavouritesEvent: FC = () => {
    const {query} = useRouter();
    const eventId = Number(query.id);

    const {events} = useTypedSelector(state => state.favouritesReducer);

    const event = events.find(ev => ev.id === eventId);

    return (
        <section className={styles.event}>
            <Container>
                <FavouritesEventNav/>

                <img
                    src={MinRF.src}
                    className={styles.logo}
                    alt="eventName"
                />

                <div className={styles.title}>{event?.title}</div>

                <div className={styles.infos}>
                    <div className={styles.info}>
                        <FavouritesEventInfo
                            title="Организатор" text="Минцифры России"
                            hint="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                        />

                        <FavouritesEventInfo
                            title="Тип финансирования" text="грант, субсидирование банковского процента"
                        />

                        <FavouritesEventInfo
                            title="Виды участников" text="частное лицо, университет"
                        />

                        <FavouritesEventInfo
                            title="Финансирование" text="20 - 100млн"
                        />

                        <FavouritesEventInfo
                            title="Софинансирование" text="10 - 50"
                        />

                        <FavouritesEventInfo
                            title="Срок подачи документов" text="до 12.12.2023"
                        />
                        <FavouritesEventInfo
                            title="Длительность реализации" text="3 года"
                        />

                        <FavouritesEventInfo
                            title="Тематики" text="тематика 1, тематика 2, тематика 3"
                        />

                        <FavouritesEventInfo
                            title="Срок рассмотрения" text="до 12.12.2023"
                        />

                        <FavouritesEventInfo
                            title="Мероприятие-прекурсор" text="Минцифры России"
                        />

                        <FavouritesEventInfo
                            title="TRL/УГТ" text="4"
                        />

                        <FavouritesEventInfo
                            title="Сайт мероприятия-прекурсора" link="Минцифры России"
                        />

                        <FavouritesEventInfo
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
                            content
                        </Dropdown>

                        <Dropdown isBig title="Результат">
                            content
                        </Dropdown>

                        <Dropdown isBig title="Результат">
                            content
                        </Dropdown>

                        <Dropdown isBig title="Результат">
                            content
                        </Dropdown>

                        <Dropdown isBig title="Результат">
                            content
                        </Dropdown>

                        <Dropdown isBig title="Результат">
                            content
                        </Dropdown>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default FavouritesEvent;

