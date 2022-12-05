import {NextPageAuth} from "@/types/authProvider";
import AdminEvents from "@/webpages/admin/AdminEvents/AdminEvents";
import Meta from "@/utils/Meta/Meta";

const AdminHomePage: NextPageAuth = () => {
    return (
        <Meta title="Мероприятия | Административная панель">
            <AdminEvents/>
        </Meta>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;