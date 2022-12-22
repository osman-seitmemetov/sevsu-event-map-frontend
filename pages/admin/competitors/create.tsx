import {NextPageAuth} from "@/types/authProvider";
import AdminCompetitorCreate from "@/webpages/admin/AdminCompetitorCreate/AdminCompetitorCreate";
import Meta from "@/utils/Meta/Meta";

const AdminCompetitorCreatePage: NextPageAuth = () => {
    return (
        <Meta title="Создание типа участника | Административная панель">
            <AdminCompetitorCreate/>
        </Meta>
    )
}
AdminCompetitorCreatePage.isOnlyAdmin = true;

export default AdminCompetitorCreatePage;