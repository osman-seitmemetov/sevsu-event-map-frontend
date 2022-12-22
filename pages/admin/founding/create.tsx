import {NextPageAuth} from "@/types/authProvider";
import AdminFoundingCreate from "@/webpages/admin/AdminFoundingCreate/AdminFoundingCreate";
import Meta from "@/utils/Meta/Meta";

const AdminFoundingCreatePage: NextPageAuth = () => {
    return (
        <Meta title="Создание типа финансирования | Административная панель">
            <AdminFoundingCreate/>
        </Meta>
    )
}

AdminFoundingCreatePage.isOnlyAdmin = true;

export default AdminFoundingCreatePage;