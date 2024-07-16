'use client'
import React, { FC } from 'react'
import { IRoute } from '../Header'
import c from './../Header.module.scss'
import { usePathname } from 'next/navigation'


interface IProps {
    route: IRoute
}

const LinkButton: FC<IProps> = ({ route }) => {

    const path = usePathname()

    return (
        <div className={path.includes(route.href) ? c.activeLink : ''}>
            {route.title}
        </div>
    )
}

export default LinkButton