import { Fade } from '@mui/material'
import React, { FC } from 'react'

interface IProps {
    msg: string
}

const ErrorMessage: FC<IProps> = ({ msg }) => {

    return (
        <div>
            <Fade in={!!msg}>
                <div>{msg}</div>
            </Fade>
        </div>
    )
}
export default ErrorMessage
