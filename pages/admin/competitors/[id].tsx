import {NextPageAuth} from "@/types/authProvider";
import AdminCompetitor from "@/webpages/admin/AdminCompetitor/AdminCompetitor";

const AdminHomePage: NextPageAuth = () => {
    return (
        <AdminCompetitor/>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;