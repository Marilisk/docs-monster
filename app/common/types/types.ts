export interface IPartData {
    name: string
    inn: string
}

export interface ICaseData {
    court: string
    judge: string
    plaintiffs: IPartData[]
    respondents: IPartData[]
}