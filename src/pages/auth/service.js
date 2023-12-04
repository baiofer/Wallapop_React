import client, { removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client"
import storage from "../../utils/storage"
import { useAuth } from "./context"

export const login = (credentials, remember) => {
    return client
        .post('/auth/login', credentials)
        .then( ({ accessToken }) => {
            setAuthorizationHeader(accessToken) 
            if (remember) storage.set('auth', accessToken)
        })
}

export const me = () => {
    return client
        .get('/auth/me')
        .then( (response ) => {
            console.log(response)
        })
}

export const logout = () => {
    return Promise.resolve().then(() => {
        removeAuthorizationHeader()
        storage.remove('auth')
    })
}