import React, {FC} from "react";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminCompetitorCreateNavbar
    from "@/webpages/admin/AdminCompetitorCreate/AdminCompetitorCreateNavbar/AdminCompetitorCreateNavbar";
import {FormProvider} from "react-hook-form";
import {useCompetitorCreate} from "@/webpages/admin/AdminCompetitorCreate/useCompetitorCreate";
import AdminCompetitorForm from "@/components/forms/AdminCompetitorForm/AdminCompetitorForm";
import {useCompetitorForm} from "@/hooks/forms/useCompetitorForm";


const AdminCompetitorCreate: FC = () => {
    const competitorForm = useCompetitorForm();
    const {onSubmit, isLoading} = useCompetitorCreate();

    return (
        <>
            <AdminCompetitorCreateNavbar/>
            <AdminContent title="Создание типа участника">
                <FormProvider {...competitorForm}>
                    <AdminCompetitorForm onSubmit={onSubmit} disabled={isLoading}/>
                </FormProvider>
            </AdminContent>
        </>
    );
}

export default AdminCompetitorCreate;

