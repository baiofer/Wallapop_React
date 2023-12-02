import { useState } from "react"
import { login, logout } from "./service"
import { useAuth } from "./context"


function LoginPage() {

    const [credentials, setCredentials] = useState({ email: '', password: '' })
    
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            await login(credentials)
        } catch (error) {
            console.log(error)
        }
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
                    name="email" 
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