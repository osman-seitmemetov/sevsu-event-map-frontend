import {NextPageAuth} from "@/types/authProvider";
import AdminFoundings from "@/webpages/admin/AdminFoundings/AdminFoundings";

const AdminHomePage: NextPageAuth = () => {
    return (
        // <div className="main">
            <AdminFoundings/>
        // </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;