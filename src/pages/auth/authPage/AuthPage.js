import { useNavigate } from "react-router-dom"
import { useAuth } from "../context"
import Button from "../../../components/shared/Button.js"

import './AuthPage.css'


function AuthPage() {

    const { isLogged } = useAuth()
    const navigate = useNavigate()

    if (isLogged) {
        console.log("estoy logueado!!")
        navigate('/adverts')
    }

    const handleLogin = () => {
        const to = '/auth/login'
        navigate(to)
    }

    const handleRegister = () => {
        const to = '/auth/register'
        navigate(to)
    }

    return(
        <div className="authForm">
            <h1 className="title" >Compra y vende en Wallapop</h1>
            <h3 className="subtitle">Consigue los mejores precios y gana dinero con lo que no usas</h3>
            <div className="buttonForm">
                <Button 
                    variant='primary' 
                    width={500} 
                    height={80} 
                    onClick={ handleRegister }
                >Regístrate con tu e-mail</Button>
            </div>
            <div className="buttonForm">
                <Button 
                    variant="primary" 
                    width={500} 
                    height={80} 
                    onClick={ handleLogin }
                >¿Ya registrado? Inicia sesión</Button>
            </div>
            
            
        </div>
        
        
    )
}

export default AuthPage