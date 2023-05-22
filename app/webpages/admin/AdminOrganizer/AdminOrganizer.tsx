import React, {FC} from "react";
import {FormProvider} from "react-hook-form";
import AdminContent from "@/components/AdminContent/AdminContent";
import {useEditOrganizer} from "@/webpages/admin/AdminOrganizer/useEditOrganizer";
import AdminOrganizerNavbar from "@/webpages/admin/AdminOrganizer/AdminOrganizerNavbar/AdminOrganizerNavbar";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import {useOrganizerForm} from "@/hooks/forms/useOrganizerForm";
import AdminOrganizerForm from "@/components/forms/AdminOrganizerForm/AdminOrganizerForm";


const AdminOrganizer: FC = () => {
    const organizerForm = useOrganizerForm();
    const {onSubmit, data, isLoading, isUpdateLoading} = useEditOrganizer(organizerForm.setValue);
    const organizer = data?.data;

    return (
        <>
            <AdminOrganizerNavbar/>
            <AdminContent isLoading={isLoading} title={`Редактирование организатора ${organizer?.name}`}>
                {
                    isLoading
                        ? <AdminFormLoader/>
                        : <FormProvider {...organizerForm}>
                            <AdminOrganizerForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                        </FormProvider>
                }
            </AdminContent>
        </>
    );
}

export default AdminOrganizer;

