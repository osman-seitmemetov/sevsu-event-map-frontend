import React, {ChangeEvent, FC} from "react";
import {useForm, Controller} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminEventCreateNavbar from "@/webpages/admin/AdminEventCreate/AdminEventCreateNavbar/AdminEventCreateNavbar";
import {IEventFields, IEventFieldsClient} from "@/models/form";
import dynamic from "next/dynamic";
import {useFetchOrganizersForSelect} from "@/hooks/useFetchOrganizersForSelect";
import {TRLs} from "@/utils/TRLs";
import Textarea from "@/UI/InputGroup/Textarea/Textarea";
import {useFetchOrganizerLevelsForSelect} from "@/hooks/useFetchOrganizerLevelsForSelect";
import {useFetchCompetitorsForSelect} from "@/hooks/useFetchCompetitorsForSelect";
import InputRange from "@/UI/InputGroup/InputRangeGroup/InputRange/InputRange";
import InputRangeGroup from "@/UI/InputGroup/InputRangeGroup/InputRangeGroup";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import {useEventCreate} from "@/webpages/admin/AdminEventCreate/useEventCreate";
import Form from "@/UI/Form/Form";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});


const AdminEventCreate: FC = () => {
    const {data: organizers, isLoading: isOrganizersLoading} = useFetchOrganizersForSelect();
    const {data: organizerLevels, isLoading: isOrganizerLevelsLoading} = useFetchOrganizerLevelsForSelect();
    const {data: competitors, isLoading: isCompetitorsLoading} = useFetchCompetitorsForSelect();

    const {
        register, handleSubmit,
        formState: {errors, isValid, isDirty, isSubmitting, isSubmitSuccessful, dirtyFields},
        reset, resetField, control,
        getValues, setValue,
        watch
    } = useForm<IEventFieldsClient>({
        mode: "onChange"
    });

    const foundingRangeLow = watch("founding_range.low");
    const foundingRangeHigh = watch("founding_range.high");
    const coFoundingRangeLow = watch("founding_range.low");
    const coFoundingRangeHigh = watch("founding_range.high");

    const {onSubmit} = useEventCreate();

    return (
        <>
            <AdminEventCreateNavbar/>

            <AdminContent title="Создание мероприятия">
                <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
                    <FieldsSection>
                        <InputGroup title="Название">
                            <Input
                                {...register('title', {
                                    required: "Это поле обязательно"
                                })}
                                placeholder="Введите заголовок"
                                error={errors.title}
                            />
                        </InputGroup>

                        <InputGroup title="Организатор">
                            <Controller
                                control={control}
                                name="organizer"
                                rules={{
                                    required: "Это поле обязательно",
                                }}
                                render={({field, fieldState: {error}}) =>
                                    <DynamicSelect
                                        error={error}
                                        field={field}
                                        placeholder="Выберите организатора"
                                        options={organizers || []}
                                        isLoading={isOrganizersLoading}
                                        isSearchable
                                    />
                                }
                            />
                        </InputGroup>

                        <InputGroup title="Ссылка на сайт">
                            <Input
                                {...register('site')}
                                placeholder="Введите ссылку"
                                error={errors.site}
                            />
                        </InputGroup>

                        {/*///////////////////////////////////////////////////////*/}
                        <InputGroup title="Ссылка на сайт мероприятия-прекурсора">
                            {/*<Input*/}
                            {/*    ///!*{...register('site')}*!/*/}
                            {/*    placeholder="Введите ссылку"*/}
                            {/*    error={errors.site}*/}
                            {/*/>*/}
                        </InputGroup>

                        <InputGroup title="TRL / УГТ">
                            <Controller
                                control={control}
                                name="trl"
                                rules={{
                                    required: "Это поле обязательно"
                                }}
                                render={({field, fieldState: {error}}) =>
                                    <DynamicSelect
                                        error={error}
                                        field={field}
                                        placeholder="Выберите TRL / УГТ"
                                        options={TRLs || []}
                                    />
                                }
                            />
                        </InputGroup>

                        <InputGroup title="Виды участников">
                            <Controller
                                control={control}
                                name="competitors"
                                rules={{
                                    required: "Это поле обязательно"
                                }}
                                render={({field, fieldState: {error}}) =>
                                    <DynamicSelect
                                        error={error}
                                        field={field}
                                        placeholder="Выберите виды участников"
                                        options={competitors || []}
                                        isLoading={isCompetitorsLoading}
                                        isMulti
                                        isSearchable
                                    />
                                }
                            />
                        </InputGroup>

                        <InputGroup title="Финансирование">
                            {/*<InputRangeGroup*/}
                            {/*    register={register}*/}
                            {/*    nameHigh="foundingRangeHigh"*/}
                            {/*    nameLow="foundingRangeLow"*/}
                            {/*    errorHigh={errors.foundingRangeHigh}*/}
                            {/*    errorLow={errors.foundingRangeLow}*/}
                            {/*/>*/}
                            <InputRangeGroup>
                                <InputRange
                                    {...register('founding_range.low', {
                                        required: "Это поле обязательное",
                                        // max: dirtyFields.coFoundingRangeHigh ? {
                                        //     value: foundingRangeHigh,
                                        //     message: 'значение этого поля не может быть больше соседнего'
                                        // } : undefined,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Можно вводить только числа'
                                        }
                                    })}
                                    error={errors.founding_range?.low}
                                    label="от"
                                />
                                <InputRange
                                    {...register('founding_range.high', {
                                        required: "Это поле обязательно",
                                        // min: dirtyFields.coFoundingRangeLow ? {
                                        //     value: foundingRangeLow,
                                        //     message: 'значение этого поля не может быть больше соседнего'
                                        // } : undefined,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Можно вводить только числа'
                                        }
                                    })}
                                    error={errors.founding_range?.high}
                                    label="до"
                                />
                            </InputRangeGroup>
                        </InputGroup>

                        <InputGroup title="Софинансирование">
                            <InputRangeGroup>
                                <InputRange
                                    {...register('co_founding_range.low', {
                                        required: "Это поле обязательно",
                                        // max: dirtyFields.coFoundingRangeHigh ? {
                                        //     value: foundingRangeHigh,
                                        //     message: 'значение этого поля не может быть больше соседнего'
                                        // } : undefined,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Можно вводить только числа'
                                        }
                                    })}
                                    error={errors.co_founding_range?.low}
                                    label="от"
                                />
                                <InputRange
                                    {...register('co_founding_range.high', {
                                        required: "Это поле обязательно",
                                        // max: dirtyFields.coFoundingRangeHigh ? {
                                        //     value: foundingRangeHigh,
                                        //     message: 'значение этого поля не может быть больше соседнего'
                                        // } : undefined,
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Можно вводить только числа'
                                        }
                                    })}
                                    error={errors.co_founding_range?.high}
                                    label="до"
                                />
                            </InputRangeGroup>
                        </InputGroup>

                        <InputGroup title="Срок рассмотрения">
                            <Input
                                {...register('consideration_period', {
                                    required: "Это поле обязательное"
                                })}
                                placeholder="Введите текст"
                                error={errors.consideration_period}
                            />
                        </InputGroup>

                        <InputGroup title="Длительность реализации">
                            <Input
                                {...register('realisation_period', {
                                    required: "Это поле обязательное"
                                })}
                                placeholder="Введите текст"
                                error={errors.realisation_period}
                            />
                        </InputGroup>

                        <InputGroup title="Срок подачи документов">
                            <Controller
                                control={control}
                                name="submission_deadline"
                                rules={{
                                    required: "Это поле обязательно"
                                }}
                                render={({field, fieldState: {error}}) =>
                                    <InputDate
                                        dateFormat="dd.MM.yyyy"
                                        placeholder="дд.мм.гггг"
                                        mask="11.11.1111"
                                        selected={field.value}
                                        onChange={(date: Date) => field.onChange(date)}
                                        error={error}
                                    />
                                }
                            />
                        </InputGroup>

                        {/*<InputGroup title="fddfdffdd">*/}
                        {/*    <Controller*/}
                        {/*        control={control}*/}
                        {/*        name="foundingRangeLow"*/}
                        {/*        rules={{*/}
                        {/*            required: "Это поле обязательно"*/}
                        {/*        }}*/}
                        {/*        render={({field, fieldState: {error}}) =>*/}
                        {/*            // <InputDate*/}
                        {/*            //     dateFormat="dd.MM.yyyy"*/}
                        {/*            //     placeholder="дд.мм.гггг"*/}
                        {/*            //     mask="11.11.1111"*/}
                        {/*            //     selected={field.value}*/}
                        {/*            //     onChange={(date: Date) => field.onChange(date)}*/}
                        {/*            //     error={error}*/}
                        {/*            // />*/}
                        {/*            <input*/}
                        {/*                {...field}*/}
                        {/*                onChange={(e: ChangeEvent<HTMLInputElement>) => {*/}
                        {/*                    console.log(/^[0-9]+$/.test(e.target.value))*/}
                        {/*                    if (/^[0-9]+$/.test(e.target.value)) {*/}
                        {/*                        return field.onChange(e.target.value)*/}
                        {/*                    }*/}
                        {/*                }}*/}
                        {/*                type="text"*/}
                        {/*            />*/}
                        {/*        }*/}
                        {/*    />*/}
                        {/*</InputGroup>*/}
                    </FieldsSection>

                    <FieldsSection>
                        <InputGroup title="Тип финансирования">
                            <Textarea
                                {...register('founding_type', {
                                    required: "Это поле обязательно"
                                })}
                                placeholder="Введите тип финансирования"
                                // error={errors.founding_type}
                            />
                        </InputGroup>

                        <InputGroup title="Результат">
                            <Textarea
                                {...register('result', {
                                    required: "Это поле обязательно"
                                })}
                                placeholder="Введите результат"
                                error={errors.result}
                            />
                        </InputGroup>

                        <InputGroup title="Регламентирующие документы">
                            <Textarea
                                {...register('document')}
                                placeholder="Введите ссылки на документы"
                                error={errors.document}
                            />
                        </InputGroup>

                        <InputGroup title="Контакты для консультаций внутри СевГУ">
                            <Textarea
                                {...register('internal_contacts', {
                                    required: "Это поле обязательно"
                                })}
                                placeholder="Введите контакты"
                                error={errors.internal_contacts}
                            />
                        </InputGroup>

                        <InputGroup title="Тематики">
                            <Textarea
                                {...register('subjects', {
                                    required: "Это поле обязательно"
                                })}
                                placeholder="Введите текст"
                                error={errors.subjects}
                            />
                        </InputGroup>
                    </FieldsSection>

                    <PrimaryButton>Сохранить</PrimaryButton>
                </Form>
            </AdminContent>
        </>
    );
}

export default AdminEventCreate;

