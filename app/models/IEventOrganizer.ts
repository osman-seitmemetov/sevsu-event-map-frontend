export interface IEventOrganizer {
    id: 2,
    organizer: {
        logo: string,
        level: string,
        name: string
    },
    competitors: string[],
    founding_type: string[],
    founding_range: {
        low: number,
        high: number
    },
    co_founding_range: {
        low: number,
        high: number
    },
    title: string,
    submission_deadline: string,
    consideration_period: string,
    realisation_period: string,
    result: string
    site: string,
    document: string,
    internal_contacts: string,
    trl: number,
    precursor?: string
}