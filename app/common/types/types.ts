import { ICaseData, Instance, Sides } from "./kadArbitrTypes"

interface ISuggestion {

}
interface IDadataResponse {
    data: ISuggestion[]
}
export interface IGetCompanyResponse {
    query: string
    data: IDadataResponse
}


export type DocTitleType = 'Отзыв на исковое заявление' | 'Ходатайство об ознакомлении с материалами дела' | 'Исковое заявление' | 'Ходатайство об отложении с/з'

/* export const docsTitleDirectory:{[key: string]: DocTitleType} = {
    1: 'Отзыв на исковое заявление',
    2: 'Ходатайство об ознакомлении с материалами дела',
    3: 'Исковое заявление',
    4: 'Ходатайство об отложении с/з'
} */

export interface IDocTitle {
    Name: DocTitleType
}

export const docsTitleDirectory:IDocTitle[] = [
    { Name: 'Отзыв на исковое заявление',},
    { Name: 'Ходатайство об ознакомлении с материалами дела'},
    { Name: 'Исковое заявление'},
    { Name: 'Ходатайство об отложении с/з'},
]


type ResponseType = 'not found' | 'success' | 'error' 
export interface IGetCaseResponse {
    status: ResponseType
    message?: string
    result: ICaseData | null
}