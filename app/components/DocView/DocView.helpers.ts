import * as docx from "docx-preview";


export const renderDocument = (docClientUrl: string, container: HTMLElement ) => {
    fetch(docClientUrl, {
        method: 'GET', headers: { 'Content-Type': 'application/docx', }
    }).then((response) => {
        return response.blob()
    }).then((blob) => {
        // const container = document.getElementById('container')
        // const styleContainer = 
        if (container) {
            docx.renderAsync(
                blob, 
                container,
                // styleContainer, 
                undefined, 
                {
                    inWrapper: false,
                    className: 'docxCustom'
                    // ignoreWidth: true,
                    // ignoreHeight: true,
                }
            )
                .then((x) => {
                    // console.log(x)
                    // console.log('buffer')
                })
        }
    }).catch(err => console.warn(err))
}