import {NextPageAuth} from "@/types/authProvider";
import AdminEvents from "@/webpages/admin/AdminEvents/AdminEvents";
import Meta from "@/utils/Meta/Meta";
import AdminOrganizerCreate from "@/webpages/admin/AdminOrganizerCreate/AdminOrganizerCreate";

const AdminOrganizerCreatePage: NextPageAuth = () => {
    return (
        <Meta title="Организаторы | Административная панель">
            <AdminOrganizerCreate />
        </Meta>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminOrganizerCreatePage;