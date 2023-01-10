import {useQuery} from "react-query";
import {toastError} from "@/utils/api/withToastrErrorRedux";
import {EventService} from "@/services/EventService";
import {ISubjectClient, ISubjectServer} from "@/models/ISubject";

export const useSubjects = () => {
    const queryData = useQuery('get-all-subjects', () => EventService.getAllSubjects(), {
        onError: (error) => {
            toastError(error, "Ошибка при получении тематик");
        },

        select: ({data}) => data.map(
            (subject): ISubjectClient => ({
                id: subject.id,
                subject: subject.subject,
                event: [subject.event]
            })
        ),
    });

    return queryData;
}