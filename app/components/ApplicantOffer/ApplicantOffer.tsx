import React, { FC, useContext, useState } from 'react'
import c from './ApplicantOffer.module.scss'
import ButtonGroup from './components/ButtonGroup'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import { Grow } from '@mui/material'
import ButtonContent from './components/ButtonContent'

interface IProps {

}

const ApplicantOffer: FC<IProps> = ({ }: IProps) => {

    const { caseData, applicantName, setApplicantName } = useContext(CaseDataContext)

    console.log('applicantName', applicantName)

    if (!caseData) return null

    return (
        <Grow in={caseData !== null}>
            <div className={c.wrap}>
                <h3>{caseData.Instances[caseData.Instances.length - 1].Court.Name}</h3>
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
            </div>
        </Grow>
    )
}

export default ApplicantOffer