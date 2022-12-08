import React, {FC} from "react";
import {Controller, useForm} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import AdminContent from "@/components/AdminContent/AdminContent";
import {IOrganizerFields} from "@/models/form";
import Form from "@/UI/Form/Form";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import {useEditOrganizer} from "@/webpages/admin/AdminOrganizer/useEditOrganizer";
import {useFetchOrganizerLevelsForSelect} from "@/hooks/useFetchOrganizerLevelsForSelect";
import dynamic from "next/dynamic";
import AdminOrganizerNavbar from "@/webpages/admin/AdminOrganizer/AdminOrganizerNavbar/AdminOrganizerNavbar";
import AdminFormLoader from "@/components/AdminFormLoader/AdminFormLoader";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const AdminOrganizer: FC = () => {
    const {data: organizerLevels, isLoading: isOrganizerLevelsLoading} = useFetchOrganizerLevelsForSelect();

    const {
        register, handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful},
        reset, resetField, control,
        getValues, setValue,
        watch
    } = useForm<IOrganizerFields>({
        mode: "onChange"
    });

    const {onSubmit, data, isLoading} = useEditOrganizer(setValue);
    const organizer = data?.data;

    return (
        <>
            <AdminOrganizerNavbar />
            <AdminContent isLoading={isLoading} title={`Редактирование организатора ${organizer?.name}`}>
                {
                    isLoading
                        ? <AdminFormLoader />
                        : <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
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
                }
            </AdminContent>
        </>
    );
}

export default AdminOrganizer;

