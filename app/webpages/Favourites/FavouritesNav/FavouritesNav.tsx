import React, {FC, useRef, useState} from "react";
import styles from "./FavouritesNav.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import ShareModal from "@/UI/modals/ShareModal/ShareModal";
import {convertIdsToURL} from "@/utils/string/convertIdsToURL";
import PrintButton from "@/UI/PrintButton/PrintButton";
import Link from "next/link";
import {APP_URL} from "@/config/API";


const FavouritesNav: FC = () => {
    const allPrintContentRef = useRef<HTMLDivElement>(null);
    const selectedPrintContentRef = useRef<HTMLDivElement>(null);
    const {eventIds, eventIdsSelected} = useTypedSelector(state => state.favouritesReducer);
    const [isAllActive, setIsAllActive] = useState(false);
    const [isSelectedActive, setIsSelectedActive] = useState(false);
    const [isAllLoading, setIsAllLoading] = useState(false);
    const [isSelectedLoading, setIsSelectedLoading] = useState(false);

    return (
        <nav className={styles.nav}>
            <Logo/>

            {
                eventIds.length === 0
                    ? <div className={styles.right}>
                        <Link href="/">
                            <PrimaryButton className={styles.btn}>Назад на главную</PrimaryButton>
                        </Link>
                    </div>
                    : <div className={styles.right}>
                        {
                            eventIdsSelected.length > 0 && eventIds.length > 1 && <>
                                <PrimaryButton
                                    className={styles.btn}
                                    onClick={() => setIsSelectedActive(true)}
                                >
                                    Поделиться выделенными мероприятиями
                                </PrimaryButton>

                                <ReactToPrint
                                    trigger={() => <PrintButton title="Печать выбранных мероприятий"
                                                                isLoading={isSelectedLoading}/>}
                                    content={() => selectedPrintContentRef.current}
                                />
                            </>
                        }

                        <PrimaryButton
                            className={styles.btn}
                            onClick={() => setIsAllActive(true)}
                        >
                            Поделиться всеми мероприятиями
                        </PrimaryButton>

                        <ReactToPrint
                            trigger={() => <PrintButton title="Печать всех мероприятий" isLoading={isAllLoading}/>}
                            content={() => allPrintContentRef.current}
                        />

                        <EventsPrint
                            setIsLoading={setIsAllLoading}
                            eventIds={eventIds}
                            refContent={allPrintContentRef}
                        />

                        <EventsPrint
                            setIsLoading={setIsSelectedLoading}
                            eventIds={eventIdsSelected}
                            refContent={selectedPrintContentRef}
                        />

                        <ShareModal
                            modalTitle="Поделиться мероприятиями"
                            title=""
                            url={`${APP_URL}/shared?${convertIdsToURL(eventIds, "id")}`}
                            setIsActive={setIsAllActive}
                            isActive={isAllActive}
                        />

                        <ShareModal
                            modalTitle="Поделиться мероприятиями"
                            title=""
                            url={`${APP_URL}/shared?${convertIdsToURL(eventIdsSelected, "id")}`}
                            setIsActive={setIsSelectedActive}
                            isActive={isSelectedActive}
                        />
                    </div>
            }
        </nav>
    );
}

export default FavouritesNav;

