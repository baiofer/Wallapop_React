import { useEffect, useState } from "react"
import { getAdverts } from "./service"


function AdvertsPage() {

    const [adverts, setAdverts] = useState([])

    useEffect(() => {
        const fetchAdverts = async () => {
            const adverts = await getAdverts()
            setAdverts(adverts)
            console.log(adverts)
        }
        fetchAdverts()
    }, [])
    return (
        <div>
            Listado de anuncios
        </div>
    )

}

export default AdvertsPage