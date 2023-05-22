import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/utils/Meta/Meta";
import AdminUsers from "@/webpages/admin/AdminUsers/AdminUsers";

const AdminUsersPage: NextPageAuth = () => {
    return (
        <Meta title="Пользователи | Административная панель">
            <AdminUsers />
        </Meta>
    )
}
AdminUsersPage.isOnlySuperuser = true;

export default AdminUsersPage;