import {useForm} from "react-hook-form";

export interface ICompetitorFields {
    name: string,
    code: number
}

export const useCompetitorForm = () => {
    return useForm<ICompetitorFields>({
        mode: "onChange"
    });
}