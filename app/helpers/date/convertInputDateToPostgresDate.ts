export const convertInputDateToPostgresDate = (date: Date) => {
    let year = `${date.getFullYear()}`;
    let month = `${date.getMonth() + 1}`;
    let day = `${date.getDate()}`;

    if(date.getFullYear() < 10) year = `000${date.getFullYear()}`;
    if(date.getFullYear() < 100 && date.getFullYear() > 10) year = `00${date.getFullYear()}`;
    if(date.getFullYear() < 1000 && date.getFullYear() > 100) year = `0${date.getFullYear()}`;
    if(date.getMonth() < 10) month = `0${date.getMonth() + 1}`;
    if(date.getDate() < 10) day = `0${date.getDate()}`;

    if(date) return `${year}-${month}-${day}`;
}