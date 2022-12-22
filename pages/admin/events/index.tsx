import {NextPageAuth} from "@/types/authProvider";
import AdminEvents from "@/webpages/admin/AdminEvents/AdminEvents";
import Meta from "@/utils/Meta/Meta";

const AdminEventsPage: NextPageAuth = () => {
    return (
        <Meta title="Мероприятия | Административная панель">
            <AdminEvents/>
        </Meta>
    )
}
AdminEventsPage.isOnlyAdmin = true;

export default AdminEventsPage;