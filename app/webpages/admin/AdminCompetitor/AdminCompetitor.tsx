import React, {FC} from "react";
import AdminContent from "@/components/AdminContent/AdminContent";
import {useCompetitorEdit} from "@/webpages/admin/AdminCompetitor/useCompetitorEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import AdminCompetitorNavbar from "@/webpages/admin/AdminCompetitor/AdminCompetitorNavbar/AdminCompetitorNavbar";
import AdminCompetitorForm from "@/components/forms/AdminCompetitorForm/AdminCompetitorForm";
import {useCompetitorForm} from "@/hooks/forms/useCompetitorForm";
import {FormProvider} from "react-hook-form";


const AdminCompetitor: FC = () => {
    const competitorForm = useCompetitorForm();
    const {onSubmit, isLoading, data, isUpdateLoading} = useCompetitorEdit(competitorForm.setValue);
    const competitor = data?.data;

    return (
        <>
            <AdminCompetitorNavbar/>
            <AdminContent isLoading={isLoading} title={`Редактирование типа участника ${competitor?.name}`}>
                {
                    isLoading
                        ? <AdminFormLoader/>
                        : <FormProvider {...competitorForm}>
                            <AdminCompetitorForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                        </FormProvider>
                }
            </AdminContent>
        </>
    );
}

export default AdminCompetitor;

