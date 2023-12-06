import './FormSelect.css'

function FormSelect({label, ...props}) {

    return (
        <div className='formSelect-container'>
            <label className="formSelect-label">¿Que quieres hacer?</label>
            <select 
                className='formSelect-select'
                name="sale"
                {...props}
            >
                <option value="nothing">...</option>
                <option value="buy">Comprar</option>
                <option value="sale">Vender</option>
            </select>
        </div>
        
    )
}

export default FormSelect