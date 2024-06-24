import { useEffect } from "react"


export const useHandleSubmitByEnterkey = (
    handleSubmit: () => void, 
    isFoundDisabled: boolean,
) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && !isFoundDisabled) {
                handleSubmit()
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [handleSubmit])
}