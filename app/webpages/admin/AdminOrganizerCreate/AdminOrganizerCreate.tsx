import React, {FC} from "react";
import AdminContent from "@/components/AdminContent/AdminContent";
import {useFetchOrganizerLevelsForSelect} from "@/hooks/useFetchOrganizerLevelsForSelect";
import {Controller, useForm} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import dynamic from "next/dynamic";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import Input from "@/UI/InputGroup/Input/Input";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import Form from "@/UI/Form/Form";
import {useCreateOrganizers} from "@/webpages/admin/AdminOrganizerCreate/useCreateOrganizer";
import AdminOrganizerCreateNavbar
    from "@/webpages/admin/AdminOrganizerCreate/AdminOrganizerCreateNavbar/AdminOrganizerCreateNavbar";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});

interface IOrganizerFields {
    name: string,
    logo: string,
    level: string
}


const AdminOrganizerCreate: FC = () => {
    const {data: organizerLevels, isLoading: isOrganizerLevelsLoading} = useFetchOrganizerLevelsForSelect();

    const {
        register, handleSubmit, formState: {errors}, control
    } = useForm<IOrganizerFields>({
        mode: "onChange"
    });

    const {onSubmit} = useCreateOrganizers();

    return (
        <>
            <AdminOrganizerCreateNavbar />
            <AdminContent title="Добавление организатора">
                <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                    <FieldsSection>
                        <InputGroup title="Название" autoMargin>
                            <Input
                                {...register('name', {
                                    required: "Это поле обязательно"
                                })}
                                placeholder="Введите название"
                                error={errors.name}
                            />
                        </InputGroup>

                        <InputGroup title="Уровень">
                            <Controller
                                control={control}
                                name="level"
                                rules={{
                                    required: "Это поле обязательно"
                                }}
                                render={({field, fieldState: {error}}) =>
                                    <DynamicSelect
                                        error={error}
                                        field={field}
                                        placeholder="Выберите уровень"
                                        options={organizerLevels || []}
                                        isLoading={isOrganizerLevelsLoading}
                                    />
                                }
                            />
                        </InputGroup>

                        <InputGroup title="Логотип">
                            <Controller
                                control={control}
                                defaultValue=""
                                name="logo"
                                rules={{
                                    required: "Это поле обязательно"
                                }}
                                render={({field: {onChange, value}, fieldState: {error}}) =>
                                    <ImageUploader
                                        onChange={onChange}
                                        value={value}
                                        error={error}
                                        placeholder="Логотип"
                                    />
                                }
                            />
                        </InputGroup>
                    </FieldsSection>

                    <PrimaryButton>Сохранить</PrimaryButton>
                </Form>
            </AdminContent>
        </>
    );
}

export default AdminOrganizerCreate;

