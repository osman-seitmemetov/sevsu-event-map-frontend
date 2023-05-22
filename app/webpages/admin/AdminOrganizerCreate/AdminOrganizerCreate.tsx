import React, {FC} from "react";
import AdminContent from "@/components/AdminContent/AdminContent";
import {useFetchOrganizerLevelsForSelect} from "@/hooks/useFetchOrganizerLevelsForSelect";
import {FormProvider} from "react-hook-form";
import {useCreateOrganizers} from "@/webpages/admin/AdminOrganizerCreate/useCreateOrganizer";
import AdminOrganizerCreateNavbar
    from "@/webpages/admin/AdminOrganizerCreate/AdminOrganizerCreateNavbar/AdminOrganizerCreateNavbar";
import AdminOrganizerForm from "@/components/forms/AdminOrganizerForm/AdminOrganizerForm";
import {useOrganizerForm} from "@/hooks/forms/useOrganizerForm";


const AdminOrganizerCreate: FC = () => {
    const organizerForm = useOrganizerForm();
    const {onSubmit, isLoading} = useCreateOrganizers();

    return (
        <>
            <AdminOrganizerCreateNavbar/>
            <AdminContent title="Добавление организатора">
                <FormProvider {...organizerForm}>
                    <AdminOrganizerForm onSubmit={onSubmit} disabled={isLoading}/>
                </FormProvider>
            </AdminContent>
        </>
    );
}

export default AdminOrganizerCreate;

