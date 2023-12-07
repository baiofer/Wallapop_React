import './AuthHeader.css'
import backIcon from '../../../assets/back.png'
import closeIcon from '../../../assets/close.png'
import { Link } from 'react-router-dom'

function AuthHeader() {

    return (
        <div className="container">
            <Link to="#" onClick={() => window.history.back()}>
                <div className="back">
                    <img src={ backIcon } alt='back icon' />
                </div>
            </Link>
            <Link to='/'>
                <div className="close">
                    <img src={ closeIcon } alt='close icon' />
                </div>
            </Link>
        </div>
    )
}

export default AuthHeader