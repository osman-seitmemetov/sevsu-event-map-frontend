import React, {CSSProperties, FC, ReactNode} from 'react';
import styles from './InputRangeGroup.module.scss';
import {FieldError} from "react-hook-form";


interface InputRangeGroupProps {
    className?: string,
    children?: ReactNode,
    style?: CSSProperties,
    autoMargin?: boolean
    // errorLow?: FieldError,
    // errorHigh?: FieldError,
    // nameLow: string,
    // nameHigh: string,
    // register: any
}

const InputRangeGroup: FC<InputRangeGroupProps> = ({className, children, style, autoMargin,
                                                       // errorLow, errorHigh, register, nameLow, nameHigh
}) => {
    return (
        <div
            className={`${styles.input} ${className} ${autoMargin && styles.autoMargin}`}
            style={style}
        >
            {children}

            {/*<div>*/}
            {/*    <div className={styles.wrapper}>*/}
            {/*        <div className={styles.label}>от</div>*/}
            {/*        <input*/}
            {/*            className={`${styles.input} ${errorLow && styles.input_error} ${className}`}*/}
            {/*            {...register(nameLow, {*/}
            {/*                required: "Это поле обязательное"*/}
            {/*            })}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    {errorLow && <div className={styles.errorLog}>{errorLow.message}</div>}*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <div className={styles.wrapper}>*/}
            {/*        <div className={styles.label}>до</div>*/}
            {/*        <input*/}
            {/*            className={`${styles.input} ${errorHigh && styles.input_error} ${className}`}*/}
            {/*            {...register(nameHigh, {*/}
            {/*                required: "Это поле обязательное",*/}
            {/*                onChange: () => {}*/}
            {/*            })}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*    {errorHigh && <div className={styles.errorLog}>{errorHigh.message}</div>}*/}
            {/*</div>*/}
        </div>
    );
}

export default InputRangeGroup;