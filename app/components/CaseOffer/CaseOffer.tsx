import { ICaseData } from '@/app/common/types/types'
import React, { FC, useState } from 'react'
import c from './CaseOffer.module.scss'
import ButtonGroup from './components/ButtonGroup'
import DocFormer from '../DocFormer/DocFormer'

interface IProps {
    caseData: ICaseData
}

const CaseOffer: FC<IProps> = ({ caseData }: IProps) => {

    // console.log('caseData', caseData)

    const [applicantInn, setApplicantInn] = useState<string>()

    return (
        <div className={c.wrap}>
            <div>Суд: Арбитражный суд{caseData.court}</div>
            <div>Выберите заявителя:</div>

            <ButtonGroup
                array={caseData.plaintiffs}
                value={applicantInn}
                setValue={setApplicantInn}
                title='Истцы'
            />

            <ButtonGroup
                array={caseData.respondents}
                value={applicantInn}
                setValue={setApplicantInn}
                title='Ответчики'
            />

            {applicantInn && <DocFormer caseData={caseData} />}

        </div>
    )
}

export default CaseOffer