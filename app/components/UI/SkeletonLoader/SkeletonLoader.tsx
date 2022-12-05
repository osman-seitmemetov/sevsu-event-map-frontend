import {FC} from "react";
import Skeleton, {SkeletonProps} from "react-loading-skeleton";

const SkeletonLoader: FC<SkeletonProps> = ({className, ...rest}) => {
    const baseColor = '#E4E4E4';
    const highlightColor = '#D5D5D5';

    return (
        <Skeleton
            {...rest}
            baseColor={baseColor}
            highlightColor={highlightColor}
            className={className}
        />
    );
};

export default SkeletonLoader;