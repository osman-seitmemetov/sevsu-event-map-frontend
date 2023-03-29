import React, {FC, useRef, useState} from "react";
import styles from "./Shared.module.scss";
import Logo from "@/components/Logo/Logo";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import ShareModal from "@/UI/modals/ShareModal/ShareModal";
import PrintButton from "@/UI/PrintButton/PrintButton";
import {convertIdsToURL} from "@/utils/string/convertIdsToURL";
import {APP_URL} from "@/config/API";


const SharedNav: FC<{eventIds: number[]}> = ({eventIds}) => {
    const allPrintContentRef = useRef<HTMLDivElement>(null);
    // const selectedPrintContentRef = useRef<HTMLDivElement>(null);
    // const {eventIds, eventIdsSelected} = useTypedSelector(state => state.favouritesReducer);
    const [isActive, setIsActive] = useState(false);
    const [isAllLoading, setIsAllLoading] = useState(false);
    // const [isSelectedLoading, setIsSelectedLoading] = useState(false);

    return (
        <nav className={styles.nav}>
            <Logo/>

            <div className={styles.right}>
                <PrimaryButton
                    className={styles.btn}
                    onClick={() => setIsActive(true)}
                >
                    Поделиться
                </PrimaryButton>

                <ReactToPrint
                    trigger={() => <PrintButton isLoading={isAllLoading} title="Печать всех мероприятий" />}
                    content={() => allPrintContentRef.current}
                />

                <EventsPrint
                    eventIds={eventIds}
                    setIsLoading={setIsAllLoading}
                    refContent={allPrintContentRef}
                />

                {/*<EventsPrint*/}
                {/*    eventIds={eventIdsSelected}*/}
                {/*    setIsLoading={setIsSelectedLoading}*/}
                {/*    refContent={selectedPrintContentRef}*/}
                {/*/>*/}

                <ShareModal modalTitle="Поделиться мероприятиями" title="Мероприятие" url={`${APP_URL}/shared${convertIdsToURL(eventIds, "id")}`} setIsActive={setIsActive} isActive={isActive}/>
            </div>
        </nav>
    );
}

export default SharedNav;

