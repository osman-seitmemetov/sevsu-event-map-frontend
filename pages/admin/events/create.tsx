import {NextPageAuth} from "@/types/authProvider";
import Meta from "@/utils/Meta/Meta";
import AdminEventCreate from "@/webpages/admin/AdminEventCreate/AdminEventCreate";

const AdminHomePage: NextPageAuth = () => {
    return (
        <Meta title="Мероприятия | Административная панель">
            <AdminEventCreate/>
        </Meta>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;