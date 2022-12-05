import {NextPageAuth} from "@/types/authProvider";
import AdminOrganizer from "@/webpages/admin/AdminOrganizer/AdminOrganizer";

const AdminHomePage: NextPageAuth = () => {
    return (
        // <div className="main">
            <AdminOrganizer/>
        // </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;