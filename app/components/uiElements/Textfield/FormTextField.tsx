import { FC, useState } from "react"
import c from './FormTextField.module.scss'
import { TextField, TextFieldProps, styled } from "@mui/material"

export const StyledTextField = styled(TextField)({
    '.MuiInputBase-root': {
        backgroundColor: '#fff'
    }
}) as typeof TextField

type IFormTextFieldProps = {
    value: string
    validate?: (arg: string) => string | undefined
    error?: string
    type?: 'text' | 'password'
    onChange?: (v: string) => void
    onErrorDetect?: (v: boolean) => void
}  & TextFieldProps 

const FormTextField: FC<IFormTextFieldProps> = ({
    onErrorDetect, value, validate, onChange, type = 'text', ...props
}: IFormTextFieldProps) => {

    const [localError, setLocalError] = useState('')

    return <div className={c.lineWrap}>
        <StyledTextField
            {...props}
            value={value}
            fullWidth
            error={!!localError}
            helperText={localError}
            type={type}
            rows={props.multiline ? 4 : undefined}
            onChange={(e) => {
                onErrorDetect && onErrorDetect(false)
                const value = e.target.value
                onChange && onChange(value)
                const err = validate && validate(value)
                if (err) {
                    setLocalError(err)
                    onErrorDetect && onErrorDetect(true)
                } else {
                    localError && setLocalError('')
                }
            }} 
        />
    </div>
}

export default FormTextField 
