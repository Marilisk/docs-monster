'use client'
import React, { FC, useState } from 'react'
import c from './CaseInput.module.scss'
import { getCaseInfo } from '@/app/actions/actions'
import FormTextField from '../uiElements/Textfield/FormTextField'
import { caseNumberValidate } from '@/app/common/validations/validations'
import Button from '../uiElements/Button/Button'
import CaseOffer from '../CaseOffer/CaseOffer'
import { ICaseData } from '@/app/common/types/types'

const mockCase = {
    judge: "Михайлова Н. А.",
    court: " Московской области",
    plaintiffs: [
        {
            inn: "7714402935",
            name: "АССОЦИАЦИЯ САМОРЕГУЛИРУЕМАЯ ОРГАНИЗАЦИЯ ОБЪЕДИНЕНИЕ АРБИТРАЖНЫХ УПРАВЛЯЮЩИХ ЛИДЕР"
        },
        {
            inn: "7707083893",
            name: "АНО ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО СБЕРБАНК РОССИИ"
        },
        {
            inn: "4401116480",
            name: "ПАО СОВКОМБАНК"
        },
        {
            inn: "7713793524",
            name: "ООО Профессиональная коллекторская организация Феникс"
        }
    ],
    respondents: [
        {
            inn: "301502527506",
            name: "Умерова Нурия Саматовна"
        }
    ]
}


const CaseInput: FC = () => {

    const [caseNumber, setCaseNumber] = useState('А41-8755/2024')
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const [caseData, setCaseData] = useState<ICaseData>(mockCase)

    const handleSubmit = async () => {
        setIsLoading(true)
        const resp = await getCaseInfo(caseNumber)
        setIsLoading(false)
        console.log('resp', resp.result)
        setCaseData(resp.result)
    }

    /* console.log('**************')
    console.log('caseData', caseData) */


    return (
        <>
            <div className={c.wrap}>
                <FormTextField
                    label='Введите номер дела'
                    value={caseNumber}
                    onChange={(v) => setCaseNumber(v as string)}
                    validate={caseNumberValidate}
                    onErrorDetect={setIsError}
                />
                <Button onClick={handleSubmit}
                    disabled={isError || isLoading}
                    text='ok'
                />
                {isError && 'error'}
                {isLoading && 'loading'}
            </div>
            {caseData && <CaseOffer caseData={caseData} />}

        </>
    )
}

export default CaseInput