import React, {FC} from "react";
import styles from "./Guide.module.scss";
import Container from "@/components/Container/Container";
import GuideNav from "@/webpages/Guide/GuideNav/GuideNav";
import sh1_1_1 from "@/assets/img/1.1(1).png";
import sh1_1_2 from "@/assets/img/1.1(2).png";
import sh1_2_1_1 from "@/assets/img/1.2.1(1).png";
import sh1_2_1_2 from "@/assets/img/1.2.1(2).png";
import sh1_2_2_1 from "@/assets/img/1.2.2(1).png";
import sh1_2_2_2 from "@/assets/img/1.2.2(2).jpg";
import sh1_3_1_1 from "@/assets/img/1.3.1(1).jpg";
import sh1_3_1_2 from "@/assets/img/1.3.1(2).png";
import sh1_3_2_1 from "@/assets/img/1.3.2(1).png";
import sh1_3_2_2 from "@/assets/img/1.3.2(2).png";
import sh1_4_1_1 from "@/assets/img/1.4.1(1).jpg";
import sh1_4_1_2 from "@/assets/img/1.4.1(2).png";
import sh1_4_2_1 from "@/assets/img/1.4.2(1).png";
import sh1_4_2_2 from "@/assets/img/1.4.2(2).png";
import sh2_1_1 from "@/assets/img/2.1(1).png";
import sh2_1_2 from "@/assets/img/2.1(2).png";
import sh2_2_1 from "@/assets/img/2.2(1).png";
import sh2_2_2 from "@/assets/img/2.2(2).png";
import sh2_2_3 from "@/assets/img/2.2(3).png";
import sh2_2_4 from "@/assets/img/2.2(4).png";
import Link from "next/link";
import {useAuth} from "@/hooks/useAuth";
import gu1_1_1 from "@/assets/img/gu-1.1(1).png";
import gu1_1_2 from "@/assets/img/gu-1.1(2).png";
import gu1_2_1 from "@/assets/img/gu-1.2(1).png";
import gu1_2_2 from "@/assets/img/gu-1.2(2).png";
import gu1_3_1 from "@/assets/img/gu-1.3(1).png";
import gu1_3_2 from "@/assets/img/gu-1.3(2).png";
import gu1_3_1_1 from "@/assets/img/gu-1.3.1(1).png";
import gu1_3_1_2 from "@/assets/img/gu-1.3.1(2).png";
import gu1_3_1_3 from "@/assets/img/gu-1.3.1(3).png";
import gu1_3_1_4 from "@/assets/img/gu-1.3.1(4).png";
import gu1_3_1_5 from "@/assets/img/gu-1.3.1(5).png";
import gu1_3_1_6 from "@/assets/img/gu-1.3.1(6).png";
import gu1_3_1_7 from "@/assets/img/gu-1.3.1(7).png";
import gu1_3_1_8 from "@/assets/img/gu-1.3.1(8).png";
import gu1_3_1_9 from "@/assets/img/gu-1.3.1(9).png";
import gu2_1 from "@/assets/img/gu-2(1).png";
import gu2_2 from "@/assets/img/gu-2(2).png";
import gu2_3 from "@/assets/img/gu-2(3).png";
import gu3_1 from "@/assets/img/gu-3(1).png";
import gu3_2 from "@/assets/img/gu-3(2).png";
import gu3_3 from "@/assets/img/gu-3(3).png";
import gu3_4 from "@/assets/img/gu-3(4).png";
import gu4_1 from "@/assets/img/gu-4(1).png";
import gu4_2 from "@/assets/img/gu-4(2).png";
import gu4_3 from "@/assets/img/gu-4(3).png";
import gu4_4 from "@/assets/img/gu-4(4).png";
import gu4_5 from "@/assets/img/gu-4(5).png";
import gu4_6 from "@/assets/img/gu-4(6).png";
import gu4_7 from "@/assets/img/gu-4(7).png";
import gu5_1 from "@/assets/img/gu-5(1).jpg";
import gu5_2 from "@/assets/img/gu-5(2).png";
import gu5_3 from "@/assets/img/gu-5(3).png";
import gu5_4 from "@/assets/img/gu-5(4).png";
import gu5_5 from "@/assets/img/gu-5(5).png";
import gu5_6 from "@/assets/img/gu-5(6).png";
import gu5_7 from "@/assets/img/gu-5(7).png";
import gu5_8 from "@/assets/img/gu-5(8).png";


const Guide: FC = () => {
    const {isAuthorized, user} = useAuth();

    return (
        <section className={styles.guide}>
            <Container>
                <GuideNav/>
                {
                    isAuthorized && user?.is_staff
                        ? <>
                            <h1 className={styles.mainTitle}>Инструкция для администратора</h1>

                            <div className={styles.content}>
                                <div className={styles.content__title}>Оглавление</div>

                                <Link href="#1. Создание мероприятия" className={styles.content__link}>1. Создание
                                    мероприятия</Link>
                                <Link href="#1.1. Начало работы с картой мероприятий" className={styles.content__link}>1.1.
                                    Начало
                                    работы с картой мероприятий</Link>
                                <Link href="#1.2. Создание и редактирование Организатора" className={styles.content__link}>1.2.
                                    Создание и редактирование Организатора</Link>
                                <Link href="#1.2.1. Создание нового Организатора" className={styles.content__link}>1.2.1.
                                    Создание
                                    нового Организатора</Link>
                                <Link href="#1.2.2. Редактирование существующего Организатора"
                                      className={styles.content__link}>1.2.2.
                                    Редактирование существующего Организатора</Link>
                                <Link href="#1.3. Создание и редактирование участников" className={styles.content__link}>1.3.
                                    Создание и редактирование участников</Link>
                                <Link href="#1.3.1. Создание нового Типа участника" className={styles.content__link}>1.3.1.
                                    Создание
                                    нового Типа участника</Link>
                                <Link href="#1.3.2. Редактирование существующего участника"
                                      className={styles.content__link}>1.3.2.
                                    Редактирование существующего участника</Link>
                                <Link href="#1.4. Создание и редактирование вкладки «Типы финансирования»"
                                      className={styles.content__link}>1.4. Создание и редактирование вкладки «Типы
                                    финансирования»</Link>
                                <Link href="#1.4.1. Создание нового Типа финансирования" className={styles.content__link}>1.4.1.
                                    Создание нового Типа финансирования</Link>
                                <Link href="#1.4.2. Редактирование существующего Типа финансирования"
                                      className={styles.content__link}>1.4.2. Редактирование существующего Типа
                                    финансирования</Link>
                                <Link href="#2. Заполнение карточки мероприятия" className={styles.content__link}>2.
                                    Заполнение
                                    карточки мероприятия</Link>
                                <Link href="#2.1 Создание нового мероприятия" className={styles.content__link}>2.1 Создание
                                    нового
                                    мероприятия</Link>
                                <Link href="#2.2. Редактирование мероприятий" className={styles.content__link}>2.2.
                                    Редактирование
                                    мероприятий</Link>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.title} id="1. Создание мероприятия">1. Создание мероприятия</h2>

                                <h2 className={styles.title} id="1.1. Начало работы с картой мероприятий">1.1. Начало работы
                                    с
                                    картой мероприятий</h2>

                                <div className={styles.text}>
                                    Для создания / редактирования нового мероприятия
                                    необходимо выбрать кнопку «Панель администратора».
                                </div>

                                <img className={styles.img} src={sh1_1_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Перед началом работы проверить наличие необходимых данных в меню слева во вкладках
                                    «Организаторы», «Участники», «Типы финансирования». <em><u>Только</u></em> при
                                    отсутствии
                                    данных,
                                    их следует внести (создать новые) до начала работы с картой мероприятий. При
                                    наличии всех необходимых данных во вкладках переходим к п. 2 данной Инструкции.
                                </div>

                                <img className={styles.img} src={sh1_1_2.src} alt="Screenshot"/>

                                <h2 className={styles.title} id="1.2. Создание и редактирование Организатора">1.2. Создание
                                    и
                                    редактирование Организатора</h2>

                                <h2 className={styles.title} id="1.2.1. Создание нового Организатора">1.2.1. Создание нового
                                    Организатора</h2>

                                <div className={styles.text}>
                                    Для создания нового организатора нужно нажать кнопку «Организаторы» в меню слева,
                                    далее нажать кнопку «Добавить организатора».
                                </div>

                                <img className={styles.img} src={sh1_2_1_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh1_2_1_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Заполняется текстовое поле «Название», уровень выбирается из выпадающего списка,
                                    загружается логотип. После заполнения всех полей, необходимо нажать кнопку
                                    «Сохранить».
                                </div>

                                <h2 className={styles.title} id="1.2.2. Редактирование существующего Организатора">1.2.2.
                                    Редактирование существующего Организатора</h2>

                                <img className={styles.img} src={sh1_2_2_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    При нажатии на кнопку с иконкой карандаша, Вы перейдете на страницу редактирования
                                    организатора, а при нажатии на «крестик» в правом углу можно его удалить.
                                </div>

                                <img className={styles.img} src={sh1_2_2_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    После заполнения всех полей необходимо нажать кнопку «Сохранить».
                                </div>

                                <h2 className={styles.title} id="1.3. Создание и редактирование участников">1.3. Создание и
                                    редактирование участников</h2>

                                <h2 className={styles.title} id="1.3.1. Создание нового Типа участника">1.3.1. Создание
                                    нового Типа
                                    участника</h2>

                                <div className={styles.text}>
                                    Для добавления нового участника необходимо нажать в меню слева «Участники», затем
                                    нажать «Создать тип участника».
                                </div>

                                <img className={styles.img} src={sh1_3_1_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh1_3_1_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Заполняется текстовое поле «Название».
                                    После заполнения всех полей необходимо нажать кнопку «Сохранить».
                                </div>

                                <h2 className={styles.title} id="1.3.2. Редактирование существующего участника">1.3.2.
                                    Редактирование существующего участника</h2>

                                <img className={styles.img} src={sh1_3_2_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    При нажатии на кнопку с иконкой карандаша, Вы перейдете на страницу редактирования
                                    Типа участника, а при нажатии на «крестик» в правом углу можно его удалить.
                                </div>

                                <img className={styles.img} src={sh1_3_2_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    После редакции полей необходимо нажать кнопку «Сохранить».
                                </div>

                                <h2 className={styles.title}
                                    id="1.4. Создание и редактирование вкладки «Типы финансирования»">1.4.
                                    Создание и редактирование вкладки «Типы финансирования»</h2>

                                <h2 className={styles.title} id="1.4.1. Создание нового Типа финансирования">1.4.1. Создание
                                    нового
                                    Типа финансирования</h2>

                                <div className={styles.text}>
                                    Для добавления нового Типа финансирования необходимо нажать в меню слева «Типы
                                    финансирования», затем нажать «Создать тип финансирования».
                                </div>

                                <img className={styles.img} src={sh1_4_1_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh1_4_1_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    После заполнения поля необходимо нажать кнопку «Сохранить».
                                </div>

                                <h2 className={styles.title}
                                    id="1.4.2. Редактирование существующего Типа финансирования">1.4.2.
                                    Редактирование существующего Типа финансирования</h2>

                                <img className={styles.img} src={sh1_4_2_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    При нажатии на кнопку с иконкой карандаша, Вы перейдете на страницу редактирования
                                    Типа финансирования, а при нажатии на «крестик» в правом углу можно его удалить.
                                </div>

                                <img className={styles.img} src={sh1_4_2_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    При нажатии на кнопку с иконкой карандаша, Вы перейдете на страницу редактирования
                                    Типа финансирования, а при нажатии на «крестик» в правом углу можно его удалить.
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.title} id="2. Заполнение карточки мероприятия">2. Заполнение карточки
                                    мероприятия</h2>

                                <h2 className={styles.title} id="2.1 Создание нового мероприятия">2.1 Создание нового
                                    мероприятия</h2>

                                <div className={styles.text}>
                                    Для создания нового мероприятия необходимо выбрать в левом меню кнопку «Мероприятия»,
                                    затем нажать «Создать мероприятие».
                                </div>

                                <img className={styles.img} src={sh2_1_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh2_1_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    При заполнении карточки мероприятия:
                                </div>

                                <table className={styles.table}>
                                    <tbody>
                                    <tr>
                                        <td style={{width: 70}}>№ <br/> п/п</td>
                                        <td>Наименование</td>
                                        <td>Тип пункта</td>
                                        <td>Примечания</td>
                                    </tr>

                                    <tr>
                                        <td>1</td>
                                        <td>Название</td>
                                        <td>Текстовый</td>
                                        <td>Заполняется кратко, карточки мероприятий сортируются по алфавиту</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>Ссылка на сайт</td>
                                        <td>Электронный адрес</td>
                                        <td>Например: https://pp218.ru/</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>Срок рассмотрения</td>
                                        <td>Текстовый</td>
                                        <td>
                                            Заполняется кратко согласно КД, например, «До 90 календарных дней с момента
                                            окончания срока приема заявок» «В течении 20 рабочих дней с даты
                                            поступления заявки»
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>Длительность реализации</td>
                                        <td>Текстовый</td>
                                        <td>
                                            Заполняется кратко согласно КД, например,
                                            «12 месяцев с даты заключения договора гранта»;
                                            «12/18/24 месяцев с даты заключения договора гранта».
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>Результат</td>
                                        <td>Текстовый</td>
                                        <td>Результатом является, то что должно появиться в результате выполнения гранта,
                                            например,
                                            «бизнес-план»;
                                            «создана организация»
                                            «создан сайт организации»;
                                            «РИД»;
                                            «НИОКР» и тд.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>6</td>
                                        <td>Тематики</td>
                                        <td>Текстовый</td>
                                        <td>
                                            Конкурс/мероприятие всегда имеет направления, которые необходимо указать в
                                            данном
                                            пункте.
                                            Каждая тематика разделяется точкой с запятой и переносом строки. Если при вводе
                                            наименования тематика отображается в выпадающем списке, следует нажать на нее
                                            левой
                                            кнопкой мыши (соответственно выбрать из существующих!). Если же при вводе
                                            тематика не
                                            появляется в выпадающем списке, в таком случае вводим полностью наименование
                                            тематики.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>Регламентирующие документы</td>
                                        <td>Электронный адрес</td>
                                        <td>
                                            Указывается ссылка (может быть несколько ссылок) на документ, например,
                                            https://pp218.ru/upload/iblock/a84/ryo3btjbn80e3zb1bvclapxx41vd4qw0/O-2022-218-15.pdf
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>8</td>
                                        <td>Контакты для консультации внутри СевГУ</td>
                                        <td>Текстовый</td>
                                        <td>
                                            ФИО, должность, аудитория, электронный адрес, контактный телефон
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>9</td>
                                        <td>Организатор</td>
                                        <td>Выпадающее меню</td>
                                        <td>
                                            Выбирается из предложенного списка. Если нет, <em>см. п. 1.2.1. настоящей
                                            Инструкции</em>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>10</td>
                                        <td>Мероприятие-прекурсор</td>
                                        <td>Выпадающее меню</td>
                                        <td>
                                            Если для участия в текущем мероприятии <b><u>обязательным
                                            условием</u></b> является
                                            <b>участие в исходном (предшествующем) мероприятии</b>, то в данном пункте
                                            выбирается такое мероприятие из выпадающего списка. Если соответствующего
                                            мероприятия нет в списке, его необходимо создать <em>см. п.2 настоящей
                                            Инструкции</em>.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>11</td>
                                        <td>TRL/УГТ</td>
                                        <td>Выпадающее меню</td>
                                        <td>
                                            Указывается уровень готовности технологий, согласно ее уровню зрелости от
                                            идеи до серийного производства. Подробнее ознакомиться с определением
                                            уровней TRL можно пройдя по ссылке:
                                            https://www.smartbusinesstrips.ru/blog/urovni-gotovnosti-tehnologii/
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>12</td>
                                        <td>Виды участников</td>
                                        <td>Выпадающее меню</td>
                                        <td>
                                            Выбирается из предложенного списка, если нет необходимо создать нового
                                            участника <em>см. п. 1.3.1. настоящей Инструкции</em>.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>13</td>
                                        <td>Тип финансирования</td>
                                        <td>Выпадающее меню</td>
                                        <td>
                                            Выбирается из предложенного списка, если нет необходимо создать новый тип
                                            финансирования <em>см. п. 1.4.1. настоящей Инструкции</em>.
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>14</td>
                                        <td>Крайний срок подачи документов</td>
                                        <td>Выпадающее меню</td>
                                        <td>Выбирается в календаре</td>
                                    </tr>

                                    <tr>
                                        <td>15</td>
                                        <td>Финансирование</td>
                                        <td>Цифровой</td>
                                        <td>Указывается цифровое значение от и до</td>
                                    </tr>

                                    <tr>
                                        <td>16</td>
                                        <td>Софинансирование</td>
                                        <td>Цифровой</td>
                                        <td>
                                            Указывается цифровое значение от и до. В случае:
                                            - если нет софинансирования указывается значение от 0 до 0;
                                            - если софинансирование 1 к 1, в таком случае указывается значение от 100 до
                                            100;
                                            - если 30% от объема гранта, то указывается значение от 30 до 100 (без знака %).
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className={styles.text}>
                                    <b>Все поля являются обязательными для заполнения!</b> <br/>
                                    Если объявляется новая очередь мероприятия необходимо <b>редактировать существующую
                                    (которая уже была на сайте) карточку мероприятия! НОВОЕ СОЗДАВАТЬ НЕ НУЖНО! См. п.
                                    2.1 данной Инструкции.</b>
                                </div>

                                <div className={styles.text}>
                                    После заполнения всех пунктов нажать кнопку «Сохранить».
                                </div>

                                <h2 className={styles.title} id="2.2. Редактирование мероприятий">2.2. Редактирование
                                    мероприятий</h2>

                                <div className={styles.text}>
                                    Для редактирования зайти в «Панель администратора», затем в панели слева нажать
                                    кнопку «Мероприятия», затем при нажатии на карточку мероприятия, Вы перейдете на
                                    страницу редактирования, а при нажатии на «крестик» в правом верхнем углу можно его
                                    удалить.
                                </div>

                                <img className={styles.img} src={sh2_2_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh2_2_2.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh2_2_3.src} alt="Screenshot"/>

                                <img className={styles.img} src={sh2_2_4.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Заполнение полей аналогично таблице в <em>п. 2.1 настоящей Инструкции</em>.
                                    После всех редакций, необходимо нажать кнопку «Сохранить».
                                </div>
                            </div>
                        </>
                        : <>
                            <h1 className={styles.mainTitle}>Инструкция для пользователя</h1>

                            <div className={styles.content}>
                                <div className={styles.content__title}>Оглавление</div>

                                <Link href="#1. Начало работы" className={styles.content__link}>1. Начало работы</Link>
                                <Link href="#1.1. Вход в личный кабинет пользователя" className={styles.content__link}>1.1. Вход в личный кабинет пользователя</Link>
                                <Link href="#1.2. Создание нового пользователя" className={styles.content__link}>1.2. Создание нового пользователя</Link>
                                <Link href="#1.3. Главный экран" className={styles.content__link}>1.3. Главный экран</Link>
                                <Link href="#1.3.1. Фильтры и теги" className={styles.content__link}>1.3.1. Фильтры и теги</Link>
                                <Link href="#2. Уровни TRL" className={styles.content__link}>2. Уровни TRL</Link>
                                <Link href="#3. Карточка мероприятия" className={styles.content__link}>3. Карточка мероприятия</Link>
                                <Link href="#4. Печать карточки мероприятия" className={styles.content__link}>4. Печать карточки мероприятия</Link>
                                <Link href="#5. Избранное»" className={styles.content__link}>5. Избранное</Link>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.title} id="1. Начало работы">1. Начало работы</h2>

                                <div className={styles.text}>
                                    Для просмотра карты мероприятий не требуется регистрация/авторизация.
                                    В случае необходимости следить за мероприятием, путем добавления их в
                                    «избранное», следует авторизоваться/зарегистрироваться в системе.
                                </div>

                                <h2 className={styles.title} id="1.1. Вход в личный кабинет пользователя">1.1. Вход в личный кабинет пользователя</h2>

                                <div className={styles.text}>
                                    Для работы с картой мероприятий необходимо зайти на сайт
                                    http://eventmap.sevsu.ru:8000/ используя логин и пароль от Вашей учетной записи. Для
                                    этого нажмите на кнопку «Войти» на верхней панели.
                                </div>

                                <img className={styles.img} src={gu1_1_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu1_1_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Вводим данные в соответствующие поля, нажимаем кнопку «Войти».
                                    В случае если Вы новый пользователь см. <em>п. 1.2 настоящей Инструкции</em>.
                                </div>

                                <h2 className={styles.title} id="1.2. Создание нового пользователя">1.2. Создание нового пользователя</h2>

                                <div className={styles.text}>
                                    Для создания нового пользователя нажмите кнопку «Зарегистрироваться».
                                </div>

                                <img className={styles.img} src={gu1_2_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu1_2_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Заполнение всех полей обязательно. После заполнения нажмите кнопку
                                    «Зарегистрироваться». После регистрации переходите на главный экран <em>см. п. 1.3 настоящей Инструкции</em>.
                                </div>

                                <h2 className={styles.title} id="1.3. Главный экран">1.3. Главный экран</h2>

                                <div className={styles.text}>
                                    На странице отображаются:
                                    <br/> - активные мероприятия (окрашены белым), идет активный сбор заявок на данный момент;
                                    <br/> - неактивные мероприятия (окрашены серым), сбор заявок не ведется или приостановлен.
                                </div>

                                <img className={styles.img} src={gu1_3_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    На данной странице находятся карта мероприятий и фильтры. С помощью
                                    фильтрации и тегов можно отфильтровать мероприятия на странице. Фильтры и
                                    теги находятся слева от мероприятий.
                                </div>

                                <img className={styles.img} src={gu1_3_2.src} alt="Screenshot"/>

                                <h2 className={styles.title} id="1.3.1. Фильтры и теги">1.3.1. Фильтры и теги</h2>

                                <div className={styles.text}>
                                    Фильтры открываются путем нажатия на «стрелочку».
                                </div>

                                <img className={styles.img} src={gu1_3_1_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Не обязательно выбирать все фильтры, достаточного одного-двух для того
                                    чтобы сузить поиск необходимого мероприятия.
                                </div>

                                <img className={styles.img} src={gu1_3_1_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по признаку организатора. Отмечая в
                                    квадрате отдельного организатора в карте мероприятий будут отображены его
                                    мероприятия. Одновременно можно отметить несколько организаторов.
                                </div>

                                <img className={styles.img} src={gu1_3_1_3.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по виду участников путем выбора
                                    соответствующего. Отмечая в квадрате отдельного участника в карте
                                    мероприятий будут отображены соответствующие мероприятия. Одновременно
                                    можно отметить несколько участников.
                                </div>

                                <img className={styles.img} src={gu1_3_1_4.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по объему финансирования. Для этого
                                    необходимо ввести числовые значения в соответствующие поля.
                                </div>

                                <img className={styles.img} src={gu1_3_1_5.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по объему софинансирования. Для этого
                                    необходимо ввести числовые значения в соответствующие поля.
                                </div>

                                <img className={styles.img} src={gu1_3_1_6.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по типу финансирования. Отмечая в
                                    квадрате отдельный тип финансирования в карте мероприятий будут
                                    отображены соответствующие мероприятия. Одновременно можно отметить
                                    несколько типов финансирования.
                                </div>

                                <img className={styles.img} src={gu1_3_1_7.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по срокам подачи документов. Отмечая даты
                                    «от» и «до», путем нажатия в соответствующие поля и выбирая даты в
                                    календаре, в карте мероприятий будут отображены соответствующие
                                    мероприятия.
                                </div>

                                <img className={styles.img} src={gu1_3_1_8.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Мероприятия можно отфильтровать по уровню TRL. Отмечая в квадрате
                                    отдельный TRL в карте мероприятий будут отображены соответствующие
                                    мероприятия. Одновременно можно отметить несколько уровней TRL (подробнее
                                    ознакомиться с TRL <em> см. п. 2. Настоящей Инструкции.</em>)

                                    Теги можно просмотреть путем прокрутки «колесика мыши».
                                </div>

                                <img className={styles.img} src={gu1_3_1_9.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    С их помощью можно фильтровать отображаемые мероприятия на карте
                                    мероприятий.
                                </div>

                                <h2 className={styles.title} id="2. Уровни TRL">2. Уровни TRL</h2>

                                <div className={styles.text}>
                                    Мероприятия распределены по уровням TRL. TRL - уровень готовности
                                    технологий, согласно ее уровню зрелости от идеи до серийного производства.
                                    Подробнее ознакомиться с определением уровней TRL можно пройдя по ссылке: <a href="https://www.smartbusinesstrips.ru/blog/urovni-gotovnosti-tehnologii/">https://www.smartbusinesstrips.ru/blog/urovni-gotovnosti-tehnologii/</a>
                                </div>

                                <div className={styles.text}>
                                    Масштабирование карты мероприятий возможно путем нажатия по любому уровню TRL. Для
                                    возврата - кликните по кнопке в правом верхнем углу. Сверху, в навигационной панели,
                                    можно перейти в избранное или на страницу авторизации.
                                </div>

                                <img className={styles.img} src={gu2_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu2_2.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu2_3.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Для более подробного ознакомления с мероприятием кликнете мышкой по карточке
                                    мероприятия. Далее <em>см. п. 3 настоящей Инструкции</em>.
                                </div>

                                <h2 className={styles.title} id="3. Карточка мероприятия">3. Карточка мероприятия</h2>

                                <div className={styles.text}>
                                    В карточке находится подробная информация о мероприятии. Для просмотра
                                    информации необходимо нажать на интересующее мероприятие. Находясь в
                                    карточке можно поделиться мероприятием, распечатать информацию о нем на
                                    принтере, добавить в избранное и попасть туда. Также узнать контакты для
                                    консультации внутри СевГУ.
                                </div>

                                <img className={styles.img} src={gu3_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu3_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Для просмотра полей: <br/>
                                    «Регламентирующие документы»;
                                    «Контакты»;
                                    «Результат»
                                    Необходимо развернуть поле путем нажатия на «галочку».
                                </div>

                                <img className={styles.img} src={gu3_3.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu3_4.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Цифры в правом верхнем углу карточки мероприятия показывают какой тип участников может
                                    подать заявку для прохождения конкурсного отбора.
                                    <br/> 1 – ВУЗ;
                                    <br/> 2 – Предприятие;
                                    <br/> 3 – Частное лицо/группа лиц;
                                    <br/> 4 – МИП/МСП.
                                </div>
                            </div>

                            <div className={styles.section}>
                                <h2 className={styles.title} id="4. Печать карточки мероприятия">4. Печать карточки мероприятия</h2>

                                <div className={styles.text}>
                                    Для печати карточки мероприятия необходимо зайти в карточку и на верхней панели нажать
                                    кнопку «Печать».
                                </div>

                                <img className={styles.img} src={gu4_1.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu4_2.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    После нажатия кнопки появляется окно с информацией, в котором необходимо указать Ваш
                                    принтер и нажать кнопку «печать».
                                </div>

                                <img className={styles.img} src={gu4_3.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Распечатать карточку можно из избранного, для этого нажмите в верхней панели кнопку
                                    «Избранное». <em>Возможно только для <b>авторизированных пользователей</b></em>.
                                </div>

                                <div className={styles.text}>
                                    <em><b>Для неавторизированных пользователей</b></em> печать из избранного доступна только в данной
                                    сессии. Если Вы перезагрузили страницу или заново зашли на сайт, то избранное не
                                    сохраняется.
                                </div>

                                <img className={styles.img} src={gu4_4.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu4_5.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Выбрать мероприятие и нажать кнопку «Печать выбранных мероприятий».
                                    Появится окно, в котором отображается карточка мероприятия, необходимо
                                    выбрать принтер, формат страницы (в дополнительных настройках) и нажать
                                    кнопку «Печать».
                                </div>

                                <img className={styles.img} src={gu4_6.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu4_7.src} alt="Screenshot"/>

                                <h2 className={styles.title} id="5. Избранное">5. Избранное</h2>

                                <div className={styles.text}>
                                    На этой странице находятся мероприятия, которые были добавлены в избранное. Можно
                                    поделиться мероприятиями или распечатать их. Также это можно сделать с выделенными
                                    мероприятиями. Если вы <b>не авторизованы</b>, то мероприятия <b>не сохраняются в избранном
                                    после перезагрузки</b>.
                                </div>

                                <div className={styles.text}>
                                    С помощью данного раздела можно отслеживать «судьбу» мероприятия.
                                </div>

                                <img className={styles.img} src={gu5_1.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    Для добавления мероприятия в Избранное необходимо нажать на карточку мероприятия, видна
                                    вся информация о мероприятии. Затем нажать кнопку «Добавить в избранное».
                                </div>

                                <img className={styles.img} src={gu5_2.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu5_3.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu5_4.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    После нажатия «Добавить в избранное» на верхней панели на кнопке «Избранное» появится
                                    цифра в зеленом кружочке.
                                </div>

                                <img className={styles.img} src={gu5_5.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu5_6.src} alt="Screenshot"/>

                                <div className={styles.text}>
                                    <b>Для авторизированных пользователей</b> «Избранное» сохраняется после выхода из личного
                                    кабинета.
                                </div>

                                <div className={styles.text}>
                                    Для удаления мероприятия из избранного, нужно «провалиться» в карточку и нажать на верхней панели кнопку «Удалить из избранного».
                                </div>

                                <img className={styles.img} src={gu5_7.src} alt="Screenshot"/>

                                <img className={styles.img} src={gu5_8.src} alt="Screenshot"/>
                            </div>
                        </>
                }
            </Container>
        </section>
    );
}

export default Guide;

