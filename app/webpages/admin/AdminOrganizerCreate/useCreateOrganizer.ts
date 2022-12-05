import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {IOrganizerFields} from "@/models/form";
import {OrganizerService} from "@/services/OrganizerService";


export const useCreateOrganizers = () => {
    const {push} = useRouter();

    const { mutateAsync } = useMutation(
        'admin create organizer',
        (data: IOrganizerFields) => OrganizerService.create(data),
        {
            onError(error) {
                alert(error);
            },
            onSuccess() {
                push('/admin/organizers');
            },
        }
    )

    const onSubmit: SubmitHandler<IOrganizerFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit};
}