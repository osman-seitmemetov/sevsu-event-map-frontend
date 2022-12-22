import AdminHome from "@/webpages/admin/AdminHome/AdminHome";
import {NextPageAuth} from "@/types/authProvider";

const AdminHomePage: NextPageAuth = () => {
    return (
        <AdminHome/>
    )
}
AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;