import {useQuery} from "react-query";
import {OrganizerService} from "@/services/OrganizerService";

export const useFetchOrganizerLevels = () => {
    const queryData = useQuery('admin-get-all-organizer-levels', () => OrganizerService.getOrganizerLevels(), {
        onError: (error: any) => {
            alert(error)
        }
    });

    return queryData;
}