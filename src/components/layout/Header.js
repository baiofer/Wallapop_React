import { Link, useNavigate } from "react-router-dom"
import { ReactComponent as Icon } from "../../assets/wallapop_name.svg"
import AuthButton from "../../pages/auth/components/AuthButton.js"
import Button from "../shared/Button.js"
import Search from "../shared/Search.js"
import './Header.css'

function Header() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('new')
    }

    return (
        <header className="header">
            <Link to="/">
                <div className="header-icon">
                    <Icon width={ 190 } height={ 40 } />
                </div>
            </Link>
            <div className="header-search">
                <Search />
            </div>
            <div className="header-login">
                <AuthButton 
                    variant='primary' 
                >Regístrate o inicia sesión</AuthButton>
            </div>
            <div className="header-add">
                <Button 
                    variant='primary' 
                    onClick={handleClick} 
                >Subir producto</Button>
            </div>
        </header>
    )
}

export default Header