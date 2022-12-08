import {NextPageAuth} from "@/types/authProvider";
import AdminFounding from "@/webpages/admin/AdminFounding/AdminFounding";

const AdminHomePage: NextPageAuth = () => {
    return (
        <AdminFounding/>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;