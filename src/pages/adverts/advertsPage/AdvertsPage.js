import { useEffect, useState } from "react"
import { getAdverts } from "../service"
import Header from "../../../components/layout/Header"
import { Navigate, useNavigate, useNavigation } from "react-router-dom"


function AdvertsPage() {

    const [adverts, setAdverts] = useState([])
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchAdverts = async () => {
            try {
                setIsFetching(true)
                const adverts = await getAdverts()
                setAdverts(adverts)
                setIsFetching(false)
            } catch (error) {
                setIsFetching(false)
                setError(error)
                console.log(error.message)
                if (error.message === 'Unauthorized') {
                    navigate("/auth")
                } 
            }
            
        }
        fetchAdverts()
    }, [])

    const resetError = () => {
        setError(null)        
    }

    if (isFetching) return (
        <div>Loading ...</div>
    )
    
    return (
        <div>
            <Header />
            Listado de anuncios
            { console.log("Anuncios: ", adverts) }
            { error && <div onClick={resetError}>{ error.message }</div>}
        </div>
    )

}

export default AdvertsPage