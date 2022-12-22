import {NextPageAuth} from "@/types/authProvider";
import AdminFoundings from "@/webpages/admin/AdminFoundings/AdminFoundings";
import Meta from "@/utils/Meta/Meta";

const AdminFoundingsPage: NextPageAuth = () => {
    return (
        <Meta title="Типы финансирования | Административная панель">
            <AdminFoundings/>
        </Meta>
    )
}

AdminFoundingsPage.isOnlyAdmin = true;

export default AdminFoundingsPage;