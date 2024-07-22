import { Fade } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import c from './ErrorMessage.module.scss'

interface IProps {
    msg: string | ReactNode
}

const ErrorMessage: FC<IProps> = ({ msg }) => {

    if (!msg) return null

    return (
        <div>
            <Fade in={ !!msg }>
                <div className={ c.wrap }>
                    { msg }
                </div>
            </Fade>
        </div>
    )
}
export default ErrorMessage
