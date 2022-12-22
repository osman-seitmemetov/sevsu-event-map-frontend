import {NextPageAuth} from "@/types/authProvider";
import AdminOrganizers from "@/webpages/admin/AdminOrganizers/AdminOrganizers";
import Meta from "@/utils/Meta/Meta";

const AdmOrganizersPage: NextPageAuth = () => {
    return (
        <Meta title="Организаторы | Административная панель">
            <AdminOrganizers/>
        </Meta>
    )
}
AdmOrganizersPage.isOnlyAdmin = true;

export default AdmOrganizersPage;