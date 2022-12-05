export const convertPostgresDateWithoutTime = (date: string) => {
    return new Date(`${date.substring(0, 19)}`)
}