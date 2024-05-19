import { Fade, Paper } from '@mui/material'
import React, { FC } from 'react'
import c from './ErrorMessage.module.scss'

interface IProps {
    msg: string
}

const ErrorMessage: FC<IProps> = ({ msg }) => {

    return (
        <div>
            <Fade in={!!msg}>
                
               
                <div className={c.wrap}>
                    {msg}
                </div>
                
            </Fade>
        </div>
    )
}
export default ErrorMessage
