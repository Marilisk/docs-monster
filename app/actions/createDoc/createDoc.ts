'use server'
import { DocTitleType, ICaseData } from '@/app/common/types/types';
import { IParticipant, SideType } from '@/app/common/types/types2';
import createReport from 'docx-templates';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { prepPartTitle } from './createDoc.helpers';

interface IPartFromTemplate {
    title: SideType
    name: string
    address: string | null
    inn: string
}

interface ITemplateData {
    docTitle: DocTitleType
    courtName: string
    sides: IPartFromTemplate[]
    judge: string
    caseNumber: string
}

interface IPrepTemplateParams {
    caseData: ICaseData
    docTitle: DocTitleType
    applicantName?: string
}


function prepTemplateData(params: IPrepTemplateParams) {

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



export async function createDoc(params: IPrepTemplateParams) {

    const templateFilePath = path.resolve(__dirname, '../../../../public/templates', 'response-template.docx')
    const template = fs.readFileSync(templateFilePath)
    const preparedData = prepTemplateData(params)
    console.log('preparedData &&&&&&&&&&&&&&&&&', params.applicantName, preparedData)
    const buffer = await createReport({
        template,
        data: preparedData
    })
    const fileName = uuidv4() + '.docx'
    fs.writeFileSync(path.resolve(__dirname, '../../../../public/templates', fileName), buffer)
    return fileName
}


export async function deleteFile(filePath: string) {
    try {
        await fs.promises.unlink(filePath)
    } catch (error) {
        console.warn(error)
    }
}

