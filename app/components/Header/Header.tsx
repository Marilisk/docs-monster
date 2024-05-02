import React from 'react'
import c from './Header.module.scss'

const Header = () => {
  return (
    <div className={c.container}>
      <div className={c.wrap}>
        <h1>Monster Docs</h1>
      </div>
    </div>
  )
}

export default Header