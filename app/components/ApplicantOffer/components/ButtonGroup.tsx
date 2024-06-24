import React, { FC, MouseEvent, ReactNode } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import c from './ButtonGroup.module.scss'
import { IParticipant } from '@/app/common/types/kadArbitrTypes'
import { IDocTitle } from '@/app/common/types/types'

interface IProps {
    array: IParticipant[] | IDocTitle[]
    value: string | undefined
    setValue: (arg: string) => void
    renderButtonContent: (arg: number) => ReactNode
}

const ButtonGroup: FC<IProps> = ({ array, value, setValue, renderButtonContent }: IProps) => {

    const handleChange = (e: MouseEvent, newValue: string) => {
        setValue(newValue)
    }

    return (
        <div className={c.wrap}>
            <ToggleButtonGroup
                value={value}
                exclusive
                onChange={handleChange}
                orientation='vertical'
                sx={{ 
                    width: '100%'
                }}
            >
                {array.map(((btn, i) => (
                    <ToggleButton key={`${btn.Name}${i}`} value={btn.Name}
                        fullWidth
                        sx={{
                            textTransform: 'none',
                            textAlign: 'left',
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