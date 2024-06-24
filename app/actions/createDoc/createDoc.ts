'use server'
import createReport from 'docx-templates';
import generateDoc from 'docx-templates';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { IPrepTemplateParams, prepTemplateData } from './createDoc.helpers';


export async function createDoc(params: IPrepTemplateParams) {

    // ссылка где хранится файл
    //  /templates/response-template.docx

    const templateFilePath = path.resolve(
        __dirname,
        '../../../../public/templates',
        params.docFileName ? params.docFileName : 'response-template.docx'
    )
    const template = fs.readFileSync(templateFilePath)
    // const template = await fetch('./templates/response-template.docx').then(res => res.arrayBuffer())
    const preparedData = prepTemplateData(params)
    const buffer = await createReport({
        template,
        data: preparedData
    })
    // const fileName = 'courtdoc' + '.docx'
    const fileName = uuidv4() + '.docx'
    fs.writeFileSync(path.resolve(__dirname, '../../../../public/templates', fileName), buffer)
    return fileName
}


export async function deleteFile(filePath: string) {
    try {
        // await fs.promises.unlink(filePath)
    } catch (error) {
        console.warn(error)
    }
}

