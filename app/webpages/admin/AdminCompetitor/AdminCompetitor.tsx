import React, {FC} from "react";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import Form from "@/UI/Form/Form";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import {useForm} from "react-hook-form";
import {ICompetitorFields} from "@/models/form";
import {useCompetitorEdit} from "@/webpages/admin/AdminCompetitor/useCompetitorEdit";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";
import AdminCompetitorNavbar from "@/webpages/admin/AdminCompetitor/AdminCompetitorNavbar/AdminCompetitorNavbar";


const AdminCompetitor: FC = () => {
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<ICompetitorFields>({
        mode: "onChange"
    });

    const {onSubmit, isLoading, data} = useCompetitorEdit(setValue);
    const competitor = data?.data;

    return (
        <>
            <AdminCompetitorNavbar/>
            <AdminContent isLoading={isLoading} title={`Редактирование типа участника ${competitor?.name}`}>
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

                                <InputGroup title="Код">
                                    <Input
                                        {...register('code')}
                                        placeholder="Введите ссылку"
                                        error={errors.code}
                                    />
                                </InputGroup>
                            </FieldsSection>

                            <PrimaryButton>Сохранить</PrimaryButton>
                        </Form>
                }
            </AdminContent>
        </>
    );
}

export default AdminCompetitor;

