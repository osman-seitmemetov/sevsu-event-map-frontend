import React, {ButtonHTMLAttributes, FC, FormHTMLAttributes, ReactNode} from "react";
import style from './PrintButton.module.scss'
import styles from "@/webpages/Event/EventNav/EventNav.module.scss";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";

interface IPrintButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading: boolean,
    title: string
}

const PrintButton: FC<IPrintButton> = ({ className, isLoading, title, ...rest }) => {
    return (
        <PrimaryButton {...rest} disabled={isLoading} className={styles.btn}>
            {isLoading ? "Сборка страниц для печати..." : title}
        </PrimaryButton>
    );
}

export default PrintButton;