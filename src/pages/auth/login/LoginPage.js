import { useState } from "react"
import { login, logout } from "../service"
import { useAuth } from "../context"
import { useLocation, useNavigate } from "react-router-dom"
import FormField from "../../../components/shared/FormField"
import Button from "../../../components/shared/Button"


function LoginPage() {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    const { onLogin } = useAuth()

    const location = useLocation()
    const navigate = useNavigate()
    
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            setIsFetching(true)
            await login(credentials)
            setIsFetching(false)
            onLogin()
            console.log('CORRECTO')
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

    const { email, password } = credentials
    const buttonDisabled = !(email && password) || isFetching

    return (
        <div>
            <h1>¡Te damos la bienvenida!</h1>
            <form onSubmit={ handleSubmit }>
                <FormField 
                    type="text" 
                    name="email" 
                    onChange={ handleChange } 
                    value={ credentials.email } 
                />
                <FormField 
                    type="password" 
                    name="password" 
                    onChange={ handleChange }
                    value={ credentials.password }
                />
                <Button 
                    type="submit" 
                    variant="primary" 
                    disabled={ buttonDisabled }>
                        {isFetching ? "Connecting ..." : "Log in"}
                </Button> 
                { isFetching && <div className="loginPage_error" onClick={resetError}>Logging in server ...</div>}
                { error && <div className="loginPage_error" onClick={resetError}>{ error.message }</div>}  
            </form>
        </div>
    )

}

export default LoginPage