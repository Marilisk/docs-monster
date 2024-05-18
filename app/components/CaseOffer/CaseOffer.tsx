import { ICaseData } from '@/app/common/types/types'
import React, { FC, useContext, useState } from 'react'
import c from './CaseOffer.module.scss'
import ButtonGroup from './components/ButtonGroup'
import DocFormer from '../DocFormer/DocFormer'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import { Grow } from '@mui/material'
import ButtonContent from './components/ButtonContent'

interface IProps {

}

const CaseOffer: FC<IProps> = ({ }: IProps) => {

    // console.log('caseData', caseData)
    // A40-12898/2023 exists

    const { caseData, applicantName, setApplicantName } = useContext(CaseDataContext)

    const [plaintiffs, setPLaintiffs] = useState([])


    console.log('applicantName', applicantName)


    if (!caseData) return null

    return (
        <Grow in={caseData !== null}>
            <div className={c.wrap}>
                <div>Суд: Арбитражный суд{caseData.Instances[caseData.Instances.length - 1].Court.Name}</div>
                <div>Выберите заявителя:</div>

                <ButtonGroup
                    array={caseData.Sides.Participants}
                    value={applicantName}
                    setValue={setApplicantName}
                    renderButtonContent={(index) => (
                        <ButtonContent
                            data={caseData.Sides.Participants[index]}
                            part='plaintiffs'
                            index={index}
                        />
                    )}
                />

                {/* <ButtonGroup
                    array={caseData.respondents}
                    value={applicantInn}
                    setValue={setApplicantInn}
                    title='Ответчики'
                    renderButtonContent={(index) => (
                        <ButtonContent 
                            data={caseData.respondents[index]}
                            part='respondents'
                            index={index}
                        />
                    )}
                /> */}

            </div>
        </Grow>
    )
}

export default CaseOffer