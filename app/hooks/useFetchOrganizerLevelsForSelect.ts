import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {IOption} from "@/models/IOption";

export const useFetchOrganizerLevelsForSelect = () => {
    const queryData = useQuery('admin get all organizer levels', () => OrganizerService.getOrganizerLevels(), {
        onError: (error: any) => {
            alert(error)
        },

        select: ({data}) =>
            data.map(
                (category): IOption => ({
                    label: category.name,
                    value: String(category.id)
                })
            ),
    });

    return queryData;
}