import React, {FC, useEffect, useState} from "react";
import styles from "@/webpages/Home/HomeEventsFilter/HomeEventsFilter.module.scss";
import Dropdown from "@/UI/Dropdown/Dropdown";
import {useFetchOrganizersForFilter} from "@/hooks/useFetchOrganizersForFilter";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useFetchCompetitorsForFilter} from "@/hooks/useFetchCompetitorsForFilter";
import {useFetchFoundingTypesForFilter} from "@/hooks/useFetchFoundingTypesForFilter";
import InputRange from "@/UI/InputGroup/InputRangeGroup/InputRange/InputRange";
import InputRangeGroup from "@/UI/InputGroup/InputRangeGroup/InputRangeGroup";
import {useActions} from "@/hooks/useActions";
import InputDate from "@/UI/InputGroup/InputDate/InputDate";
import CheckboxFilter, {CheckboxFilterOption} from "@/UI/CheckboxFilter/CheckboxFilter";
import HomeEventsFilterSubject from "@/webpages/Home/HomeEventsFilter/HomeEventsFilterSubject/HomeEventsFilterSubject";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


const TRLsForFilter: CheckboxFilterOption[] = [
    {
        id: 0,
        title: "0"
    },
    {
        id: 1,
        title: "1"
    },
    {
        id: 2,
        title: "2"
    },
    {
        id: 3,
        title: "3"
    },
    {
        id: 4,
        title: "4"
    },
    {
        id: 5,
        title: "5"
    },
    {
        id: 6,
        title: "6"
    },
    {
        id: 7,
        title: "7"
    },
    {
        id: 8,
        title: "8"
    },
    {
        id: 9,
        title: "9"
    }
]

const HomeEventsFilter: FC = () => {
    const {data: organizersData, isLoading: isOrganizersLoading} = useFetchOrganizersForFilter();
    const organizers = organizersData || [];
    const {data: competitorTypesData, isLoading: isCompetitorTypesLoading} = useFetchCompetitorsForFilter();
    const competitorTypes = competitorTypesData || [];
    const {data: foundingTypesData, isLoading: isFoundingTypesLoading} = useFetchFoundingTypesForFilter();
    const foundingTypes = foundingTypesData || [];

    const state = useTypedSelector(state => state.filterReducer);

    const {
        changeSubmissionDeadlineAfter, changeSubmissionDeadlineBefore, changeCoFoundingRangeHigh,
        changeCoFoundingRangeLow, changeFoundingRangeLow, changeFoundingRangeHigh, organizerSelect,
        organizerDeselect, foundingTypeSelect, foundingTypeDeselect, competitorTypeDeselect,
        competitorTypeSelect, TRLSelect, TRLDeselect, loadAllSubjects, subjectsSort
    } = useActions();

    useEffect(() => {
        loadAllSubjects();
    }, []);

    const [isFilterStateEmpty, setIsFilterStateEmpty] = useState(true);

    useEffect(() => {
        setIsFilterStateEmpty(state.organizers.length === 0
            && state.competitorTypes.length === 0 && state.foundingRange.low === ""
            && state.foundingRange.high === "" && state.coFoundingRange.low === ""
            && state.coFoundingRange.high === "" && state.foundingType.length === 0
            && state.submissionDeadlineBefore === undefined && state.submissionDeadlineAfter === undefined
            && state.trls.length === 0 && state.selectedSubjects.length === 0)
    }, [state])

    return (
        <aside className={styles.filter}>
            <div className={styles.title}>Фильтры</div>

            <div className={styles.scrollarea}>
                {
                    (isOrganizersLoading && isCompetitorTypesLoading && isFoundingTypesLoading)
                        ? <>
                            <SkeletonLoader
                                style={{
                                    marginBottom: 15,
                                    height: 50,
                                    width: '100%',
                                    borderRadius: 12
                                }}
                            />

                            <SkeletonLoader
                                style={{
                                    marginBottom: 15,
                                    height: 50,
                                    width: '100%',
                                    borderRadius: 12
                                }}
                            />

                            <SkeletonLoader
                                style={{
                                    marginBottom: 15,
                                    height: 50,
                                    width: '100%',
                                    borderRadius: 12
                                }}
                            />

                            <SkeletonLoader
                                style={{
                                    marginBottom: 15,
                                    height: 50,
                                    width: '100%',
                                    borderRadius: 12
                                }}
                            />

                            <SkeletonLoader
                                style={{
                                    marginBottom: 15,
                                    height: 50,
                                    width: '100%',
                                    borderRadius: 12
                                }}
                            />
                        </>
                        : <>
                            <Dropdown title="Организатор мероприятия">
                                {
                                    isOrganizersLoading
                                        ? <div>loading...</div>
                                        : organizers.map(option =>
                                            <CheckboxFilter
                                                actionDeselect={organizerDeselect}
                                                actionSelect={organizerSelect}
                                                ids={state.organizers}
                                                key={option.id}
                                                option={option}
                                            />
                                        )
                                }
                            </Dropdown>

                            <Dropdown title="Требования к виду участника">
                                {
                                    isCompetitorTypesLoading
                                        ? <div>loading...</div>
                                        : competitorTypes.map(option =>
                                            <CheckboxFilter
                                                actionDeselect={competitorTypeDeselect}
                                                actionSelect={competitorTypeSelect}
                                                ids={state.competitorTypes}
                                                key={option.id}
                                                option={option}
                                            />
                                        )
                                }
                            </Dropdown>

                            <Dropdown title="Финансирование (в рублях)">
                                <InputRangeGroup>
                                    <InputRange
                                        label="от"
                                        value={state.foundingRange.low.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}
                                        onChange={(e) => {
                                            if (!isNaN(Number(e.target.value.split(" ").join("")))) {
                                                changeFoundingRangeLow(e.target.value.split(" ").join(""));
                                            }
                                        }}
                                        style={{
                                            marginTop: 0,
                                            height: 40
                                        }}
                                    />
                                    <InputRange
                                        label="до"
                                        value={state.foundingRange.high.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}
                                        onChange={(e) => {
                                            if (!isNaN(Number(e.target.value.split(" ").join("")))) {
                                                changeFoundingRangeHigh(e.target.value.split(" ").join(""));
                                            }
                                        }}
                                        style={{
                                            marginTop: 0,
                                            height: 40
                                        }}
                                    />
                                </InputRangeGroup>
                                {Number(state.foundingRange.low) > Number(state.foundingRange.high) && (state.foundingRange.high !== "") &&
                                    <div>Значение слева не может быть больше чем справа</div>}
                            </Dropdown>

                            <Dropdown title="Софинансирование (в процентах)">
                                <InputRangeGroup>
                                    <InputRange
                                        label="от"
                                        value={state.coFoundingRange.low}
                                        onChange={(e) => {
                                            if (!isNaN(Number(e.target.value)) && Number(e.target.value) <= 100) {
                                                changeCoFoundingRangeLow(e.target.value);
                                            }
                                        }}
                                        style={{
                                            marginTop: 0,
                                            height: 40
                                        }}
                                    />
                                    <InputRange
                                        label="до"
                                        value={state.coFoundingRange.high}
                                        onChange={(e) => {
                                            if (!isNaN(Number(e.target.value)) && Number(e.target.value) <= 100) {
                                                changeCoFoundingRangeHigh(e.target.value);
                                            }
                                        }}
                                        style={{
                                            marginTop: 0,
                                            height: 40
                                        }}
                                    />
                                </InputRangeGroup>
                                {Number(state.coFoundingRange.low) > Number(state.coFoundingRange.high) && (state.coFoundingRange.high !== "") &&
                                    <div>Значение слева не может быть больше чем справа</div>}
                            </Dropdown>

                            <Dropdown title="Тип финансирования">
                                {
                                    isFoundingTypesLoading
                                        ? <div>loading...</div>
                                        : foundingTypes.map(option =>
                                            <CheckboxFilter
                                                actionDeselect={foundingTypeDeselect}
                                                actionSelect={foundingTypeSelect}
                                                ids={state.foundingType}
                                                key={option.id}
                                                option={option}
                                            />
                                        )
                                }
                            </Dropdown>

                            <Dropdown title="Срок подачи документов">
                                <InputRangeGroup>
                                    <div className={styles.inputDateWrapper}>
                                        <div className={styles.inputDateWrapper__label}>от</div>
                                        <InputDate
                                            dateFormat="dd.MM.yyyy"
                                            placeholder="дд.мм.гггг"
                                            mask="11.11.1111"
                                            selected={(state.submissionDeadlineAfter) || null}
                                            onChange={(date: Date) => {
                                                changeSubmissionDeadlineAfter(date)
                                            }}
                                            style={{
                                                marginTop: 0,
                                                height: 40
                                            }}
                                        />
                                    </div>

                                    <div className={styles.inputDateWrapper}>
                                        <div className={styles.inputDateWrapper__label}>до</div>
                                        <InputDate
                                            dateFormat="dd.MM.yyyy"
                                            placeholder="дд.мм.гггг"
                                            mask="11.11.1111"
                                            selected={(state.submissionDeadlineBefore) || null}
                                            onChange={(date: Date) => {
                                                changeSubmissionDeadlineBefore(date)
                                            }}
                                            style={{
                                                marginTop: 0,
                                                height: 40
                                            }}
                                        />
                                    </div>
                                </InputRangeGroup>
                            </Dropdown>

                            <Dropdown title="TRL/УГТ">
                                {
                                    TRLsForFilter.map(option =>
                                        <CheckboxFilter
                                            actionDeselect={TRLDeselect}
                                            actionSelect={TRLSelect}
                                            ids={state.trls}
                                            key={option.id}
                                            option={option}
                                        />
                                    )
                                }
                            </Dropdown>
                        </>
                }
            </div>

            <div className={styles.subjectsWrapper}>
                {
                    isFilterStateEmpty
                        ? state.isEventsLoading
                            ? <SkeletonLoader
                                style={{
                                    height: 240,
                                    width: '100%',
                                    borderRadius: 12
                                }}
                            />
                            : state.allSubjects.length > 0
                                ? <div className={styles.subjects}>
                                    {
                                        [...state.allSubjects].sort((a, b) => {
                                            if (a.subject.toLowerCase() < b.subject.toLowerCase()) {
                                                return -1;
                                            }
                                            if (a.subject.toLowerCase() > b.subject.toLowerCase()) {
                                                return 1;
                                            }
                                            return 0;
                                        }).map(s =>
                                            <HomeEventsFilterSubject
                                                key={s.id}
                                                subject={s}
                                                selectedSubjects={state.selectedSubjects}
                                            />
                                        )
                                    }
                                </div>
                                : <div>Тематики не найдены</div>
                        : state.sortedSubjects.length > 0
                            ? <div className={styles.subjects}>
                                {
                                    [...state.sortedSubjects].sort((a, b) => {
                                        if (a.subject.toLowerCase() < b.subject.toLowerCase()) {
                                            return -1;
                                        }
                                        if (a.subject.toLowerCase() > b.subject.toLowerCase()) {
                                            return 1;
                                        }
                                        return 0;
                                    }).map(s =>
                                        <HomeEventsFilterSubject
                                            key={s.id}
                                            subject={s}
                                            selectedSubjects={state.selectedSubjects}
                                        />
                                    )
                                }
                            </div>
                            : <div>Тематики не найдены</div>
                }
            </div>
        </aside>
    );
}

export default HomeEventsFilter;