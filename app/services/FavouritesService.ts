import {IFoundingTypeFields} from "@/models/form";
import {instance} from "@/api/interceptots";


export const FavouritesService = {
    async updateFavourites(userId: number, eventIds: number[]) {
        const response = await instance.put<{user: number, events: number[]}>('/v1/favorite_list/', {user: userId, events: eventIds});
        return response.data.events;
    }
}