import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Shared from "@/webpages/Shared/Shared";

const HomePage: NextPage = () => {
    return (
        <Meta title="Мероприятия, которыми поделились" description="Карта инновационных мероприятий">
            <Shared />
        </Meta>
    )
}

export default HomePage;
