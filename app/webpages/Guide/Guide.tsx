import React, {FC} from "react";
import styles from "./Guide.module.scss";
import Container from "@/components/Container/Container";
import GuideNav from "@/webpages/Guide/GuideNav/GuideNav";
import GuidePage from "@/webpages/Guide/GuidePage/GuidePage";
import MainScreen from "@/assets/img/Главная (карточки большие).jpg";
import EventScreen from "@/assets/img/Страница мероприятия.jpg";
import FavouritesScreen from "@/assets/img/Избранное (если выбраны мероприятия).jpg";


const Guide: FC = () => {

    return (
        <section className={styles.guide}>
            <Container>
                <GuideNav />

                <h1 className={styles.title}>Инструкция для пользователя</h1>

                <GuidePage img={MainScreen.src} title="Главная страница" desc="На данной странице находятся карта мероприятий и фильтры. Карта мероприятий увеличиться, если нажать по любому TRL. Чтобы её уменьшить, кликните по кнопке в правом верхнем углу. Можно кликнуть по карточке мероприятия и перейти на страницу с более подробной информацией. Сверху, в навигационной панели можно перейти в избранное или на страницу авторизации." />
                <GuidePage img={EventScreen.src} title="Страница мероприятия" desc="Здесь вся подробная информация о мероприятии. Можно поделиться мероприятием, распечатать информацию о нем на принтере, добавить в избранное и попасть туда." />
                <GuidePage img={FavouritesScreen.src} title="Избранное" desc="На этой странице находяться мероприятия, которые были добавлены в избранное. Можно поделиться мероприятиями или распечатать их. Также это можно сделать с выделенными мероприятиями." />
            </Container>
        </section>
    );
}

export default Guide;

