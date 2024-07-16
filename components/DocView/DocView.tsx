import React, { FC, useContext, useEffect, useRef, useState } from 'react'
import { CaseDataContext } from '@/app/arbitr/ArbitrDocs';
import c from './DocView.module.scss'
import { renderDocument } from './DocView.helpers';
import { Box } from '@mui/material';


const DocView: FC = () => {

    const ref = useRef<HTMLDivElement>(null)
    const { applicantName, docTitle, docClientUrl, caseData } = useContext(CaseDataContext)

    useEffect(() => {
        if (docClientUrl && ref.current) {
            renderDocument(docClientUrl, ref.current)
        }
    }, [docClientUrl, docTitle, applicantName])

    const [containerWidth, setContainerWidth] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const [containerLeft, setContainerLeft] = useState(0)
    const [containerTop, setContainerTop] = useState(0)

    const ratio = containerWidth / 812

    const handleMeasure = () => {
        const containerWidth = ref.current?.clientWidth
        containerWidth && setContainerWidth(containerWidth)
        const containerHeight = ref.current?.clientHeight
        setContainerHeight(containerHeight || 0)
        const containerLeft = ref.current?.getBoundingClientRect().x
        setContainerLeft(containerLeft || 0)
        const containerTop = ref.current?.getBoundingClientRect().y
        setContainerTop(containerTop || 0)
    }

    useEffect(() => {
        if (!!caseData) {
            handleMeasure()
        }
        window.addEventListener('resize', handleMeasure);
        () => window.removeEventListener('resize', handleMeasure)
    }, [!!caseData])


    return (
        <div className={c.wrap} style={{ minHeight: `${containerHeight + 100}px` }} >
            <Box id='container' ref={ref} className={c.docContainer}
                sx={{
                    '.docxCustom': {
                        transform: `scale(${ratio})`,
                        transformOrigin: 'top left',
                        position: 'absolute',
                        top: containerTop - 40,
                        left: containerLeft,
                        zIndex: 10,
                    }
                }}
            />
        </div>
    )
}

export default DocView