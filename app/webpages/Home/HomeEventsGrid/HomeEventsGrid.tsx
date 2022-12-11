import React, {FC, useEffect, useRef, useState} from "react";
import styles from "@/webpages/Home/HomeEventsGrid/HomeEventsGrid.module.scss";
import EventCard from "@/UI/EventCard/EventCard";
import {IEventMin} from "@/models/IEvent";
import {useEvents} from "@/webpages/Home/HomeEventsGrid/useEvents";
import Logo from "@/assets/img/min_rf.png"


const event: IEventMin = {
    id: 5,
    founding_range: {
        low: 10,
        high: 2555
    },
    co_founding_range: {
        low: 44,
        high: 45
    },
    title: "Название мероприятия",
    submission_deadline: "2023-04-11",
    realisation_period: "real.period",
    organizer: {
        logo: Logo.src,
        level: "REG"
    },
    founding_type: ["cvdsvdv", "vsdvddsvsvd", "vsvdvsvvsvds"],
    competitors: [
        1,
        2,
        3
    ]
}


const HomeEventsGrid: FC = () => {
    const [isExtended, setIsExtended] = useState(false);
    const scrollareaHorizontalRef = useRef<HTMLDivElement | null>(null);
    const scrollareaVerticalRef = useRef<HTMLDivElement | null>(null);

    const scrollToStart = () => {
        scrollareaHorizontalRef.current?.scroll({
            top: scrollareaHorizontalRef.current?.scrollHeight,
            left: 0,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        scrollToStart();
        window.addEventListener('resize', scrollToStart);
    }, [])

    const resizeHandler = (left: number = 288) => {
        setIsExtended(true)

        setTimeout(() =>
            scrollareaHorizontalRef.current?.scroll({
                top: scrollareaHorizontalRef.current.scrollHeight,
                left: left,
                behavior: "smooth"
            }), 400)
    }

    const {data, isLoading} = useEvents();
    const events = data?.data;

    return (
        <>
            <div className={styles.scrollareaWrapper}>
                {
                    isExtended && <button
                        className={styles.resizeBtn}
                        onClick={() => setIsExtended(false)}
                    >
                        <svg viewBox="0 0 242 242" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.66666 1.20002C7.19999 1.86669 4.79999 3.73335 3.33332 5.33335C0.79999 8.13335 0.666656 10.1334 0.666656 38C0.666656 65.8667 0.79999 67.8667 3.33332 70.6667C7.19999 75.0667 11.6 76.2667 16.8 74.6667C23.6 72.4 25.3333 68.5334 25.3333 55.0667V43.3334L57.0667 74.9334C74.4 92.2667 90.4 107.2 92.4 108C101.867 111.467 111.467 102 108 92.5334C107.2 90.4 92.2667 74.4 74.9333 56.9334L43.3333 25.3334H55.0667C68.5333 25.3334 72.4 23.6 74.6667 16.8C76.2667 11.6 75.0667 7.20002 70.6667 3.33335C68 0.800019 65.6 0.666685 39.4667 0.400019C24 0.266685 10.1333 0.666685 8.66666 1.20002Z"/>
                            <path
                                d="M176 0.933307C169.333 3.46664 165.867 10.2666 168 16.8C170.267 23.6 174.133 25.3333 187.6 25.3333H199.333L167.733 56.9333C150.4 74.4 135.467 90.4 134.667 92.4C131.2 101.867 140.667 111.467 150.133 108C152.267 107.2 168.267 92.2666 185.733 74.9333L217.333 43.3333V55.3333C217.333 69.0666 218.8 72.2666 225.867 74.6666C231.067 76.2666 235.333 75.0666 239.333 70.6666C241.867 67.8666 242 65.8666 242 37.8666V7.99997L238.267 4.39997L234.667 0.666641L206.267 0.399974C190.8 0.266641 177.067 0.533307 176 0.933307Z"/>
                            <path
                                d="M92 134.8C90.1333 135.467 74.4 150.267 57.0667 167.733L25.3333 199.333V187.6C25.3333 174.133 23.6 170.267 16.8 168C11.6 166.4 7.19999 167.6 3.33332 172C0.79999 174.8 0.666656 176.8 0.666656 204.8V234.667L4.39999 238.267L7.99999 242H37.8667C65.8667 242 67.8667 241.867 70.6667 239.333C75.0667 235.333 76.2667 231.067 74.6667 225.867C72.2667 218.8 69.0667 217.333 55.3333 217.333H43.3333L74.9333 185.6C92.2667 168.267 107.2 152.267 108 150.267C111.467 140.667 101.467 130.933 92 134.8Z"
                                fill="#232323"/>
                            <path
                                d="M142 134.533C135.733 137.2 132.4 144.133 134.667 150.133C135.467 152.267 150.4 168.267 167.733 185.6L199.333 217.333H187.333C173.6 217.333 170.4 218.8 168 225.867C166.4 231.067 167.6 235.333 172 239.333C174.8 241.867 176.8 242 204.8 242H234.667L238.267 238.267L242 234.667V204.8C242 176.8 241.867 174.8 239.333 172C235.333 167.6 231.067 166.4 225.867 168C218.8 170.4 217.333 173.6 217.333 187.333V199.333L185.733 167.733C158.133 140.267 149.733 133.067 145.6 133.467C145.067 133.467 143.467 134 142 134.533Z"/>
                        </svg>
                    </button>
                }

                <div className={styles.scrollareaHorizontal} ref={scrollareaHorizontalRef}>
                    <div className={`${styles.eventGrid} ${isExtended && styles.eventGrid_extended}`}>
                        <div className={styles.columns} ref={scrollareaVerticalRef}>
                            <div className={styles.column}>
                                {
                                    isLoading
                                        ? <div>loading...</div>
                                        : events && events.map((ev) => <EventCard key={ev.id} eventMin={ev}
                                                                                  link={`/event/${ev.id}`}/>)
                                }
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>

                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>

                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>

                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>

                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>

                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>

                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>

                            <div className={styles.column}>
                                <EventCard eventMin={event} link="/event/1"/>
                                <EventCard eventMin={event} link="/event/1"/>
                            </div>
                        </div>

                        <div className={styles.scale}>
                            <div className={styles.line}></div>

                            <div className={styles.trls}>
                                <div className={styles.trl} onClick={() => resizeHandler(0)}>0</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298)}>1</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 2)}>2</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 3)}>3</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 4)}>4</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 5)}>5</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 6)}>6</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 7)}>7</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 8)}>8</div>
                                <div className={styles.trl} onClick={() => resizeHandler(298 * 9)}>9</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeEventsGrid;

