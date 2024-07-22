
import { Button as ButtonMui, ButtonProps, styled } from '@mui/material'
import React, { FC } from 'react'

const StyledBtn = styled(ButtonMui)({

}) as typeof ButtonMui

type IProps = {
    text: string
} & ButtonProps

const Button: FC<IProps> = (props) => {

    const { text, ...other } = props

    return (
        <StyledBtn
            variant={ props.variant || 'outlined' }
            { ...other }
        >
            { text }
        </StyledBtn>
    )
}

export default Button