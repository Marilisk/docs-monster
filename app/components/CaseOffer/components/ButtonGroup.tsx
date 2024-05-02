import React, { FC, MouseEvent } from 'react'
import { IPartData } from '@/app/common/types/types'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import c from './ButtonGroup.module.scss'

interface IProps {
    array: IPartData[]
    value: string | undefined
    setValue: (arg: string) => void
    title: string
}

const ButtonGroup: FC<IProps> = ({ array, value, setValue, title }: IProps) => {

    const handleChange = (e: MouseEvent, newValue: string) => {
        setValue(newValue)

    }

    return (
        <div className={c.wrap}>
            <h3>{title}</h3>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleChange}
            >
                {array.map((btn => (
                    <ToggleButton key={btn.inn} value={btn.inn} >
                        {btn.name}
                    </ToggleButton>
                )))}
            </ToggleButtonGroup>
        </div>
    )
}

export default ButtonGroup