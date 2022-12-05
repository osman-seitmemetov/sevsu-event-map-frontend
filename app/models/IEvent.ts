export interface IEvent {
    id: number,
    organizer: number,
    internal_university_contacts: string,
    trl: number,
    founding_range: {
        low: number,
        high: number
    },
    co_founding_range: {
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
    internal_contacts: string,
    precursor: number,
    founding_type: number[],
    competitors: number[]
}

export interface IEventMin {
    id: number,
    "organizer": number,
    "founding_type": number,
    "founding_range": 1,
    "co_founding_range": 1,
    "submission_deadline": string,
    "consideration_period": string,
    "realisation_period": string,
    "trl": 7
}