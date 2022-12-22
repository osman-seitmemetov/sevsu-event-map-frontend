import {NextPageAuth} from "@/types/authProvider";
import AdminCompetitor from "@/webpages/admin/AdminCompetitor/AdminCompetitor";
import Meta from "@/utils/Meta/Meta";

const AdminCompetitorPage: NextPageAuth = () => {
    return (
        <Meta title="Редактирование типа участника | Административная панель">
            <AdminCompetitor/>
        </Meta>
    )
}

AdminCompetitorPage.isOnlyAdmin = true;

export default AdminCompetitorPage;