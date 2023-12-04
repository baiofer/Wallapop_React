import { ReactComponent as Icon } from "../../assets/wallapop_name.svg"
import AuthButton from "../../pages/auth/components/AuthButton.js"
import Button from "../shared/Button.js"
import Search from "../shared/Search.js"
import './Header.css'

function Header() {

    const handleClick = () => {
        console.log('CLICK')
    }

    return (
        <header className="header">
            <div className="icon">
                <Icon width={ 190 } height={ 40 } />
            </div>
            <Search />
            <div className="login">
                <AuthButton variant='primary' onClick={handleClick}>Regístrate o inicia sesión</AuthButton>
            </div>
            <div className="add">
                <Button variant='primary' onClick={handleClick} align-content="flex-end">Subir producto</Button>
            </div>
        </header>
    )
}

export default Header