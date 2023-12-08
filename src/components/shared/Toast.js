import Button from "./Button";
import './Toast.css'

function Toast({data}) {

    return (
        <div className="toast">
            <p className="toast-text">{ data.text }</p>
            <div className="toast-buttons">
                <Button onClick={ data.handleLeft }>{ data.textLeft }</Button>
                <Button onClick={ data.handleRight }>{ data.textRight }</Button>
            </div>
        </div>
    )
}

export default Toast