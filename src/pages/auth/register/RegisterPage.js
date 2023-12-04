import { useState } from "react"
import FormField from "../../../components/shared/FormField"
import Button from "../../../components/shared/Button"
import { login, register } from "../service"

import './RegisterPage.css'
import { useAuth } from "../context"
import { useLocation, useNavigate } from "react-router-dom"

function RegisterPage() {

    const [credentials, setCredentials] = useState({ name: '', username: '', email: '', password: ''})
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    const { onLogin } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            credentials.username = credentials.name
            setIsFetching(true)
            await register(credentials)
            loginUser()
        } catch (error) { 
            if (error.message === 'Internal server error') {
                loginUser()
            } else {
                setIsFetching(false)
                setError(error)
            }
        }
    }

    const loginUser = async () => {
        const loginCredentials = {
            email: credentials.email,
            password: credentials.password
        }
        try {
            console.log(loginCredentials)
            setIsFetching(true)
            await login(loginCredentials)
            setIsFetching(false)
            onLogin()
            const to = location?.state?.from.pathname || '/'
            navigate(to, { replace: true })
        } catch (error) {
            if (error.message === 'Unauthorized') {
                error.message = 'El usuario ya existe. Hemos intentado iniciar sesión. El email o la contraseña son erróneos'
            }
            setIsFetching(false)
            setError(error)
        }
        
    }

    const resetError = () => {
        setError(null)
    }

    const handleChange = (event) => {
        setCredentials( currentCredentials => ({
            ...currentCredentials,
            [event.target.name]: event.target.value
        }))
    }

    const { name, email, password } = credentials
    const buttonDisabled = !(name && email && password) || isFetching 

    return (
        <div className="registerPage-container">
            <h1 className="registerPage-title">Únete a Wallapop</h1>
            <form onSubmit={handleSubmit}>
                <div className="registerPage-formField">
                    <FormField 
                        type="text" 
                        name="name" 
                        label="Nombre y apellidos"
                        onChange={ handleChange } 
                        value={ credentials.name } 
                    />
                </div>
                <div className="registerPage-formField">
                    <FormField 
                        type="text" 
                        name="email" 
                        label="Dirección de email"
                        onChange={ handleChange } 
                        value={ credentials.email } 
                    />
                </div>
                <div className="registerPage-formField">
                    <FormField 
                        type="password" 
                        name="password" 
                        label="Contraseña"
                        onChange={ handleChange } 
                        value={ credentials.password } 
                    />
                </div>
                <div className="registerPage-button">
                    <Button 
                        type="submit" 
                        variant="primary" 
                        width={500}
                        height={60}
                        disabled={ buttonDisabled }>
                            {isFetching ? "Connecting ..." : "Crear una cuenta"}
                    </Button>
                </div>

                { error &&  <div className="registerPage-errorContainer">
                                <div 
                                    className="registerPage-error" 
                                    onClick={resetError}
                                >{ error.message }</div>
                            </div>
                }
            </form>
        </div>
    )
}

export default RegisterPage