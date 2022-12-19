import React, {FC} from 'react';
import styles from './CheckboxFilter.module.scss';


export interface CheckboxFilterOption {
    id: number,
    title: string
}

interface CheckboxFilterProps {
    className?: string,
    option: CheckboxFilterOption,
    actionSelect: (id: number) => void,
    actionDeselect: (id: number) => void,
    ids: number[]
}

const CheckboxFilter: FC<CheckboxFilterProps> = ({className, option, ids, actionSelect, actionDeselect}) => {
    const isCheckboxActive = ids.filter(id => id === option.id).length > 0;

    const checkboxHandler = () => {
        if (isCheckboxActive) {
            actionDeselect(option.id);
        } else {
            actionSelect(option.id);
        }
    }

    return (
        <div onClick={checkboxHandler} className={styles.checkboxWrapper}>
            <div className={styles.checkbox}>
                {isCheckboxActive && <div className={styles.checkbox__dot}></div>}
            </div>
            <div className={styles.title}>{option.title}</div>
        </div>
    );
}


export default CheckboxFilter;