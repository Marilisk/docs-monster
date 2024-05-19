'use client'
import React, { createContext, useState } from 'react'
import CaseInput from '../components/CaseInput/CaseInput'
import { DocTitleType, ICaseData } from '../common/types/types'

import DocFormer from '../components/DocFormer/DocFormer'
import theme from '../css/theme'
import { Paper, ThemeProvider } from '@mui/material'
import c from './ArbitrDocs.module.scss'
import DocTitleOffer from '../components/DocTitleOffer/DocTitleOffer'
import ApplicantOffer from '../components/ApplicantOffer/ApplicantOffer'


interface ICaseDataContext {
    caseData: ICaseData | null
    setCaseData: (arg: ICaseData | null) => void
    applicantName?: string
    setApplicantName: (arg: string) => void
    docTitle?: DocTitleType
    setDocTitle: (arg: DocTitleType) => void
}

export const CaseDataContext = createContext<ICaseDataContext>({} as ICaseDataContext)


const ArbitrDocs = () => {

    const [caseData, setCaseData] = useState<ICaseData | null>(null)
    const [applicantName, setApplicantName] = useState<string>()
    const [docTitle, setDocTitle] = useState<DocTitleType>()

    // console.log('ArbitrDocs caseData', caseData)

    return (
        <ThemeProvider theme={theme}>
            <CaseDataContext.Provider value={{ caseData, setCaseData, applicantName, 
                setApplicantName,
                docTitle,
                setDocTitle,
                
                }}>
                <div className={c.wrap}>
                    <div className={c.leftCol}>
                    <CaseInput />
                    <ApplicantOffer />
                    <DocTitleOffer /> 
                    <DocFormer />
                    </div>

                    <div className={c.rightCol}>
                        <Paper>
                        <h2>Ваш документ</h2>
                        </Paper>
                    </div>
                </div>
            </CaseDataContext.Provider>
        </ThemeProvider>
    )
}

export default ArbitrDocs