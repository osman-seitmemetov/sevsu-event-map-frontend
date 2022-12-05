import React, {FC} from "react";
import styles from "@/webpages/Home/HomeEventsFilter/HomeEventsFilter.module.scss";
import HomeEventsFilterOption from "@/webpages/Home/HomeEventsFilter/HomeEventsFilterOption/HomeEventsFilterOption";
import Dropdown from "@/UI/Dropdown/Dropdown";


const HomeEventsFilter: FC = () => {
    return (
        <aside className={styles.filter}>
            <div className={styles.title}>Фильтры</div>

            <div className={styles.scrollarea}>
                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>

                <Dropdown title="Вид участника">
                    gfgrrggggg
                </Dropdown>
            </div>

            <div className={styles.subjects}>

            </div>
        </aside>
    );
}

export default HomeEventsFilter;

