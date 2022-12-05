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
        link
            ? <a href={link} rel="noreferrer" target="_blank" className={styles.link}>{title}</a>
            : <div className={styles.info}>
                <span className={styles.title}>{title}:&nbsp;</span>
                {text}
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

