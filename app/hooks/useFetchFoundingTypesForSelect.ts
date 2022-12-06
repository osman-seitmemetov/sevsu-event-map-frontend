import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";
import {IOption} from "@/models/IOption";
import {CompetitorService} from "@/services/CompetitorService";
import {EventService} from "@/services/EventService";

export const useFetchFoundingTypesForSelect = () => {
    const queryData = useQuery('admin-get-all-founding-types-for-select', () => EventService.getAllFoundingTypes(), {
        onError: (error: any) => {
            alert(error)
        },

        select: ({data}) =>
            data.map(
                (competitor): IOption => ({
                    label: competitor.name,
                    value: String(competitor.id)
                })
            ),
    });

    return queryData;
}