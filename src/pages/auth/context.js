import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(false)

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({ iniciallyLogged, children }) => {
    const [isLogged, setIsLogged] = useState(iniciallyLogged)
    const [rememberMe, setRememberMe] = useState(false)

    const handleLogin = () => setIsLogged(true)
    const handleLogout = () => setIsLogged(false)

    const handleRememberMeOn = () => setRememberMe(true)
    const handleRememberMeOff = () => setRememberMe(false)

    const AuthValues = {
        isLogged,
        onLogin: handleLogin,
        onLogout: handleLogout,
        rememberMe,
        rememberMeOn: handleRememberMeOn,
        rememberMeOff: handleRememberMeOff
    }

    return (
        <AuthContext.Provider value={ AuthValues }>{ children }</AuthContext.Provider>
    )
}