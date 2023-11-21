import client, { removeAuthorizationHeader, setAuthorizationHeader } from "../../api/client"
import storage from "../../utils/storage"

export const login = (credentials) => {
    return client
        .post('/auth/login', credentials)
        .then( ({ accessToken }) => {
            setAuthorizationHeader(accessToken) 
            storage.set('auth', accessToken)
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