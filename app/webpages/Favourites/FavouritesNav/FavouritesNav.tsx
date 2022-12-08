import React, {FC, useRef} from "react";
import styles from "./FavouritesNav.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {useTypedSelector} from "@/hooks/useTypedSelector";


const FavouritesNav: FC = () => {
    const allPrintContentRef = useRef<HTMLDivElement>(null);
    const selectedPrintContentRef = useRef<HTMLDivElement>(null);
    const {events, eventsSelected} = useTypedSelector(state => state.favouritesReducer);

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>
                {
                    eventsSelected.length > 0 && <>
                        {/*<PrimaryButton className={styles.btn}>Поделиться выделенными мероприятиями</PrimaryButton>*/}

                        <ReactToPrint
                            trigger={() => <PrimaryButton className={styles.btn}>Печать выделенных
                                мероприятий</PrimaryButton>}
                            content={() => selectedPrintContentRef.current}
                        />
                    </>
                }

                <PrimaryButton className={styles.btn}>Поделиться</PrimaryButton>
                <ReactToPrint
                    trigger={() => <PrimaryButton className={styles.btn}>Печать всех мероприятий</PrimaryButton>}
                    content={() => allPrintContentRef.current}
                />

                <EventsPrint events={events} refContent={allPrintContentRef}/>
                <EventsPrint events={eventsSelected} refContent={selectedPrintContentRef}/>
            </div>
        </nav>
    );
}

export default FavouritesNav;

