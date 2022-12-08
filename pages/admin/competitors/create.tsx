import {NextPageAuth} from "@/types/authProvider";
import AdminCompetitors from "@/webpages/admin/AdminCompetitors/AdminCompetitors";
import AdminCompetitorCreate from "@/webpages/admin/AdminCompetitorCreate/AdminCompetitorCreate";

const AdminHomePage: NextPageAuth = () => {
    return (
        <AdminCompetitorCreate/>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;