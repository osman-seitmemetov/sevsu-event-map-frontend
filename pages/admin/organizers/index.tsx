import {NextPageAuth} from "@/types/authProvider";
import AdminOrganizers from "@/webpages/admin/AdminOrganizers/AdminOrganizers";

const AdmOrganizersPage: NextPageAuth = () => {
    return (
        // <div className="main">
            <AdminOrganizers/>
        // </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdmOrganizersPage;