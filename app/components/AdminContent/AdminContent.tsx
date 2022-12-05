import React, {FC, ReactNode} from 'react';
import styles from "./AdminContent.module.scss";
import Container from "@/components/Container/Container";
import AdminSidebar from "@/components/AdminSidebar/AdminSidebar";
import Title from "@/UI/Title/Title";
import {useRouter} from "next/router";


interface AdminContentProps {
    children?: ReactNode,
    title: string,
}

const AdminContent: FC<AdminContentProps> = ({children, title}) => {
    return (
        <section className={styles.content} style={{display: "flex"}}>
            <Container>
                <AdminSidebar/>
                <div className={styles.right}>
                    <Title className={styles.title}>{title}</Title>
                    {children}
                </div>
            </Container>
        </section>
    );
};

export default AdminContent;