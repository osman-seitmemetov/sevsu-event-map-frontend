import React, {FC, ReactNode} from 'react';
import styles from "./AdminContent.module.scss";
import Container from "@/components/Container/Container";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import Title from "@/UI/Title/Title";
import {useRouter} from "next/router";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


interface AdminContentProps {
    children?: ReactNode,
    title: string,
    isLoading?: boolean
}

const AdminContent: FC<AdminContentProps> = ({children, title, isLoading}) => {
    return (
        <section className={styles.content} style={{display: "flex"}}>
            <Container>
                <AdminSidebar/>
                <div className={styles.right}>
                    {
                        isLoading
                            ? <SkeletonLoader
                                style={{
                                    marginBottom: 20,
                                    height: 52,
                                    width: '60%',
                                    borderRadius: 12
                                }}
                            />
                            : <Title className={styles.title}>{title}</Title>
                    }
                    {children}
                </div>
            </Container>
        </section>
    );
};

export default AdminContent;