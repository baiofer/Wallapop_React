import { useNavigate } from "react-router-dom";
import Button from "../../../components/shared/Button";
import { useAuth } from "../context";
import { logout } from "../service";

function AuthButton() {

    const { isLogged, onLogout } = useAuth()

    const navigate = useNavigate()

    const handleLogoutClick = async () =>  {
        await logout()
        onLogout()
        navigate('/auth')
    }

    return isLogged ? (
        <Button onClick={ handleLogoutClick }>Logout</Button>
    ) : (
        <Button>Regístrate o inicia sesión</Button>
    )
}

export default AuthButton