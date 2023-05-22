import {useForm} from "react-hook-form";


export interface IFoundingTypeFields {
    name: string
}

export const useAdminFoundingForm = () => {
    return useForm<IFoundingTypeFields>({
        mode: "onChange"
    });
}