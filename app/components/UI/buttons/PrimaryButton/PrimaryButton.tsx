import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './PrimaryButton.module.scss';

interface IPrimaryButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    hint?: string
}

const PrimaryButton: FC<IPrimaryButton> = ({className, children, hint, ...rest}) => {
    return (
        <>
            <button
                className={`${className && className} ${style.button}`}
                {...rest}
            >
                {children}

                {
                    hint && <div className={style.hint}>
                        {hint}
                    </div>
                }
            </button>
        </>
    );
}

export default PrimaryButton;