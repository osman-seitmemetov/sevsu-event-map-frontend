import React, {FC} from "react";
import styles from "@/webpages/Home/HomeEventsFilter/HomeEventsFilter.module.scss";
import HomeEventsFilterOption from "@/webpages/Home/HomeEventsFilter/HomeEventsFilterOption/HomeEventsFilterOption";
import Dropdown from "@/UI/Dropdown/Dropdown";
import {useForm} from "react-hook-form";
import {IEventFieldsClient} from "@/models/form";


const HomeEventsFilter: FC = () => {
    const {
        register, handleSubmit, formState: {errors}, control, setValue
    } = useForm<IEventFieldsClient>({
        mode: "onChange"
    });

    return (
        <aside className={styles.filter}>
            <div className={styles.title}>Фильтры</div>

            <div className={styles.scrollarea}>
                <Dropdown title="Организатор мероприятия">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Требования к виду участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Финансирование">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Софинансирование">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Тип финансирования">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Срок подачи документов">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Тип организатора">
                    gfgrrggggg
                </Dropdown>
            </div>

            <div className={styles.subjects}>

            </div>
        </aside>
    );
}

export default HomeEventsFilter;

