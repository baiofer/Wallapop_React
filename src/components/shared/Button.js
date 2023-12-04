import './button.css'

function Button({children, variant, ...props}) {

    // property variant -> primary / secondary
    // property active -> true / false

    return (
        <button className={`button ${variant} ${props.disabled ? 'disabled' : ''}`} {...props} style={{...props}}>{children}</button>
    )
}

export default Button