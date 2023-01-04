import {NextPageAuth} from "@/types/authProvider";
import Event from "@/webpages/Event/Event";
import {GetStaticPaths, GetStaticProps} from "next";
import {EventService} from "@/services/EventService";
import {IEventOrganizer} from "@/models/IEventOrganizer";
import Error404 from "../404";


// export const getStaticPaths: GetStaticPaths = async () => {
//     try {
//         const {data: events} = await EventService.getAll()
//         const paths = events.map((event) => ({
//             params: {id: String(event.id)},
//         }))
//
//         return {paths, fallback: 'blocking'}
//     } catch {
//         return {
//             paths: [],
//             fallback: false,
//         }
//     }
// }
//
// export const getStaticProps: GetStaticProps = async ({params}) => {
//     try {
//         const {data: event} = await EventService.getByIds([Number(params?.id)])
//
//         return {
//             props: {event},
//             revalidate: 30
//         }
//     } catch (e) {
//         console.log(e)
//
//         return {
//             notFound: true,
//         }
//     }
// }

const EventPage: NextPageAuth<{ event: IEventOrganizer }> = ({event}) => {
    return <Event event={event}/>
    // event
    //     ? <Event event={event}/>
    //     : <Error404/>
}

export default EventPage;