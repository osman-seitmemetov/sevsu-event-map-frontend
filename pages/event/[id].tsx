import {NextPageAuth} from "@/types/authProvider";
import Event from "@/webpages/Event/Event";
import Meta from "../../app/utils/Meta/Meta";
import Home from "../../app/webpages/Home/Home";

const AdminHomePage: NextPageAuth = () => {
    return (
        <Meta title="Название мероприятия" description="Карта инновационных мероприятий">
            <Event />
        </Meta>
    )
}
// AdminHomePage.isOnlyAdmin = true;

export default AdminHomePage;