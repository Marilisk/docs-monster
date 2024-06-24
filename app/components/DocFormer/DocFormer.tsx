import React, { FC, useContext, useEffect } from 'react'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs'
import { Fab } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { createDoc } from '@/app/actions/createDoc/createDocOnClient';

interface IProps { }

const DocFormer: FC<IProps> = ({ }) => {

  const context = useContext(CaseDataContext)
  const { caseData, applicantName, docTitle, setDocClientUrl, docClientUrl } = context

  const createDocFile = async () => {
    if (!caseData) return
    await createDoc({ caseData, docTitle, applicantName, docClientUrl }, setDocClientUrl)
  }

  useEffect(() => {
    createDocFile()
  }, [caseData, applicantName, docTitle])

  useEffect(() => {
    return () => {
      console.log('unmount useEffect DocFormer')
      // debugger
      const link = document.getElementById('client-document');
      link && document.body.removeChild(link);
      docClientUrl && window.URL.revokeObjectURL(docClientUrl)
      setDocClientUrl(undefined)
    }
  }, [])

  if (caseData === null || !applicantName || !docClientUrl) return null

  const downloadDoc = async () => {
    const link = document.getElementById('client-document');
    link?.click();
    // link && document.body.removeChild(link);
    // window.URL.revokeObjectURL(docClientUrl)
  }


  return (
    <Fab color="primary" aria-label="download"
      sx={{
        color: '#fff',
        position: 'fixed',
        bottom: '5vh',
        right: '5vh'
      }}
      variant='extended'
      onClick={downloadDoc}
    >
      <span>скачать файл</span>
      <DownloadOutlinedIcon htmlColor='white' />
    </Fab>
  )
}

export default DocFormer
