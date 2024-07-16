
import createReport from 'docx-templates';
import { IPrepTemplateParams, prepTemplateData } from './createDoc.helpers';
import { Dispatch, SetStateAction } from 'react';

const readFileIntoArrayBuffer = async (fd: Blob) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onerror = reject
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.readAsArrayBuffer(fd)
    });

    const saveDataToFile = (data: Uint8Array, fileName: string, setDocClientUrl: Dispatch<SetStateAction<string | undefined>>) => {
        const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const url = window.URL.createObjectURL(blob)
        setDocClientUrl(url)
        let a = document.getElementById('client-document')
        if (!a) {
            a = document.createElement('a')
            a.id = 'client-document'
        }
        a.setAttribute('href', url)
        a.setAttribute('download', fileName) 
        document.body.appendChild(a)
    };


export async function createDoc(params: IPrepTemplateParams, setDocClientUrl: Dispatch<SetStateAction<string | undefined>>) {

    const templateFile = await fetch(window.location.origin + '/templates/response-template.docx').then(res => res.blob())
    const template = await readFileIntoArrayBuffer(templateFile)
    const preparedData = prepTemplateData(params)
    const report = await createReport({
        template: template as Uint8Array,
        data: preparedData
    })
    const docName = preparedData.sides.find(elem => elem.isApplicant)?.name || '' 
    saveDataToFile(
        report,
        `${preparedData.docTitle}-${docName}.docx`,
        setDocClientUrl,
    )
}



