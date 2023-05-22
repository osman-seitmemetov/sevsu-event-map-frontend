import {useForm} from "react-hook-form";
import {IEventFieldsClient} from "@/models/form";

interface IEventFields {
    id: number,
    internal_university_contacts: string,
    title: string,
    consideration_period: string,
    realisation_period: string,
    result: string,
    site: string,
    document: string,
    internal_contacts: string,
    competitors: number[]
}

export const useEventForm = () => {
    return useForm<IEventFieldsClient>({
        mode: "onChange"
    });
}