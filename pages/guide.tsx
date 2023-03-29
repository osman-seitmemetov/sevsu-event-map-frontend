import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Guide from "@/webpages/Guide/Guide";

const HomePage: NextPage = () => {
    return (
        <Meta title={"Инструкция для пользователя"} description="Карта инновационных мероприятий">
            <Guide/>
        </Meta>
    )
}

export default HomePage;
