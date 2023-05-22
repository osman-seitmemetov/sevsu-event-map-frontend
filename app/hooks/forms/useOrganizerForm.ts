import {useForm} from "react-hook-form";
import {IOrganizerFields} from "@/models/form";


// interface IOrganizerFields {
//     name: string,
//     code: number
// }

export const useOrganizerForm = () => {
    return useForm<IOrganizerFields>({
        mode: "onChange"
    })
}