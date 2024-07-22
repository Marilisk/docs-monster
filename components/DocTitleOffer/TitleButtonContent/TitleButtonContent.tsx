import { DocTitleType } from '@/common/types/types'
import React, { FC } from 'react'

interface IProps {
    title?: DocTitleType
}

const TitleButtonContent:FC<IProps> = ({title}) => {

    return (
        <div>
            { title }
        </div>
    )
}

export default TitleButtonContent