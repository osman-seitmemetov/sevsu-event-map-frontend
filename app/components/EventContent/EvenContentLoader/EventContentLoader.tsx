import React, {FC} from "react";
import styles from "./EventContentLoader.module.scss"
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


const EventContentLoader: FC = () => {
    return (
        <>
            <SkeletonLoader
                className={styles.logo}
                style={{
                    marginBottom: 30,
                    width: 450,
                    height: 95,
                    borderRadius: 18
                }}
            />

            <SkeletonLoader
                style={{
                    width: '70%',
                    marginBottom: 20,
                    height: 50,
                    borderRadius: 12
                }}
            />

            <div className={styles.content}>
                <div>
                    <SkeletonLoader
                        style={{
                            width: '70%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '80%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '50%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '30%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '100%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '50%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '60%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '90%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '30%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '65%',
                            marginBottom: 7,
                            height: 20,
                            borderRadius: 12
                        }}
                    />
                </div>

                <div>
                    <SkeletonLoader
                        style={{
                            width: '100%',
                            marginBottom: 15,
                            height: 70,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '100%',
                            marginBottom: 15,
                            height: 70,
                            borderRadius: 12
                        }}
                    />

                    <SkeletonLoader
                        style={{
                            width: '100%',
                            marginBottom: 15,
                            height: 70,
                            borderRadius: 12
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default EventContentLoader;

