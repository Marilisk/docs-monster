import React, { FC, MouseEvent, ReactNode } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import c from './ButtonGroup.module.scss'
import { IParticipant } from '@/app/common/types/types2'
import { prepPartTitle } from '@/app/actions/createDoc/createDoc.helpers'

interface IProps {
    array: IParticipant[]
    value: string | undefined
    setValue: (arg: string) => void
    renderButtonContent: (arg: number) => ReactNode
}

const ButtonGroup: FC<IProps> = ({ array, value, setValue, renderButtonContent }: IProps) => {

    const handleChange = (e: MouseEvent, newValue: number) => {
        // console.log(newValue)
        setValue(array[newValue].Name)
    }

    console.log('value', value)

    return (
        <div className={c.wrap}>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleChange}
                orientation='vertical'
            >
                {array.map(((btn, i) => (
                    <ToggleButton key={i} value={i}
                        sx={{
                            textTransform: 'none',
                            // border:'3px solid orange'
                        }}
                    >
                        {renderButtonContent(i)}
                    </ToggleButton>
                )))}
            </ToggleButtonGroup>
        </div>
    )
}


export default ButtonGroup