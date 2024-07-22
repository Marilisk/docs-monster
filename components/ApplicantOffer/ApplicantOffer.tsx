import React, { FC, useContext } from "react"
import c from "./ApplicantOffer.module.scss"
import ButtonGroup from "./components/ButtonGroup"
import { CaseDataContext } from "@/app/arbitr/ArbitrDocs"
import ButtonContent from "./components/ButtonContent"

const ApplicantOffer: FC = () => {
    const { caseData, applicantName, setApplicantName } =
        useContext(CaseDataContext)

    if (!caseData) return null

    return (
        <div className={c.wrap}>
            <h3>Выберите заявителя:</h3>
            <ButtonGroup
                array={caseData.Sides.Participants}
                value={applicantName}
                setValue={setApplicantName}
                renderButtonContent={index => (
                    <ButtonContent
                        data={caseData.Sides.Participants[index]}
                        index={index}
                    />
                )}
            />
        </div>
    )
}

export default ApplicantOffer
