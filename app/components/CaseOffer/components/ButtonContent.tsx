import { getCompany } from '@/app/actions/dadata.ts/dadataActions'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import React, { FC, useContext, useEffect, useState } from 'react'
import c from './ButtonGroup.module.scss'
import { IParticipant } from '@/app/common/types/types2'

interface IProps {
    data: IParticipant
    part: 'respondents' | 'plaintiffs'
    index: number
}

const ButtonContent: FC<IProps> = ({ data, part, index }) => {

    const { setCaseData, caseData } = useContext(CaseDataContext)

    const [isLoading, setIsLoading] = useState(false)

    // console.log('caseData', caseData)

    async function getActualisedData() {
        if (!caseData || data.isActualisedByDadata) return
        setIsLoading(true)
        const actualised = await getCompany(data.INN ? data.INN : data.Name)
        const company = actualised.suggestions[0]
        if (company) {
            const actual: IParticipant = {
                ...data,
                Name: company.unrestricted_value,
                Address: company.data.address.unrestricted_value,
                isActualisedByDadata: true,
            }
            const filteredParticips = [...caseData.Sides.Participants]
            filteredParticips[index] = actual
            setCaseData({
                ...caseData,
                Sides: {
                    ...caseData.Sides,
                    Participants: filteredParticips
                }
            })
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getActualisedData()
    }, [!!caseData])


    return (
        <div className={isLoading ? c.loadingWrap : c.contentWrap}>
            <h3>{data.Name}</h3>
            {data.INN &&
                <div>ИНН {data.INN}</div>
            }
            <div>
                {data.Address}
            </div>

        </div>
    )
}

export default ButtonContent