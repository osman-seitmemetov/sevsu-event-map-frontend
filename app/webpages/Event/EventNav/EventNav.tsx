import React, {FC, useRef,} from "react";
import styles from "./EventNav.module.scss";
import Logo from "@/components/Logo/Logo";
import Link from "next/link";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import ReactToPrint from "react-to-print";
import EventsPrint from "@/components/EventsPrint/EventsPrint";
import {IEvent} from "@/models/IEvent";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useRouter} from "next/router";


const EventNav: FC = () => {
    const printContentRef = useRef<HTMLDivElement>(null);

    const event: IEvent = {
        id: 5,
        founding_range: {
            id: 3,
            low: 10,
            high: 2555
        },
        co_founding_range: {
            id: 3,
            low: 44,
            high: 45
        },
        subjects: [
            "subject 36",
            "subject 37",
            "subject 38",
            "subject 6545"
        ],
        title: "Название мероприятия",
        submission_deadline: "2023-04-11",
        consideration_period: "cons.period",
        realisation_period: "real.period",
        result: "result",
        site: "site",
        document: "doc",
        internal_contacts: "IC",
        trl: 6,
        organizer: 1,
        precursor: 1,
        founding_type: [1],
        competitors: [
            1,
            2,
            3
        ]
    }

    return (
        <nav className={styles.nav}>
            <Logo/>
            <div className={styles.right}>
                <PrimaryButton className={styles.btn}>показать qr код</PrimaryButton>

                <ReactToPrint
                    trigger={() => <PrimaryButton className={styles.btn}>печать</PrimaryButton>}
                    content={() => printContentRef.current}
                    // onBeforePrint={() => setStr("before")}
                    // onAfterPrint={() => setStr("after")}
                />

                <Link href="/favourites/index" className={styles.btn}>
                    <PrimaryButton>добавить в избранное</PrimaryButton>
                </Link>

                <EventsPrint events={[event]} refContent={printContentRef}/>
            </div>
        </nav>
    );
}

export default EventNav;

