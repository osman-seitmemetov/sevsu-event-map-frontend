import React, {FC} from "react";
import styles from "./HomeEventsGridLoader.module.scss";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


interface HomeEventsGridProps {
}

const HomeEventsGridLoader: FC<HomeEventsGridProps> = () => {
    return (
        <div className={styles.eventGrid}>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

                <div className={styles.column}>
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            borderRadius: 12,
                            paddingTop: '85%'
                        }}
                    />
                </div>

            </div>

            <div className={styles.scale}>
                <SkeletonLoader
                    style={{
                        width: '100%',
                        height: 4,
                        borderRadius: 4,
                    }}
                />

                <div className={styles.trls}>
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                    <SkeletonLoader
                        style={{
                            width: 10,
                            height: 20,
                            borderRadius: 4,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default HomeEventsGridLoader;

