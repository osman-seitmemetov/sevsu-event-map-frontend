import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/utils/Meta/Meta";
import AdminOrganizerCreate from "@/webpages/admin/AdminOrganizerCreate/AdminOrganizerCreate";

const AdminOrganizerCreatePage: NextPageAuth = () => {
    return (
        <Meta title="Создание организатора | Административная панель">
            <AdminOrganizerCreate />
        </Meta>
    )
}
AdminOrganizerCreatePage.isOnlyAdmin = true;

export default AdminOrganizerCreatePage;