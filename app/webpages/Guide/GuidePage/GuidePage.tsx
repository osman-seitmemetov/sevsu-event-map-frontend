import React, {FC} from "react";
import styles from "./GuidePage.module.scss";


interface GuidePageProps {
    img: string | undefined,
    title: string,
    desc: string | undefined
}

const GuidePage: FC<GuidePageProps> = ({img, desc, title}) => {

    return (
        <div className={styles.page}>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.img} src={img} alt={desc}/>
            <div className={styles.desc}>{desc}</div>
        </div>
    );
}

export default GuidePage;

