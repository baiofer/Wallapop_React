import { useRef, useState } from 'react'
import './FormField.css'

const FormField = ({autofocus, label, ...props}) => {
    
    const [isFocused, setIsFocused] = useState(false)

    const inputRef = useRef(null)
    
    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    return(
        <div className='formField'>
            <label className='formField-label'>
                <div>{ isFocused ? label : '' }</div>
                <input 
                    className='formField-input'
                    ref={inputRef}
                    placeholder={ isFocused ? '' : label } 
                    autoComplete='off' 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    height={40}
                    {...props} 
                />
            </label>
        </div>
    )
}

export default FormField