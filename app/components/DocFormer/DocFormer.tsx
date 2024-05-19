import { createDoc, deleteFile } from '@/app/actions/createDoc/createDoc'
import { DocTitleType } from '@/app/common/types/types'
import React, { FC, useContext } from 'react'
import Button from '../uiElements/Button/Button'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'

interface IProps {
  // docTitle: DocTitleType
}

const DocFormer: FC<IProps> = ({ /* docTitle */ }) => {

  const { caseData, applicantName, docTitle } = useContext(CaseDataContext)

  if (caseData === null || !applicantName || !docTitle ) return null

  const downloadDoc = async () => {

    const fileName = await createDoc({caseData, docTitle, applicantName})
    const filePath = window.location.origin + '/templates/'  + fileName
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
        deleteFile(`public/templates/${fileName}`)
      })
      .catch((error) => {
        console.warn(error)
      })
  }

  return (
    <>
      <Button
        text='скачать'
        onClick={downloadDoc}
      />

    </>
  )
}

export default DocFormer
