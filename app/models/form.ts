export interface IOrganizerFields {
    name: string,
    logo: string,
    level: number
}

export interface IEventFields {
    id: number,
    organizer: number,
    internal_university_contacts: string,
    title: string,
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

export interface IEventFieldsServer extends IEventFields {
    founding_range: {
        low: number,
        high: number
    },
    co_founding_range: {
        low: number,
        high: number
    },
    submission_deadline: string,
    trl: number,
    subjects: string[]
}

export interface IEventFieldsClient extends IEventFields {
    founding_range: {
        low: string,
        high: string
    },
    co_founding_range: {
        low: string,
        high: string
    },
    submission_deadline: Date,
    trl: string,
    subjects: string
}