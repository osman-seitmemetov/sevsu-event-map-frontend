import React, {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import Form from "@/UI/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {useForm} from "react-hook-form";
import {IFoundingTypeFields} from "@/models/form";
import {useFoundingEdit} from "@/webpages/admin/AdminFounding/useFoundingEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import AdminCompetitorNavbar from "@/webpages/admin/AdminCompetitor/AdminCompetitorNavbar/AdminCompetitorNavbar";


const AdminFounding: FC = () => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<IFoundingTypeFields>({
        mode: "onChange"
    });

    const {onSubmit, isLoading, data, } = useFoundingEdit(setValue);
    const foundingType = data?.data;

    return (
        <>
            <AdminCompetitorNavbar/>
            <AdminContent isLoading={isLoading} title={`Редактирование типа финансирования "${foundingType?.name}"`}>
                {
                    isLoading
                        ? <AdminFormLoader />
                        : <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                            <FieldsSection>
                                <InputGroup title="Название">
                                    <Input
                                        {...register('name', {
                                            required: "Это поле обязательно"
                                        })}
                                        placeholder="Введите заголовок"
                                        error={errors.name}
                                    />
                                </InputGroup>
                            </FieldsSection>

                            <PrimaryButton style={{maxWidth: 400}}>Сохранить</PrimaryButton>
                        </Form>
                }
            </AdminContent>
        </>
    );
}

export default AdminFounding;

