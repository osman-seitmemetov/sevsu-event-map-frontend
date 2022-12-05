import React, {FC} from 'react';
import MaskedInput from "react-maskedinput";
import DatePicker from "react-datepicker";
import styles from "@/components/UI/InputGroup/Input/Input.module.scss";
import {FieldError} from "react-hook-form";

interface InputDateProps {
    dateFormat: string,
    placeholder: string,
    mask: string,
    error?: FieldError,
    onChange?: any,
    selected: Date | null,
    disabled?: boolean
}

const InputDate: FC<InputDateProps> = ({dateFormat, placeholder, mask, error, onChange, selected, ...rest}) => {
    return (
        <>
            <DatePicker
                selected={selected}
                onChange={onChange}
                dateFormat={dateFormat}
                placeholderText={placeholder}
                customInput={
                    <MaskedInput mask={mask} placeholder={placeholder}/>
                }
                className={`input-date ${error && styles.input_error}`}
                {...rest}
            />
            {error && <div className={styles.errorLog}>{error.message}</div>}
        </>
    );
}

export default InputDate;