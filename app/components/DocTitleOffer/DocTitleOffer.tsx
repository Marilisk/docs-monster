import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import React, { useContext } from 'react'
import c from './DocTitleOffer.module.scss'
import ButtonGroup from '../ApplicantOffer/components/ButtonGroup'
import { docsTitleDirectory, DocTitleType } from '@/app/common/types/types'
import TitleButtonContent from './TitleButtonContent/TitleButtonContent'

const DocTitleOffer = () => {

  const { caseData, docTitle, setDocTitle } = useContext(CaseDataContext)

  if (!caseData) return null

  return (
    <div className={c.wrap}>
      <h3>Тип документа</h3>
      <ButtonGroup
        value={docTitle}
        array={docsTitleDirectory}
        renderButtonContent={(i) => <TitleButtonContent title={docsTitleDirectory[i].Name} />}
        setValue={(v) => setDocTitle(v as DocTitleType)}
      />
    </div>
  )
}

export default DocTitleOffer