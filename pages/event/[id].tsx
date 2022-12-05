import {NextPageAuth} from "@/types/authProvider";
import Event from "@/webpages/Event/Event";

const AdminHomePage: NextPageAuth = () => {
    return (
        // <div className="main">
            <Event />
        // </div>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;