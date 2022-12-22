import {ISubject} from "@/models/ISubject";

export const convertSubjectsToIds = (subjects: ISubject[]): number[] => {
    let eventIds: number[] = [];

    for (let i = 0; i < subjects.length; i++) {
        eventIds.push(subjects[i].event);
    }

    return eventIds;
}