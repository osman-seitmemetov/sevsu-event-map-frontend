import React, {FC} from "react";
import {FormProvider} from "react-hook-form";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminEventCreateNavbar from "@/webpages/admin/AdminEventCreate/AdminEventCreateNavbar/AdminEventCreateNavbar";
import {useEventCreate} from "@/webpages/admin/AdminEventCreate/useEventCreate";
import {useEventForm} from "@/hooks/forms/useEventForm";
import AdminEventForm from "@/components/forms/AdminEventForm/AdminEventForm";


const AdminEventCreate: FC = () => {
    const eventForm = useEventForm();
    const {onSubmit, isLoading} = useEventCreate();

    return (
        <>
            <AdminEventCreateNavbar/>

            <AdminContent title="Создание мероприятия">
                <FormProvider {...eventForm}>
                    <AdminEventForm onSubmit={onSubmit} disabled={isLoading} />
                </FormProvider>
            </AdminContent>
        </>
    );
}

export default AdminEventCreate;

