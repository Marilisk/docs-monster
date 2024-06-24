import { ICaseData, SideType } from "@/app/common/types/kadArbitrTypes"
import { DocTitleType } from "@/app/common/types/types"

export interface IPrepTemplateParams {
    caseData: ICaseData
    docTitle: DocTitleType
    applicantName?: string
    docClientUrl?: string
}
interface IPartFromTemplate {
    title: SideType
    name: string
    address: string | null
    inn: string
    isApplicant: boolean
}
interface ITemplateData {
    docTitle: DocTitleType
    courtName: string
    sides: IPartFromTemplate[]
    judge: string
    caseNumber: string
}


export function prepPartTitle(partType: number) {
    let title: SideType = 'Истец'

    switch (partType) {
        case 1: {
            title = 'Ответчик'
            break
        }
        case 2: {
            title = 'Третье лицо'
            break
        }
    }
    return title
}

export function prepTemplateData(params: IPrepTemplateParams) {

    const { caseData, docTitle, applicantName } = params

    const courtName = caseData.Instances[0].Court.Name.slice(3)

    const sides = caseData.Sides.Participants.map(part => ({
        title: prepPartTitle(part.SideType),
        isApplicant: part.Name === applicantName,
        name: part.Name,
        address: part.Address,
        inn: part.INN || '',
    }))

    const prepared: ITemplateData = {
        docTitle,
        courtName,
        sides,
        judge: caseData.Instances[0].Judges[0].Name,
        caseNumber: caseData.Instances[0].InstanceNumber
    }

    return prepared
}