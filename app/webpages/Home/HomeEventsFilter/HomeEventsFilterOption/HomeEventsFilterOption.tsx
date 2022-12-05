import React, {FC, ReactNode} from "react";
import styles from "./HomeEventsFilterOption.module.scss";


interface HomeEventsFilterOptionProps {
    title: string,
    children: ReactNode
}

const HomeEventsFilterOption: FC<HomeEventsFilterOptionProps> = ({title, children}) => {
    return (
        <div className={styles.option}>
            <div className={styles.head}>
                <div className={styles.title}>{title}</div>
                <div className={styles.arrow}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29292C4.68342 7.9024 5.31658 7.9024 5.70711 8.29292L12 14.5858L18.2929 8.29292C18.6834 7.9024 19.3166 7.9024 19.7071 8.29292C20.0976 8.68345 20.0976 9.31661 19.7071 9.70714L12.7071 16.7071C12.3166 17.0977 11.6834 17.0977 11.2929 16.7071L4.29289 9.70714C3.90237 9.31661 3.90237 8.68345 4.29289 8.29292Z"/>
                    </svg>
                </div>
            </div>

            <div className={styles.items}>{children}</div>
        </div>
    );
}

export default HomeEventsFilterOption;

