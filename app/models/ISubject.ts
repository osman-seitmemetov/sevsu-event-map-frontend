export interface ISubjectServer {
    id: number,
    event: number,
    subject: string
}

export interface ISubjectClient {
    id: number,
    event: number[],
    subject: string
}