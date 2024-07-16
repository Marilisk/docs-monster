import { ICaseData, SideType } from "@/common/types/kadArbitrTypes"
import { DocTitleType } from "@/common/types/types"


export interface IPrepTemplateParams {
    caseData: ICaseData
    docTitle: DocTitleType
    docInstance: string 
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

    const { caseData, docTitle, applicantName, docInstance } = params

    const chosenInstance = caseData.Instances.find(inst => inst.Court.Name === docInstance)

    const sides = caseData.Sides.Participants.map(part => ({
        title: prepPartTitle(part.SideType),
        isApplicant: part.Name === applicantName,
        name: part.Name,
        address: part.Address,
        inn: part.INN || '',
    }))

    const courtName = docInstance.slice(3)
    // тут прописать регулярку чтобы АС заменялся на "арбитражный суд" а не просто слайс
    console.log(docInstance)

    const prepared: ITemplateData = {
        docTitle,
        courtName,
        sides,
        judge: chosenInstance?.Judges.reduce((acc, judge) => acc + judge.Name, '') || '',
        caseNumber: chosenInstance?.InstanceNumber || ''
    }

    return prepared
}