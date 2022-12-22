import {NextPageAuth} from "@/types/authProvider";
import AdminCompetitors from "@/webpages/admin/AdminCompetitors/AdminCompetitors";
import Meta from "@/utils/Meta/Meta";

const AdminCompetitorsPage: NextPageAuth = () => {
    return (
        <Meta title="Типы участников | Административная панель">
            <AdminCompetitors/>
        </Meta>
    )
}
AdminCompetitorsPage.isOnlyAdmin = true;

export default AdminCompetitorsPage;