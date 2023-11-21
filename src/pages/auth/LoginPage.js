import { useState } from "react"
import { login } from "./service"


function LoginPage() {

    const [credentials, setCredentials] = useState({ username: '', password: '' })
    const [isLogged, setIsLogged] = useState(false)

    const handleLogin = () => setIsLogged(true)
    const handleLogout = () => setIsLogged(false)

    const AuthValues = {
        isLogged,
        onLogin: handleLogin,
        onLogout: handleLogout
    }

    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await login(credentials)
        } catch (error) {
            console.log(error)
        }
        
        AuthValues.onLogin()
    }

    const handleChange = event => {
        setCredentials( currentCredentials => ({
            ...currentCredentials,
            [event.target.name]: event.target.value
        }))
    }

    const { username, password } = credentials
    return (
        <div>
            <h1>Acceso a Wallapop</h1>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text" 
                    name="username" 
                    onChange={ handleChange } 
                    value={ username } 
                />
                <input 
                    type="password" 
                    name="password" 
                    onChange={ handleChange }
                    value={ password }
                />
                <button type="submit">Log in</button>
            </form>
        </div>
    )

}

export default LoginPage