export interface IOrganizerFields {
    name: string,
    logo: string,
    level: string
}

interface IEventFields {
    id: number,
    internal_university_contacts: string,
    title: string,
    consideration_period: string,
    realisation_period: string,
    result: string,
    site: string,
    document: string,
    internal_contacts: string,
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
    precursor: number,
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
    precursor: string
}

export interface ICompetitorFields {
    name: string,
    code: number
}

export interface IFoundingTypeFields {
    name: string,
}

export interface IFilterFields {
    organizers: {
        id: number,
        name: string
    }[],
    competitorTypes: {
        id: number,
        name: string
    }[],
    foundingRange: {
        low: number,
        high: number
    },
    coFoundingRange: {
        low: number,
        high: number
    },
    foundingType: {
        id: number,
        name: string
    }[],
    submissionDeadline: Date,
    trl: number[]
}

export interface ILoginFields {
    username: string,
    password: string
}

export interface ILogin {
    username: string,
    password: string
}