import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Home from "@/webpages/Home/Home";

const HomePage: NextPage = () => {
    return (
        <Meta title="Главная" description="Карта мероприятий">
            <Home />
        </Meta>
    )
}

export default HomePage;
