import { Instance, Sides } from "./types2"

interface ISuggestion {

}
interface IDadataResponse {
    data: ISuggestion[]
}
export interface IGetCompanyResponse {
    query: string
    data: IDadataResponse
}


export interface ICaseData {
    Id: string;
    CaseNumber: string;
    SidesCount: number;
    RegistrationDate: Date;
    IsSimpleJustice: boolean;
    SimpleJusticeCode: null;
    Instances: Instance[]
    Sides: Sides
    CaseTypeMCode: string;
    CaseType: string;
    CaseCategoryDispute: string;
    CaseState: string;
    SinceStart: string;
    SubscriptionId: null;
}


export type DocTitleType = 'Отзыв на исковое заявление' | 'Ходатайство об ознакомлении с материалами дела' | 'Исковое заявление' | 'Ходатайство об отложении с/з'

const docsTitleDirectory:{[key: string]: DocTitleType} = {
    1: 'Отзыв на исковое заявление',
    2: 'Ходатайство об ознакомлении с материалами дела',
    3: 'Исковое заявление',
    4: 'Ходатайство об отложении с/з'
}


type ResponseType = 'not found' | 'success' | 'error' 
export interface IGetCaseResponse {
    status: ResponseType
    message?: string
    result: ICaseData | null
}