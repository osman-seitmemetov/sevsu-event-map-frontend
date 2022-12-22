import {NextPageAuth} from "@/types/authProvider";
import AdminEvent from "@/webpages/admin/AdminEvent/AdminEvent";
import Meta from "@/utils/Meta/Meta";

const AdminEventPage: NextPageAuth = () => {
    return (
        <Meta title="Редактирование мероприятия | Административная панель">
            <AdminEvent/>
        </Meta>
    )
}
AdminEventPage.isOnlyAdmin = true;

export default AdminEventPage;