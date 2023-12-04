import './FormField.css'

const FormField = ({autofocus, label, ...props}) => {
    return(
        <div className='formField'>
            <label className='formField-label'>
                <span>{ label }</span>
                <input className='formField-input' autoComplete='off' {...props} />
            </label>
        </div>
    )
}

export default FormField