'use server'
import { DocTitleType, ICaseData } from '@/app/common/types/types';
import createReport from 'docx-templates';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';


interface ITemplateData extends ICaseData {
    docTitle: DocTitleType
}


export async function createDoc(data: ITemplateData) {
    
  
    const templateFilePath = path.resolve(__dirname, '../../../public/templates', 'response-template.docx')
    const template = fs.readFileSync(templateFilePath)

    const buffer = await createReport({
        template,
        data
       /*  data: {
            court: data.court,
            docTitle: data.docTitle,
            plaintiffs: data.plaintiffs,
            
        } */
    })
    const fileName = uuidv4() + '.docx'
    fs.writeFileSync(path.resolve(__dirname, '../../../public', fileName), buffer)
    return fileName
}


export async function  deleteFile(filePath: string) {
    try {
        await fs.promises.unlink(filePath)
    } catch (error) {
        console.warn(error)
    }
}

