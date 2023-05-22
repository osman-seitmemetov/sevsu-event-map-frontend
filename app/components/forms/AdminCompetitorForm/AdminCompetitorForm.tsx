import React, {FC} from 'react';
import {SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import Form from "@/UI/Form/Form";
import {ICompetitorFields} from "@/models/form";
import {REQUIRE_ERROR} from "@/utils/consts";

interface AdminCompetitorFormProps {
    onSubmit: SubmitHandler<ICompetitorFields>,
    disabled: boolean,
}

const AdminCompetitorForm: FC<AdminCompetitorFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}
    } = useFormContext<ICompetitorFields>();

    return (<Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <FieldsSection>
                <InputGroup title="Название">
                    <Input
                        {...register('name', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите заголовок"
                        error={errors.name}
                    />
                </InputGroup>

                <InputGroup title="Код">
                    <Input
                        {...register('code', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите ссылку"
                        error={errors.code}
                    />
                </InputGroup>
            </FieldsSection>

            <PrimaryButton style={{maxWidth: 400}} disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminCompetitorForm;