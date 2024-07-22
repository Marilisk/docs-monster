import React from 'react'
import c from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={c.back}>
            <span className={c.loader} />
        </div>
    )
}

export default Loader