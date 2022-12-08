import React, {FC, RefObject} from 'react';
import {IEvent} from "@/models/IEvent";
import EventsPrintItem from "@/components/EventsPrint/EventsPrintItem/EventsPrintItem";


interface EventsPrintProps {
    refContent?: RefObject<any>,
    events: IEvent[]
}

const EventsPrint: FC<EventsPrintProps> = ({refContent, events}) => {
    return (
        <div style={{display: "none"}}>
            <div ref={refContent}>
                {events.map(ev => <EventsPrintItem key={ev.id} event={ev}/>)}
            </div>
        </div>
    );
};

export default EventsPrint;