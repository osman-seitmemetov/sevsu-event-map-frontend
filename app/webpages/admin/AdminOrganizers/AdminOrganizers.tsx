import React, {FC, useState} from "react";
import styles from "./AdminOrganizers.module.scss";
import {useOrganizersFetch} from "./useOrganizersFetch";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminOrganizersItem from "@/webpages/admin/AdminOrganizers/AdminOrganizersItem/AdminOrganizersItem";
import AdminOrganizersNavbar from "@/webpages/admin/AdminOrganizers/AdminOrganizersNavbar/AdminOrganizersNavbar";
import SkeletonLoader from "@/UI/SkeletonLoader/SkeletonLoader";


const AdminOrganizers: FC = () => {
    const [activeModal, setActiveModal] = useState(false);
    const {data, isLoading, deleteAsync} = useOrganizersFetch();
    const organizers = data?.data;

    return (
        <>
            <AdminOrganizersNavbar />
            <AdminContent title="Организаторы">
                <div className={styles.items}>
                    {
                        isLoading
                            ? <SkeletonLoader
                                count={4}
                                style={{
                                    width: "100%",
                                    height: 108,
                                    marginBottom: 20,
                                    borderRadius: 12
                                }}
                            />
                            : organizers?.length
                                ? organizers.map(organizer =>
                                    <AdminOrganizersItem
                                        organizer={organizer}
                                        key={organizer.id}
                                        setActiveModal={setActiveModal}
                                        removeHandler={deleteAsync}
                                        activeModal={activeModal}
                                    />
                                )
                                : <div>Организаторы не найдены</div>
                    }
                </div>
            </AdminContent>
        </>
    );
}

export default AdminOrganizers;

