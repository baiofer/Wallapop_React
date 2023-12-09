import { useEffect, useState } from "react"
import { getAdverts } from "../service"
import { Link, useNavigate } from "react-router-dom"
import './AdvertsPage.css'
import Advert from "../components/Advert"
import { useAdvert } from "../context"


function AdvertsPage() {

    //const [adverts, setAdverts] = useState([])
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    const { advertsSearched, adverts, setAdverts } = useAdvert()

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

    let advertsToShow = adverts
    if (advertsSearched?.length !== 0) advertsToShow = advertsSearched
    
    return (
        <div>
            <div className="adverts-container">
                {
                    advertsToShow.map( advert => {
                        return(
                            <Link key={ advert.id } to={`/adverts/${advert.id}`} className="advertsPage-link">
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