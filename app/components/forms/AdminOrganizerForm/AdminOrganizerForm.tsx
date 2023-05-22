import React, {FC} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import Form from "@/UI/Form/Form";
import {IOrganizerFields} from "@/models/form";
import ImageUploader from "@/UI/InputGroup/ImageUploader/ImageUploader";
import dynamic from "next/dynamic";
import {useFetchOrganizerLevelsForSelect} from "@/hooks/useFetchOrganizerLevelsForSelect";
import {REQUIRE_ERROR} from "@/utils/consts";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


interface AdminOrganizerFormProps {
    onSubmit: SubmitHandler<IOrganizerFields>,
    disabled: boolean,
}

const AdminOrganizerForm: FC<AdminOrganizerFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control
    } = useFormContext<IOrganizerFields>();

    const {data: organizerLevels, isLoading: isOrganizerLevelsLoading} = useFetchOrganizerLevelsForSelect();

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <FieldsSection>
                <InputGroup title="Название" autoMargin>
                    <Input
                        {...register('name', {
                            required: REQUIRE_ERROR
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
                            required: REQUIRE_ERROR
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
                            required: REQUIRE_ERROR
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

            <PrimaryButton style={{maxWidth: 400}} disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminOrganizerForm;