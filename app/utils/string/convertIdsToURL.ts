export const convertIdsToURL = (ids: number[], label: string) => {
    let URLFragment = "";

    for (let i = 0; i < ids.length; i++) {
        URLFragment = URLFragment + `${label}=${ids[i]}&`;
    }

    return URLFragment;
}