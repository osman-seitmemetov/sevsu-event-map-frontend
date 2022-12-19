import React, {FC} from "react";
import styles from "./EventInfo.module.scss";


interface EventInfoProps {
    title: string,
    text?: string,
    hint?: string,
    link?: string
}

const EventInfo: FC<EventInfoProps> = ({title, hint, text, link}) => {
    return (
        <div className={`${styles.info} ${link && styles.info_link}`}>
            <span className={styles.title}>{title}:&nbsp;</span>
            {
                link
                    ? <a href={link} rel="noreferrer" target="_blank" className={styles.link}>
                        {link}
                    </a>
                    : text
            }
            {
                hint && <div className={styles.hint}>
                    ?

                    <div className={styles.hintText}>{hint}</div>
                </div>
            }
        </div>
    );
}

export default EventInfo;

