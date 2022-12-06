export interface IOrganizerFields {
    name: string,
    logo: string,
    level: string
}

export interface IEventFields {
    id: number,
    internal_university_contacts: string,
    title: string,
    consideration_period: string,
    realisation_period: string,
    result: string,
    site: string,
    document: string,
    internal_contacts: string,
    precursor: number,
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
    subjects: string[],
    organizer: number,
    founding_type: number[],
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
    subjects: string,
    organizer: string,
    founding_type: string[],
}