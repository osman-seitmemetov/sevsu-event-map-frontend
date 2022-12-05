import React, {FC, forwardRef, InputHTMLAttributes} from 'react';
import styles from './InputRange.module.scss';
import {FieldError} from "react-hook-form";

interface InputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: FieldError,
    label: string
}

const InputRange = forwardRef<HTMLInputElement, InputRangeProps>((
    {error, className, label, ...rest}, ref
) => {


    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.label}>{label}</div>
                <input
                    className={`${styles.input} ${error && styles.input_error} ${className}`}
                    ref={ref}
                    {...rest}
                />
            </div>
            {error && <div className={styles.errorLog}>{error.message}</div>}
        </div>
    )
})

InputRange.displayName = 'InputRange'

export default InputRange;