import {NextPageAuth} from "@/types/authProvider";
import AdminOrganizer from "@/webpages/admin/AdminOrganizer/AdminOrganizer";
import Meta from "@/utils/Meta/Meta";

const AdminUserPage: NextPageAuth = () => {
    return (
        <Meta title="Редактирование пользователя | Административная панель">
            <AdminOrganizer/>
        </Meta>
    )
}
AdminUserPage.isOnlySuperuser = true;

export default AdminUserPage;