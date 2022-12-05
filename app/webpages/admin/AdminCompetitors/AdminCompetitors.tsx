import React, {FC} from "react";
import styles from "./AdminCompetitors.module.scss";
import {useCompetitorsFetch} from "./useCompetitorsFetch";
import AdminCompetitorsItem from "./AdminCompetitorsItem/AdminCompetitorsItem";
import Input from "@/UI/InputGroup/Input/Input";
import InputGroup from "@/UI/InputGroup/InputGroup";
import PrimaryButton from "@/UI/buttons/PrimaryButton/PrimaryButton";
import AdminContent from "@/components/AdminContent/AdminContent";
import AdminCompetitorsNavbar from "@/webpages/admin/AdminCompetitors/AdminCompetitorsNavbar/AdminCompetitorsNavbar";


const AdminCompetitors: FC = () => {
    const {data, isLoading} = useCompetitorsFetch();
    const competitors = data?.data;

    return (
        <>
            <AdminCompetitorsNavbar/>
            <AdminContent title="Участники">
                <div className={styles.competitors}>
                    <div className={styles.form}>
                        <InputGroup title="Новый тип участника">
                            <Input
                                className={styles.form__input}
                                placeholder="Введите название типа участника"
                            />
                        </InputGroup>

                        <PrimaryButton style={{height: 50}} className={styles.form__button}>создать тип
                            участника</PrimaryButton>
                    </div>

                    <div className={styles.items}>
                        {
                            isLoading
                                ? <div>loading...</div>
                                : competitors?.length
                                    ? competitors?.map(competitor =>
                                        <AdminCompetitorsItem
                                            key={competitor.id}
                                            competitor={competitor}
                                        />)
                                    : <div>Типы участников не найдены</div>
                        }
                    </div>
                </div>
            </AdminContent>
        </>
    );
}

export default AdminCompetitors;

