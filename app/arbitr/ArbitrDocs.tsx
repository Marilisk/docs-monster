'use client'
import React, { createContext, useState } from 'react'
import CaseInput from '../components/CaseInput/CaseInput'
import { ICaseData } from '../common/types/types'
import CaseOffer from '../components/CaseOffer/CaseOffer'
import DocFormer from '../components/DocFormer/DocFormer'
import theme from '../css/theme'
import { ThemeProvider } from '@mui/material'
import c from './ArbitrDocs.module.scss'

/* const mockCase: ICaseData = {
    judge: "Михайлова Н. А.",
    court: " Московской области",
    plaintiffs: [
        {
            inn: "7714402935",
            name: "АССОЦИАЦИЯ САМОРЕГУЛИРУЕМАЯ ОРГАНИЗАЦИЯ ОБЪЕДИНЕНИЕ АРБИТРАЖНЫХ УПРАВЛЯЮЩИХ ЛИДЕР",
            address: '',
            isActualisedByDadata: false,

        },
        {
            inn: "7707083893",
            name: "АНО ПУБЛИЧНОЕ АКЦИОНЕРНОЕ ОБЩЕСТВО СБЕРБАНК РОССИИ",
            address: '',
            isActualisedByDadata: false,
        },
        {
            inn: "4401116480",
            name: "ПАО СОВКОМБАНК",
            address: '',
            isActualisedByDadata: false,
        },
        {
            inn: "7713793524",
            name: "ООО Профессиональная коллекторская организация Феникс",
            address: '',
            isActualisedByDadata: false,
        }
    ],
    respondents: [
        {
            inn: "301502527506",
            name: "Умерова Нурия Саматовна",
            address: '',
            isActualisedByDadata: false,

        }
    ],
    titles: {
        plaintiffs: 'Истцы',
        respondents: 'Ответчик'
    }

} */

interface ICaseDataContext {
    caseData: ICaseData | null
    setCaseData: (arg: ICaseData | null) => void
    applicantName?: string
    setApplicantName: (arg: string) => void
}

export const CaseDataContext = createContext<ICaseDataContext>({} as ICaseDataContext)


const ArbitrDocs = () => {

    const [caseData, setCaseData] = useState<ICaseData | null>(null)
    const [applicantName, setApplicantName] = useState<string>()

    // console.log('ArbitrDocs caseData', caseData)

    return (
        <ThemeProvider theme={theme}>
            <CaseDataContext.Provider value={{ caseData, setCaseData, applicantName, setApplicantName }}>
                <div className={c.wrap}>
                    <div className={c.leftCol}>
                    <CaseInput />
                    <CaseOffer />
                    {!!applicantName && <DocFormer docTitle='Отзыв на исковое заявление' />}
                    </div>

                    <div className={c.rightCol}>
                        <h2>Ваш документ</h2>

                    </div>
                </div>
            </CaseDataContext.Provider>
        </ThemeProvider>
    )
}

export default ArbitrDocs