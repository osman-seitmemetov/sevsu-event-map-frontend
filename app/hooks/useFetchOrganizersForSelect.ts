import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {IOption} from "@/models/IOption";

export const useFetchOrganizersForSelect = () => {
    const queryData = useQuery('admin get all organizer levels', () => OrganizerService.getAll(), {
        onError: (error: any) => {
            alert(error)
        },

        select: ({data}) =>
            data.map(
                (organizer): IOption => ({
                    label: organizer.name,
                    value: String(organizer.id)
                })
            ),
    });

    return queryData;
}