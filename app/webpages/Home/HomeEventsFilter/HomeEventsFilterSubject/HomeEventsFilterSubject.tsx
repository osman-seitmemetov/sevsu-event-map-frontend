import React, {FC} from "react";
import styles from "./HomeEventsFilterSubject.module.scss";
import {ISubject} from "@/models/ISubject";
import {useActions} from "@/hooks/useActions";


interface HomeEventsFilterSubjectProps {
    subject: ISubject,
    subjects: ISubject[],
}

const HomeEventsFilterSubject: FC<HomeEventsFilterSubjectProps> = ({subject, subjects}) => {
    const {subjectSelect, subjectDeselect} = useActions();
    const isSubjectSelected = subjects.filter(s => s.id === subject.id).length > 0;

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

