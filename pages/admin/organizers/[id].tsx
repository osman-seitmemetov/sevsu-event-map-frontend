import {NextPageAuth} from "@/types/authProvider";
import AdminOrganizer from "@/webpages/admin/AdminOrganizer/AdminOrganizer";
import Meta from "@/utils/Meta/Meta";

const AdminOrganizerPage: NextPageAuth = () => {
    return (
        <Meta title="Редактирование организатора | Административная панель">
            <AdminOrganizer/>
        </Meta>
    )
}
AdminOrganizerPage.isOnlyAdmin = true;

export default AdminOrganizerPage;