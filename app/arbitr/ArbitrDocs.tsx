'use client'
import React, { createContext, useState } from 'react'
import CaseInput from '../components/CaseInput/CaseInput'
import { ICaseData } from '../common/types/types'
import CaseOffer from '../components/CaseOffer/CaseOffer'
import DocFormer from '../components/DocFormer/DocFormer'
import theme from '../css/theme'
import { ThemeProvider } from '@mui/material'

const mockCase: ICaseData = {
    judge: "Михайлова Н. А.",
    court: " Московской области",
    plaintiffs: [
        {
            inn: "7714402935",
            name: "АССОЦИАЦИЯ САМОРЕГУЛИРУЕМАЯ ОРГАНИЗАЦИЯ ОБЪЕДИНЕНИЕ АРБИТРАЖНЫХ УПРАВЛЯЮЩИХ ЛИДЕР",
            address: ''
        },
        {
            inn: "7707083893",
            name: "АНО ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО СБЕРБАНК РОССИИ",
            address: ''

        },
        {
            inn: "4401116480",
            name: "ПАО СОВКОМБАНК",
            address: ''

        },
        {
            inn: "7713793524",
            name: "ООО Профессиональная коллекторская организация Феникс",
            address: ''

        }
    ],
    respondents: [
        {
            inn: "301502527506",
            name: "Умерова Нурия Саматовна",
            address: ''

        }
    ],
    titles: {
        plaintiffs: 'Истцы',
        respondents: 'Ответчик'
    }

}

interface ICaseDataContext {
    caseData: ICaseData | null
    setCaseData: (arg: ICaseData | null) => void
    applicantInn?: string
    setApplicantInn: (arg: string) => void
}

export const CaseDataContext = createContext<ICaseDataContext>({} as ICaseDataContext)


const ArbitrDocs = () => {

    const [caseData, setCaseData] = useState<ICaseData | null>(null/* mockCase */)

    const [applicantInn, setApplicantInn] = useState<string>()

    console.log('ArbitrDocs caseData', caseData)

    return (
        <ThemeProvider theme={theme}>
            <CaseDataContext.Provider value={{ caseData, setCaseData, applicantInn, setApplicantInn }}>
                <div>
                    <CaseInput />
                    <CaseOffer />
                    {applicantInn && <DocFormer docTitle='Отзыв на исковое заявление' />}
                </div>
            </CaseDataContext.Provider>
        </ThemeProvider>
    )
}

export default ArbitrDocs