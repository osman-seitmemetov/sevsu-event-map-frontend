import {SubmitHandler} from "react-hook-form";
import {useMutation} from "react-query";
import {useRouter} from "next/router";
import {IOrganizerFields} from "@/models/form";
import {OrganizerService} from "@/services/OrganizerService";
import {toastError} from "@/utils/api/withToastrErrorRedux";


export const useCreateOrganizers = () => {
    const {push} = useRouter();

    const { mutateAsync, isLoading } = useMutation(
        'admin-create-organizer',
        (data: IOrganizerFields) => OrganizerService.create(data),
        {
            onError(error) {
                toastError(error, 'Возникла ошибка при получении типов участника');
            },
            onSuccess() {
                push('/admin/organizers');
            },
        }
    )

    const onSubmit: SubmitHandler<IOrganizerFields> = async (data) => {
        await mutateAsync(data);
    }

    return {onSubmit, isLoading};
}