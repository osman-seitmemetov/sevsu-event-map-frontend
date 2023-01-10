import React, {FC} from "react";
import styles from "./HomeEventsFilterSubject.module.scss";
import {ISubjectClient} from "@/models/ISubject";
import {useActions} from "@/hooks/useActions";


interface HomeEventsFilterSubjectProps {
    subject: ISubjectClient,
    selectedSubjects: ISubjectClient[],
}

const HomeEventsFilterSubject: FC<HomeEventsFilterSubjectProps> = ({subject, selectedSubjects}) => {
    const {subjectSelect, subjectDeselect} = useActions();
    const isSubjectSelected = selectedSubjects.filter(s => s.id === subject.id).length > 0;

    const onClickHandler = () => {
        if (isSubjectSelected) {
            subjectDeselect(subject);
        } else {
            subjectSelect(subject);
        }
    }

    return (
        <div onClick={onClickHandler} className={`${styles.subject} ${isSubjectSelected && styles.subject_active}`}>{subject.subject}</div>
    );
}

export default HomeEventsFilterSubject;

