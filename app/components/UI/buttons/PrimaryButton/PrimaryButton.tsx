import React, {ButtonHTMLAttributes, FC} from 'react';
import style from './PrimaryButton.module.scss';

interface IPrimaryButton extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const PrimaryButton: FC<IPrimaryButton> = ({className, children, ...rest}) => {
    return (
        <>
            <button
                className={`${className && className} ${style.button}`}
                {...rest}
            >
                {children}
            </button>
        </>
    );
}

export default PrimaryButton;