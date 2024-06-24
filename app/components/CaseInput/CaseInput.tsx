import React, { FC, useContext, useState } from 'react'
import c from './CaseInput.module.scss'
import { getCaseInfo } from '@/app/actions/actions'
import FormTextField from '../uiElements/Textfield/FormTextField'
import { caseNumberValidate } from '@/app/common/validations/validations'
import Button from '../uiElements/Button/Button'
import { IGetCaseResponse } from '@/app/common/types/types'
import Loader from '../uiElements/Loader/Loader/Loader'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import ErrorMessage from '../uiElements/ErrorMessage/ErrorMessage'
import { useHandleSubmitByEnterkey } from './CaseInput.helpers'
import SearchIcon from '@mui/icons-material/Search';
import ResetButton from '../ResetButton/ResetButton'

interface IProps {
    isCaseData: boolean
}
const CaseInput: FC<IProps> = ({ isCaseData }) => {

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
        setErrorMsg(resp.message || '')
        setIsLoading(false)
    }

    const isFoundDisabled = isValidateError || isLoading || !caseNumber /* || !!errorMsg */
    useHandleSubmitByEnterkey(handleSubmit, isFoundDisabled)


    return (
            <div className={isCaseData ? c.container : c.bigContainer}>

                <ResetButton isCaseData={isCaseData} setCaseNumber={setCaseNumber} />

                <div className={isCaseData ? c.wrap : c.bigWrap}>
                    <FormTextField
                        label={isCaseData ? 'номер дела' : 'Введите номер дела'}
                        value={caseNumber}
                        onChange={(v) => {
                            setCaseNumber(v as string)
                            if (errorMsg) { setErrorMsg('') }
                        }}
                        validate={caseNumberValidate}
                        onErrorDetect={setIsValidateError}
                        size={isCaseData ? 'small' : 'medium'}
                        InputProps={{ startAdornment: <SearchIcon /> }}
                        autoFocus
                    />
                    <div className={c.errorBlock}>
                    <ErrorMessage msg={errorMsg} />
                    </div>
                    <Button onClick={handleSubmit}
                        disabled={isFoundDisabled}
                        text='искать'
                        className={c.btn}
                    />
                </div>
                {isLoading && <Loader />}
            </div>       
    )
}

export default CaseInput