import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/utils/Meta/Meta";
import AdminEventCreate from "@/webpages/admin/AdminEventCreate/AdminEventCreate";

const AdminEventCreatePage: NextPageAuth = () => {
    return (
        <Meta title="Создание мероприятия | Административная панель">
            <AdminEventCreate/>
        </Meta>
    )
}
AdminEventCreatePage.isOnlyAdmin = true;

export default AdminEventCreatePage;