import React, {ButtonHTMLAttributes, FC} from 'react';
import styles from './FavouritesButton.module.scss';
import {useTypedSelector} from "@/hooks/useTypedSelector";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";

interface FavouritesButtonProps {
    className?: string
}

const FavouritesButton: FC<FavouritesButtonProps> = ({className}) => {
    const {eventIds} = useTypedSelector(state => state.favouritesReducer)

    return (
        <Link className={styles.wrapper} href="/favourites">
            <PrimaryButton className={`${styles.btn} ${className}`} hint="Здесь мероприятия, которые Вы сохранили в избранное">избранное</PrimaryButton>
            {eventIds.length > 0 && <div className={styles.count}>{eventIds.length}</div>}
        </Link>
    );
}

export default FavouritesButton;