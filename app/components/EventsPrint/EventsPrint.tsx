import React, {FC, RefObject} from 'react';
import {IEvent} from "@/models/IEvent";
import EventsPrintItem from "@/components/EventsPrint/EventsPrintItem/EventsPrintItem";


interface EventsPrintProps {
    refContent?: RefObject<any>,
    events: IEvent[]
}

const EventsPrint: FC<EventsPrintProps> = ({refContent, events}) => {
    return (
        <div ref={refContent}>
            {events.map(ev => <EventsPrintItem key={ev.id} event={ev} />)}
        </div>
    );
};

export default EventsPrint;