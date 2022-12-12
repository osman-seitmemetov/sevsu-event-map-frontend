import React, {CSSProperties, FC, ReactNode} from 'react';
import styles from './InputRangeGroup.module.scss';


interface InputRangeGroupProps {
    className?: string,
    children?: ReactNode,
    style?: CSSProperties,
    autoMargin?: boolean
}

const InputRangeGroup: FC<InputRangeGroupProps> = ({className, children, style, autoMargin}) => {
    return (
        <div
            className={`${styles.input} ${className} ${autoMargin && styles.autoMargin}`}
            style={style}
        >
            {children}
        </div>
    );
}

export default InputRangeGroup;