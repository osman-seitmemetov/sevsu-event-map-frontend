import React, {FC, useEffect} from "react";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminHomeNavbar from "@/webpages/admin/AdminHome/AdminHomeNavbar/AdminHomeNavbar";
import {useRouter} from "next/router";


const AdminHome: FC = () => {
    const {push} = useRouter();

    useEffect(() => {
        push('/admin/events')
    }, [push])

    return (
        <>
            {/*<AdminHomeNavbar />*/}
            {/*<EventsPrint title="Административная панель"></EventsPrint>*/}
        </>
    );
}

export default AdminHome;

