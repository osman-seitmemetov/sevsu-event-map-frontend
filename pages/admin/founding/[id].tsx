import {NextPageAuth} from "@/types/authProvider";
import AdminFounding from "@/webpages/admin/AdminFounding/AdminFounding";
import Meta from "@/utils/Meta/Meta";

const AdminFoundingPage: NextPageAuth = () => {
    return (
        <Meta title="Редактирование типа финансирования | Административная панель">
            <AdminFounding/>
        </Meta>
    )
}
AdminFoundingPage.isOnlyAdmin = true;

export default AdminFoundingPage;