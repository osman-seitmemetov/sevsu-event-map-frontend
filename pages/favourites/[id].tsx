import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Home from "@/webpages/Home/Home";
import Favourites from "@/webpages/Favourites/Favourites";
import FavouritesEvent from "@/webpages/FavouritesEvent/FavouritesEvent";

const FavouritesEventPage: NextPage = () => {
    return (
        <Meta title="Избранное" description="Карта инновационных мероприятий">
            <FavouritesEvent />
        </Meta>
    )
}

export default FavouritesEventPage;
