import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Registration from "@/webpages/Registration/Registration";

const HomePage: NextPage = () => {
    return (
        <Meta title="Регистрация">
            <Registration/>
        </Meta>
    )
}

export default HomePage;
