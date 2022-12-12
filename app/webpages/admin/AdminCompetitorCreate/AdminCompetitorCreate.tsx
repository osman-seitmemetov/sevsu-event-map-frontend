import React, {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminCompetitorCreateNavbar
    from "@/webpages/admin/AdminCompetitorCreate/AdminCompetitorCreateNavbar/AdminCompetitorCreateNavbar";
import Form from "@/UI/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {useForm} from "react-hook-form";
import {ICompetitorFields} from "@/models/form";
import {useCompetitorCreate} from "@/webpages/admin/AdminCompetitorCreate/useCompetitorCreate";


const AdminCompetitorCreate: FC = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICompetitorFields>({
        mode: "onChange"
    });

    const {onSubmit} = useCompetitorCreate();

    return (
        <>
            <AdminCompetitorCreateNavbar/>
            <AdminContent title="Создание типа участника">
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

                        <InputGroup title="Код">
                            <Input
                                {...register('code')}
                                placeholder="Введите ссылку"
                                error={errors.code}
                            />
                        </InputGroup>
                    </FieldsSection>

                    <PrimaryButton style={{maxWidth: 400}}>Сохранить</PrimaryButton>
                </Form>
            </AdminContent>
        </>
    );
}

export default AdminCompetitorCreate;

