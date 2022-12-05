import {NextPageAuth} from "@/types/authProvider";
import AdminCompetitors from "@/webpages/admin/AdminCompetitors/AdminCompetitors";

const AdminHomePage: NextPageAuth = () => {
    return (
        // <div className="main">
            <AdminCompetitors/>
        // </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;