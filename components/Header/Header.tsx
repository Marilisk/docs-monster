import React from 'react'
import c from './Header.module.scss'
import Link from 'next/link'
import LinkButton from './components/LinkButton';

export interface IRoute {
  href: string
  title: string
}

const routes: IRoute[] = [
  {
    href: 'arbitr',
    title: 'арбитражные суды',
  },
  {
    href: 'sou',
    title: 'суды общей юрисдикции',
  },
  {
    href: 'projects',
    title: 'мои дела',
  },
]


const Header = (/* {params}:{params: any} */) => {

  return (
    <div className={c.wrapper}>
      <div className={c.header}>

        <Link href='/'>
          <h1><span>MONSTER</span> <span>DOCS</span></h1>
        </Link>

        <div className={c.linksWrapper} >
          {
            routes.map((route, i) => {
              return <Link key={i} href={route.href} >
                <LinkButton route={route} />
              </Link>
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Header