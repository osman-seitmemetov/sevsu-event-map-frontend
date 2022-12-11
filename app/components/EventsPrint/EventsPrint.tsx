import React, {FC, RefObject} from 'react';
import {IEvent} from "@/models/IEvent";
import EventsPrintItem from "@/components/EventsPrint/EventsPrintItem/EventsPrintItem";
import {IOrganizer} from "@/models/IOrganizer";
import {useEventsByIds} from "@/hooks/useEventsByIds";


interface EventsPrintProps {
    refContent?: RefObject<any>,
    eventIds: number[],
    setIsLoading: (isLoading: boolean) => void
}

const EventsPrint: FC<EventsPrintProps> = ({refContent, eventIds, setIsLoading}) => {
    const {data, isLoading} = useEventsByIds(eventIds);
    const events = data?.data;
    setIsLoading(isLoading);

    return (
        <div style={{display: "none"}}>
            <div ref={refContent}>
                {events && events.map(ev => <EventsPrintItem key={ev.id} event={ev}/>)}
            </div>
        </div>
    );
};

export default EventsPrint;