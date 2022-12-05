import React, {forwardRef, TextareaHTMLAttributes} from 'react';
import style from './Textarea.module.scss';
import {FieldError} from "react-hook-form";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    error?: FieldError
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((
    {error, className, inputMode = "text", ...rest}, ref
) => {
    return (
        <>
            <textarea
                className={`${style.textArea} ${error && style.textArea_error} ${className}`}
                ref={ref}
                {...rest}
            />

            {error && <div className={style.errorLog}>{error.message}</div>}
        </>
    );
})

Textarea.displayName = 'Textarea'

export default Textarea;