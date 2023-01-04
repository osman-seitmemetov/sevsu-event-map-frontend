import type {NextPage} from 'next'
import Meta from "@/utils/Meta/Meta";
import Login from "@/webpages/Login/Login";

const HomePage: NextPage = () => {
    return (
        <Meta title="Войти">
            <Login/>
        </Meta>
    )
}

export default HomePage;
