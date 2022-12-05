import AdminHome from "@/webpages/admin/AdminHome/AdminHome";
import {NextPageAuth} from "@/types/authProvider";

const AdminHomePage: NextPageAuth = () => {
    return (
        <div className="main">
            <AdminHome/>
        </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;