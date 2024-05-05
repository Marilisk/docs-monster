export interface IPartData {
    name: string
    inn: string
    address: string
}

export interface ICaseData {
    court: string
    judge: string
    plaintiffs: IPartData[]
    respondents: IPartData[]
    titles: {
        plaintiffs: 'Истцы' | 'Истец'
        respondents: 'Ответчики' | 'Ответчик'
    }
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