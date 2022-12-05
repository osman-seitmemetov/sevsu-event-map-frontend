import React, {AnchorHTMLAttributes, ButtonHTMLAttributes, FC} from 'react';
import style from './ButtonTransparent.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    link?: string
}

const ButtonTransparent: FC<IButton> = ({className, link, children, ...rest}) => {
    return (
        <button {...rest} className={`${className} ${style.button}`}>{children}</button>
    );
}

export default ButtonTransparent;