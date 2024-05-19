'use client'
import React, { FC, useContext, useEffect, useState } from 'react'
import c from './CaseInput.module.scss'
import { getCaseInfo } from '@/app/actions/actions'
import FormTextField from '../uiElements/Textfield/FormTextField'
import { caseNumberValidate } from '@/app/common/validations/validations'
import Button from '../uiElements/Button/Button'
import { IGetCaseResponse } from '@/app/common/types/types'
import Loader from '../uiElements/Loader/Loader/Loader'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import ErrorMessage from '../uiElements/ErrorMessage/ErrorMessage'


const CaseInput: FC = () => {

    // const [caseNumber, setCaseNumber] = useState('А41-8755/2024')
    const [caseNumber, setCaseNumber] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isValidateError, setIsValidateError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const { setCaseData } = useContext(CaseDataContext)

    const handleSubmit = async () => {
        setIsLoading(true)
        const resp: IGetCaseResponse = await getCaseInfo(caseNumber)
        if (resp.status === 'success') {
            setCaseData(resp.result)
            setIsLoading(false)
            return
        }
        setErrorMsg(`${resp.message} Исправьте номер дела.` || '')
        setIsLoading(false)
    }

    useEffect(() => {
        if (errorMsg) {setErrorMsg('')}
    }, [caseNumber])


    return (
        <div className={c.container}>
            <div className={c.wrap}>
                <FormTextField
                    label='номер дела'
                    value={caseNumber}
                    onChange={(v) => setCaseNumber(v as string)}
                    validate={caseNumberValidate}
                    onErrorDetect={setIsValidateError}
                    helperText={errorMsg}
                    size='small'
                />
                <Button onClick={handleSubmit}
                    disabled={isValidateError || isLoading || !!errorMsg}
                    text='искать'
                />
            </div>
            <ErrorMessage msg={errorMsg} />
            {/* {isValidateError && 'error'} */}
            {isLoading && <Loader />}
        </div>
    )
}

export default CaseInput