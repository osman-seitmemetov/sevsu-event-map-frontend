import React, {FC, useEffect, useState} from 'react';
import {Controller, SubmitHandler, useFormContext} from "react-hook-form";
import InputGroup from "@/UI/InputGroup/InputGroup";
import Input from "@/UI/InputGroup/Input/Input";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import FieldsSection from "@/UI/FieldsSection/FieldsSection";
import dynamic from "next/dynamic";
import {useFetchOrganizersForSelect} from "@/hooks/useFetchOrganizersForSelect";
import {TRLs} from "@/utils/TRLs";
import Textarea from "@/UI/InputGroup/Textarea/Textarea";
import {useFetchCompetitorsForSelect} from "@/hooks/useFetchCompetitorsForSelect";
import InputRange from "@/UI/InputGroup/InputRangeGroup/InputRange/InputRange";
import InputRangeGroup from "@/UI/InputGroup/InputRangeGroup/InputRangeGroup";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import Form from "@/UI/Form/Form";
import {useFetchFoundingTypesForSelect} from "@/hooks/useFetchFoundingTypesForSelect";
import {useFetchEventsForSelect} from "@/hooks/useFetchEventsForSelect";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";
import styles from "./AdminEventForm.module.scss"
import {IEventFieldsClient} from "@/models/form";
import {REQUIRE_ERROR} from "@/utils/consts";

const DynamicSelect = dynamic(() => import('@/UI/InputGroup/SelectCustom/SelectCustom'), {
    ssr: false
});

interface AdminEventFormProps {
    onSubmit: SubmitHandler<IEventFieldsClient>,
    disabled: boolean,
}

const AdminEventForm: FC<AdminEventFormProps> = ({onSubmit, disabled}) => {
    const {
        register, handleSubmit, formState: {errors}, control, watch, setValue
    } = useFormContext<IEventFieldsClient>();

    const {data: organizers, isLoading: isOrganizersLoading} = useFetchOrganizersForSelect();
    const {data: competitors, isLoading: isCompetitorsLoading} = useFetchCompetitorsForSelect();
    const {data: foundingTypes, isLoading: isFoundingTypesLoading} = useFetchFoundingTypesForSelect();
    const {data: events, isLoading: isEventsLoading} = useFetchEventsForSelect();

    const subjectTerm = watch("subjects") ? watch("subjects").split(';\n')[watch("subjects").split(';\n').length - 1] : "";
    const subjects = watch("subjects") ? watch("subjects").split(';\n') : [];

    const state = useTypedSelector(state => state.filterReducer);

    const [isActive, setIsActive] = useState(false);

    const autoFill = (subject: string) => {
        setValue("subjects", `${subjects.slice(0, -1).join(';\n')}${subjects.slice(0, -1).join(';\n').length > 0 ? ";\n" : ""}${subject};\n`)
    }

    const {loadAllSubjects, subjectsSearch} = useActions();
    useEffect(() => {
        loadAllSubjects();
    }, []);

    useEffect(() => {
        subjectsSearch(subjectTerm)
    }, [subjectTerm, subjectsSearch]);

    return (
        <Form onSubmit={handleSubmit(onSubmit)} style={{maxWidth: '100%'}}>
            <FieldsSection>
                <InputGroup title="Название">
                    <Input
                        {...register('title', {
                            required: REQUIRE_ERROR
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
                            required: REQUIRE_ERROR,
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

                <InputGroup title="Мероприятие-прекурсор">
                    <Controller
                        control={control}
                        name="precursor"
                        rules={{}}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Выберите мероприятие"
                                options={events || []}
                                isLoading={isEventsLoading}
                                isSearchable
                            />
                        }
                    />
                </InputGroup>

                <InputGroup title="TRL / УГТ">
                    <Controller
                        control={control}
                        name="trl"
                        rules={{
                            required: REQUIRE_ERROR
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
                            required: REQUIRE_ERROR
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

                <InputGroup title="Финансирование (в рублях)">
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
                                required: REQUIRE_ERROR,
                                valueAsNumber: true,
                                // onChange: (e) => {
                                //     if (
                                //         /^[0-9]+$/.test(e.target.value)
                                //         // && Number(e.target.value) >= min
                                //         // && Number(e.target.value) <= max
                                //     ) {
                                //         e.target.value
                                //     }
                                // }
                            })}
                            error={errors.founding_range?.low}
                            label="от"
                        />
                        <InputRange
                            {...register('founding_range.high', {
                                required: REQUIRE_ERROR,
                                valueAsNumber: true,
                            })}
                            error={errors.founding_range?.high}
                            label="до"
                        />
                    </InputRangeGroup>
                </InputGroup>

                <InputGroup title="Софинансирование (в процентах)">
                    <InputRangeGroup>
                        <InputRange
                            {...register('co_founding_range.low', {
                                required: REQUIRE_ERROR,
                                valueAsNumber: true,
                            })}
                            error={errors.co_founding_range?.low}
                            label="от"
                        />
                        <InputRange
                            {...register('co_founding_range.high', {
                                required: REQUIRE_ERROR,
                                valueAsNumber: true,
                            })}
                            error={errors.co_founding_range?.high}
                            label="до"
                        />
                    </InputRangeGroup>
                </InputGroup>

                <InputGroup title="Срок рассмотрения">
                    <Input
                        {...register('consideration_period', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите текст"
                        error={errors.consideration_period}
                    />
                </InputGroup>

                <InputGroup title="Длительность реализации">
                    <Input
                        {...register('realisation_period', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите текст"
                        error={errors.realisation_period}
                    />
                </InputGroup>

                <InputGroup title="Крайний срок подачи документов">
                    <Controller
                        control={control}
                        name="submission_deadline"
                        rules={{
                            required: REQUIRE_ERROR
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

                <InputGroup title="Тип финансирования">
                    <Controller
                        control={control}
                        name="founding_type"
                        rules={{
                            required: REQUIRE_ERROR
                        }}
                        render={({field, fieldState: {error}}) =>
                            <DynamicSelect
                                error={error}
                                field={field}
                                placeholder="Выберите типы финансирования"
                                options={foundingTypes || []}
                                isLoading={isFoundingTypesLoading}
                                isMulti
                                isSearchable
                            />
                        }
                    />
                </InputGroup>
            </FieldsSection>

            <FieldsSection>
                <InputGroup title="Результат">
                    <Textarea
                        {...register('result', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите результат"
                        error={errors.result}
                    />
                </InputGroup>

                <InputGroup
                    title="Тематики (каждая тематика разделяется точкой с запятой и переносом строки)"
                >
                    <div className={styles.subjectsWrapper}>
                        <Textarea
                            {...register('subjects', {
                                required: REQUIRE_ERROR
                            })}
                            placeholder="Введите текст"
                            error={errors.subjects}
                            onFocus={() => setIsActive(true)}
                            onBlur={() => setTimeout(() => setIsActive(false), 300)}
                        />
                        {
                            (isActive && state.foundSubjects.length > 0 && state.allSubjects.length > 0) &&
                            <div className={styles.subjects}>
                                {
                                    (subjectTerm !== "" || subjectTerm[subjectTerm.length - 1] !== ';') ? [...state.foundSubjects].sort((a, b) => {
                                            if (a.subject.toLowerCase() < b.subject.toLowerCase()) {
                                                return -1;
                                            }
                                            if (a.subject.toLowerCase() > b.subject.toLowerCase()) {
                                                return 1;
                                            }
                                            return 0;
                                        }).map(s =>
                                            <div
                                                onClick={() => autoFill(s.subject)}
                                                key={s.id}
                                                className={styles.subject}
                                            >
                                                {s.subject}
                                            </div>
                                        )
                                        : [...state.allSubjects].sort((a, b) => {
                                            if (a.subject.toLowerCase() < b.subject.toLowerCase()) {
                                                return -1;
                                            }
                                            if (a.subject.toLowerCase() > b.subject.toLowerCase()) {
                                                return 1;
                                            }
                                            return 0;
                                        }).map(s =>
                                            <div
                                                onClick={() => autoFill(s.subject)}
                                                key={s.id}
                                                className={styles.subject}
                                            >
                                                {s.subject}
                                            </div>
                                        )
                                }
                            </div>
                        }
                    </div>
                </InputGroup>

                <InputGroup title="Регламентирующие документы">
                    <Textarea
                        {...register('document', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите ссылки на документы"
                        error={errors.document}
                    />
                </InputGroup>

                <InputGroup title="Контакты для консультаций внутри СевГУ">
                    <Textarea
                        {...register('internal_contacts', {
                            required: REQUIRE_ERROR
                        })}
                        placeholder="Введите контакты"
                        error={errors.internal_contacts}
                    />
                </InputGroup>
            </FieldsSection>

            <PrimaryButton style={{maxWidth: 400}} disabled={disabled}>Сохранить</PrimaryButton>
        </Form>
    );
};

export default AdminEventForm;