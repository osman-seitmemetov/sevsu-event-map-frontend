import {ISubjectClient} from "@/models/ISubject";

export const convertSubjectsToIds = (subjects: ISubjectClient[]): number[] => {
    let eventIds: number[] = [];

    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].event.length; j++) {
            eventIds.push(subjects[i].event[j]);
        }
    }

    return eventIds;
}