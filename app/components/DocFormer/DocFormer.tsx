import { createDoc, deleteFile } from '@/app/actions/createDoc/createDoc'
import { ICaseData } from '@/app/common/types/types'
import React, { FC } from 'react'
import Button from '../uiElements/Button/Button'

interface IProps {
  caseData: ICaseData
}


const DocFormer: FC<IProps> = ({ caseData }) => {

  const downloadDoc = async () => {

    const fileName = await createDoc({ court: caseData.court })
    const filePath = window.location.href + fileName
    await fetch(filePath, {
      method: 'GET', headers: { 'Content-Type': 'application/docx', }
    })
      .then((response) => {
        return response.blob()
      })
      .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([blob], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' }));
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }).then(() => {
        deleteFile(`public/${fileName}`)
      })
      .catch((error) => {
        console.warn(error)
      })

  }

  return (
    <>
      <Button
        text='download document'
        onClick={downloadDoc}
      />

    </>
  )
}

export default DocFormer
