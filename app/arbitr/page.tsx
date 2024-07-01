import React from 'react'
import CaseInput from '../components/CaseInput/CaseInput'
import ArbitrDocs from './ArbitrDocs'
import c from './ArbitrDocs.module.scss'

const Arbitr = () => {

  
  return (
    <div className={c.pageWrap}>
      {/* <div>Формирование документа по новому делу</div> */}
      <ArbitrDocs />
    </div>
  )
}

export default Arbitr