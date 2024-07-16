import React, { FC, useContext } from 'react'
import c from './ResetButton.module.scss'
import btnC from './../CaseInput/CaseInput.module.scss'
import Button from '../uiElements/Button/Button'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'

interface IProps {
    setCaseNumber: (arg: string) => void
    isCaseData: boolean
}
const ResetButton: FC<IProps> = ({ setCaseNumber, isCaseData }) => {

    const { setCaseData, setDocClientUrl, setApplicantName } = useContext(CaseDataContext)

    const handleReset = () => {
        setCaseData(null)
        setCaseNumber('')
        setDocClientUrl(undefined)
        setApplicantName('')
    }

    return (
        <div className={c.resetWrap}>
            <Button onClick={handleReset}
                disabled={!isCaseData}
                text='сбросить'
                className={btnC.btn}
            />
        </div>
    )
}

export default ResetButton