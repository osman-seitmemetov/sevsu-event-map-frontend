import {FC, ReactNode} from "react";
import styles from "./Title.module.scss";


interface TitleProps {
    children?: ReactNode,
    className?: string
}

const Title: FC<TitleProps> = ({children, className}) => {
    return <h1 className={`${styles.title} ${className && className}`}>{children}</h1>;
}

export default Title;