import React, {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import Form from "@/UI/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {FormProvider, useForm} from "react-hook-form";
import {IFoundingTypeFields} from "@/models/form";
import {useFoundingEdit} from "@/webpages/admin/AdminFounding/useFoundingEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import AdminCompetitorNavbar from "@/webpages/admin/AdminCompetitor/AdminCompetitorNavbar/AdminCompetitorNavbar";
import {useAdminFoundingForm} from "@/hooks/forms/useAdminFoundingForm";
import AdminFoundingForm from "@/components/forms/AdminFoundingForm/AdminFoundingForm";


const AdminFounding: FC = () => {
    const foundingForm = useAdminFoundingForm();
    const {onSubmit, isLoading, isUpdateLoading, data, } = useFoundingEdit(foundingForm.setValue);
    const foundingType = data?.data;

    return (
        <>
            <AdminCompetitorNavbar/>
            <AdminContent isLoading={isLoading} title={`Редактирование типа финансирования "${foundingType?.name}"`}>
                {
                    isLoading
                        ? <AdminFormLoader />
                        : <FormProvider {...foundingForm}>
                            <AdminFoundingForm onSubmit={onSubmit} disabled={isUpdateLoading}/>
                        </FormProvider>
                }
            </AdminContent>
        </>
    );
}

export default AdminFounding;

