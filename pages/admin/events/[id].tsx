import {NextPageAuth} from "@/types/authProvider";
import AdminEvent from "@/webpages/admin/AdminEvent/AdminEvent";
import Meta from "@/utils/Meta/Meta";

const AdminHomePage: NextPageAuth = () => {
    return (
        <Meta title="Мероприятия | Административная панель">
            <AdminEvent/>
        </Meta>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;