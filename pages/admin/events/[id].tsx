import {NextPageAuth} from "@/types/authProvider";
import AdminEvent from "@/webpages/admin/AdminEvent/AdminEvent";

const AdminHomePage: NextPageAuth = () => {
    return (
        // <div className="main">
            <AdminEvent/>
        // </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;