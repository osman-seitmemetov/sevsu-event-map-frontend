import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Home from "@/webpages/Home/Home";
import Favourites from "@/webpages/Favourites/Favourites";

const HomePage: NextPage = () => {
    return (
        <Meta title="Избранное" description="Карта инновационных мероприятий">
            <Favourites />
        </Meta>
    )
}

export default HomePage;
