import React, {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import Form from "@/UI/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {useForm} from "react-hook-form";
import {IFoundingTypeFields} from "@/models/form";
import {useFoundingCreate} from "@/webpages/admin/AdminFoundingCreate/useFoundingCreate";
import AdminFoundingCreateNavbar
    from "@/webpages/admin/AdminFoundingCreate/AdminFoundingCreateNavbar/AdminFoundingCreateNavbar";


const AdminFoundingCreate: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IFoundingTypeFields>({
        mode: "onChange"
    });

    const {onSubmit} = useFoundingCreate();

    return (
        <>
            <AdminFoundingCreateNavbar/>
            <AdminContent title={`Создание типа финансирования`}>
                <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
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
            </AdminContent>
        </>
    );
}

export default AdminFoundingCreate;

