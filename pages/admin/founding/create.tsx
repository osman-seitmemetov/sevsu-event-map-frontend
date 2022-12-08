import {NextPageAuth} from "@/types/authProvider";
import AdminFoundingCreate from "@/webpages/admin/AdminFoundingCreate/AdminFoundingCreate";

const AdminHomePage: NextPageAuth = () => {
    return (
        <AdminFoundingCreate/>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;