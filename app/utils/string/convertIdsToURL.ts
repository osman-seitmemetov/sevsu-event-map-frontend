export const convertIdsToURL = (ids: number[]) => {
    let URLFragment = "?";

    for(let i = 0; i < ids.length; i++) {
        if(i === ids.length - 1) {
            URLFragment = URLFragment + `id=${ids[i]}`;
        } else {
            URLFragment = URLFragment + `id=${ids[i]}&`;
        }
    }

    return URLFragment;
}