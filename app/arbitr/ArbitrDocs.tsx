'use client'
import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'
import CaseInput from '../components/CaseInput/CaseInput'
import { DocTitleType } from '../common/types/types'
import DocFormer from '../components/DocFormer/DocFormer'
import theme from '../css/theme'
import { ThemeProvider } from '@mui/material'
import c from './ArbitrDocs.module.scss'
import DocTitleOffer from '../components/DocTitleOffer/DocTitleOffer'
import ApplicantOffer from '../components/ApplicantOffer/ApplicantOffer'
import { ICaseData } from '../common/types/kadArbitrTypes'
import DocView from '../components/DocView/DocView'
import InstanceOffer from '../components/InstanceOffer/InstanceOffer'


interface ICaseDataContext {
    caseData: ICaseData | null
    setCaseData: (arg: ICaseData | null) => void
    applicantName?: string
    setApplicantName: (arg: string) => void
    docTitle: DocTitleType
    setDocTitle: (arg: DocTitleType) => void
    docClientUrl?: string
    setDocClientUrl: Dispatch<SetStateAction<string | undefined>>
    docInstance?: string
    setDocInstance: (arg: string) => void
}

export const CaseDataContext = createContext<ICaseDataContext>({} as ICaseDataContext)


const ArbitrDocs = () => {

    const [caseData, setCaseData] = useState<ICaseData | null>(null)
    const [applicantName, setApplicantName] = useState<string>()
    const [docTitle, setDocTitle] = useState<DocTitleType>('Отзыв на исковое заявление')
    const [docInstance, setDocInstance] = useState<string>()

    const [docClientUrl, setDocClientUrl] = useState<string>()

    const isCaseData = !!caseData

    // console.log('caseData in ArbitrDocs', caseData)

    useEffect(() => {
        const html = document.getElementById('html')
        if (html) {
            html.classList.add(c.html)
        }
        return () => html?.classList.remove(c.html)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CaseDataContext.Provider value={{
                caseData, setCaseData,
                applicantName, setApplicantName,
                docTitle, setDocTitle,
                docClientUrl, setDocClientUrl,
                docInstance, setDocInstance,
            }}>
                <div className={c.wrap}>
                    <div className={isCaseData ? c.leftCol : c.fullCol}>
                        <CaseInput isCaseData={isCaseData} />
                        <div className={c.scrollBox}>
                            <InstanceOffer />
                            <ApplicantOffer />
                            <DocTitleOffer />
                            <DocFormer />
                        </div>
                    </div>
                    <div className={isCaseData ? c.rightCol : c.hiddenRightCol}>
                        <DocView />
                    </div>
                </div>
            </CaseDataContext.Provider>
        </ThemeProvider>
    )
}

export default ArbitrDocs