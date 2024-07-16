import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import React, { useContext, useEffect } from 'react'
import ButtonGroup, { IInstanceWithName } from '../ApplicantOffer/components/ButtonGroup'
import { Paper } from '@mui/material'
import { IInstance } from '@/common/types/kadArbitrTypes'

const InstanceOffer = () => {

    const { caseData, docInstance, setDocInstance } = useContext(CaseDataContext)

    useEffect(() => {
        if (!docInstance && caseData?.Instances.length) {
            setDocInstance(caseData?.Instances[0].Court.Name)
        }
    }, [caseData?.Instances])

    if (!caseData?.Instances) return null

    // тут еще может быть несколько подателей заявлений и инстанции будут дублироваться в массиве
    const preparedInstances = caseData.Instances.reduce((acc: IInstanceWithName[], instance: IInstance) => {
        const isAlreadyAdded = acc.findIndex(inst => instance.InstanceLevel === inst.InstanceLevel) !== -1
        if (!isAlreadyAdded) {
            acc.push({ ...instance, Name: instance.Court.Name })
        }
        return acc

    }, [])

    return (
        <Paper>
            <h3>Выберите инстанцию</h3>
            <ButtonGroup
                array={preparedInstances}
                renderButtonContent={(index) => (
                    <div>
                        {preparedInstances[index].Name} {/* level: {preparedInstances[index].InstanceLevel} */}
                    </div>
                )}
                value={docInstance}
                setValue={setDocInstance}
            />
        </Paper>
    )
}

export default InstanceOffer