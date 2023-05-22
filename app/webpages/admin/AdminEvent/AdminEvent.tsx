import React, {FC} from "react";
import {FormProvider} from "react-hook-form";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminEventNavbar from "@/webpages/admin/AdminEvent/AdminEventNavbar/AdminEventNavbar";
import {useEventEdit} from "@/webpages/admin/AdminEvent/useEventEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import {useEventForm} from "@/hooks/forms/useEventForm";
import AdminEventForm from "@/components/forms/AdminEventForm/AdminEventForm";


const AdminEvent: FC = () => {
    const eventForm = useEventForm();
    const {onSubmit, data, isLoading, isUpdateLoading} = useEventEdit(eventForm.setValue);
    const event = data?.data;

    return (
        <>
            <AdminEventNavbar/>
            <AdminContent isLoading={isLoading} title={`Редактирование мероприятия "${event?.title}"`}>
                {
                    isLoading
                        ? <AdminFormLoader/>
                        : <FormProvider {...eventForm}>
                            <AdminEventForm onSubmit={onSubmit} disabled={isUpdateLoading} />
                        </FormProvider>
                }
            </AdminContent>
        </>
    );
}

export default AdminEvent;

