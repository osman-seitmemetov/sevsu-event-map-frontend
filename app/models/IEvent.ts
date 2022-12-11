export interface IEvent {
    id: number,
    organizer: number,
    internal_contacts: string,
    trl: number,
    founding_range: {
        id: number,
        low: number,
        high: number
    },
    co_founding_range: {
        id: number,
        low: number,
        high: number
    },
    subjects: string[],
    title: string,
    submission_deadline: string, //"2022-12-20",
    consideration_period: string,
    realisation_period: string,
    result: string,
    site: string,
    document: string,
    precursor: number,
    founding_type: number[],
    competitors: number[]
}

export interface IEventMin {
    id: number,
    title: string,
    organizer: {
        logo: string,
        level: string
    },
    founding_type: string[],
    founding_range: {
        low: number,
        high: number
    },
    co_founding_range: {
        low: number,
        high: number
    },
    submission_deadline: string,
    realisation_period: string,
    competitors: number[]
}