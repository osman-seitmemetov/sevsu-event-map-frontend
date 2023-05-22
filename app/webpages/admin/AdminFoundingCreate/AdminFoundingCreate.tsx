import React, {FC} from "react";
import AdminContent from "@/components/AdminContent/AdminContent";
import {FormProvider} from "react-hook-form";
import {useFoundingCreate} from "@/webpages/admin/AdminFoundingCreate/useFoundingCreate";
import AdminFoundingCreateNavbar
    from "@/webpages/admin/AdminFoundingCreate/AdminFoundingCreateNavbar/AdminFoundingCreateNavbar";
import {useAdminFoundingForm} from "@/hooks/forms/useAdminFoundingForm";
import AdminFoundingForm from "@/components/forms/AdminFoundingForm/AdminFoundingForm";


const AdminFoundingCreate: FC = () => {
    const foundingForm = useAdminFoundingForm();
    const {onSubmit, isLoading} = useFoundingCreate();

    return (
        <>
            <AdminFoundingCreateNavbar/>
            <AdminContent title={`Создание типа финансирования`}>
                <FormProvider {...foundingForm}>
                    <AdminFoundingForm onSubmit={onSubmit} disabled={isLoading}/>
                </FormProvider>
            </AdminContent>
        </>
    );
}

export default AdminFoundingCreate;

