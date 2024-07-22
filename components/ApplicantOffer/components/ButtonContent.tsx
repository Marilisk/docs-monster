import { getCompany } from '@/app/actions/dadata.ts/dadataActions'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import React, { FC, useContext, useEffect, useState } from 'react'
import c from './ButtonGroup.module.scss'
import { prepPartTitle } from '@/app/actions/createDoc/createDoc.helpers'
import { IParticipant } from '@/common/types/kadArbitrTypes'

interface IProps {
    data: IParticipant
    index: number
}

const ButtonContent: FC<IProps> = ({ data, index }) => {

    const { setCaseData, caseData } = useContext(CaseDataContext)

    const [isLoading, setIsLoading] = useState(false)

    async function getActualisedData() {
        if (!caseData || data.isActualisedByDadata) return
        setIsLoading(true)
        const actualised = await getCompany(data.INN ? data.INN : data.Name)
        const company = actualised.suggestions[0]
        // data.SideType === 0 && console.log('company', company)
        if (company) {
            const actual: IParticipant = {
                ...data,
                Name: company.unrestricted_value,
                Address: company.data.address.unrestricted_value,
                isActualisedByDadata: true,
            }
            const particips = [...caseData.Sides.Participants]
            particips[index] = actual
            setCaseData({
                ...caseData,
                Sides: {
                    ...caseData.Sides,
                    Participants: particips
                }
            })
        }
        setIsLoading(false)
    }

    useEffect(() => {
        getActualisedData()
    }, [])


    return (
        <div className={ isLoading ? c.loadingWrap : c.contentWrap }>
            <h3>{ prepPartTitle(data.SideType) }: { data.Name }</h3>
            { data.INN &&
                <div>ИНН { data.INN }</div>
            }
            <div>
                адрес: { data.Address }
            </div>
            { /*  <div>
                {data.isActualisedByDadata ? 'IsActual' : 'NOactual'}
            </div> */ }
        </div>
    )
}

export default ButtonContent