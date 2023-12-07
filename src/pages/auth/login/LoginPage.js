import { useState } from "react"
import { login } from "../service"
import { useAuth } from "../context"
import { useLocation, useNavigate } from "react-router-dom"
import FormField from "../../../components/shared/FormField"
import Button from "../../../components/shared/Button"

import './LoginPage.css'
import AuthHeader from "../components/AuthHeader"


function LoginPage() {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    

    const { onLogin, rememberMeOn, rememberMeOff, rememberMe } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            setIsFetching(true)
            await login(credentials, rememberMe)
            setIsFetching(false)
            onLogin()
            const to = location?.state?.from.pathname || '/'
            navigate(to, { replace: true })
        } catch (error) {
            setIsFetching(false)
            setError(error)
        }
    }

    const resetError = () => {
        setError(null)
    }

    const handleChange = event => {
        setCredentials( currentCredentials => ({
            ...currentCredentials,
            [event.target.name]: event.target.value
        }))
    }

    const handleRemember = (event) => {
        if (event.target.checked) {
            rememberMeOn()
        } else {
            rememberMeOff()
        }
    }

    const { email, password } = credentials
    const buttonDisabled = !(email && password) || isFetching

    return (
        <div className="loginPage-container">
            <AuthHeader />
            <h1 className="loginPage-title">¡Te damos la bienvenida!</h1>
            <form onSubmit={ handleSubmit }>
                <div className="loginPage-formField">
                    <FormField 
                        type="text" 
                        name="email" 
                        label="Dirección de email"
                        onChange={ handleChange } 
                        value={ credentials.email } 
                    />
                </div>
                <div className="loginPage-formField">
                    <FormField 
                        type="password" 
                        name="password" 
                        label='Contraseña'
                        onChange={ handleChange }
                        value={ credentials.password }
                    />
                </div>
                <div className="loginPage-button">
                    <Button 
                        type="submit" 
                        variant="primary" 
                        width={500}
                        height={60}
                        disabled={ buttonDisabled }>
                            {isFetching ? "Connecting ..." : "Iniciar sesión"}
                    </Button>
                </div>
                <div className="loginForm-checkbox">
                    <input 
                        type='checkbox'
                        id="remember"
                        name='remember'
                        height={50}
                        onChange={handleRemember} 
                    />
                    <label form='remember'>Recordar</label>
                </div>
                
                { error &&  <div className="loginPage-errorContainer">
                                <div 
                                    className="loginPage-error" 
                                    onClick={resetError}
                                >{ error.message }</div>
                            </div>
                }                  
            </form>
        </div>
    )

}

export default LoginPage