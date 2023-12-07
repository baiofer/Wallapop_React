import { useEffect, useState } from "react"
import { getAdverts } from "../service"
import Header from "../../../components/layout/Header"
import { Link, useNavigate } from "react-router-dom"
import './AdvertsPage.css'
import Advert from "../components/Advert"


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
    }, [navigate])

    const resetError = () => {
        setError(null)        
    }

    if (isFetching) return (
        <div>Loading ...</div>
    )
    
    return (
        <div>
            <Header />
            <div className="adverts-container">
                {
                    adverts.map( advert => {
                        return(
                            <Link to={`/adverts/${advert.id}`} className="advertsPage-link">
                                <Advert advert={advert} />
                            </Link>
                        )
                    })
                }
                { error && <div onClick={resetError}>{ error.message }</div>}
            </div>
        </div>
    )

}

export default AdvertsPage