import { ICaseData } from '@/app/common/types/types'
import React, { FC, useContext, useState } from 'react'
import c from './CaseOffer.module.scss'
import ButtonGroup from './components/ButtonGroup'
import DocFormer from '../DocFormer/DocFormer'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import { Grow } from '@mui/material'

interface IProps {
}

const CaseOffer: FC<IProps> = ({ }: IProps) => {

    // console.log('caseData', caseData)
    // A40-12898/2023 exists

    const { caseData, applicantInn, setApplicantInn } = useContext(CaseDataContext)

    if (!caseData) return null

    return (
        <Grow in={caseData !== null}>
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

                {/* {applicantInn && <DocFormer caseData={caseData} docTitle='Отзыв на исковое заявление' />} */}

            </div>
        </Grow>
    )
}

export default CaseOffer