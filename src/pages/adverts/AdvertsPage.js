import { useEffect, useState } from "react"
import { getAdverts } from "./service"


function AdvertsPage() {

    const [adverts, setAdverts] = useState([])

    useEffect(() => {
        const fetchAdverts = async () => {
            const adverts = await getAdverts()
            setAdverts(adverts)
        }
        fetchAdverts()
    }, [])


    return (
        <div>
            Listado de anuncios
            { console.log(adverts) }
        </div>
    )

}

export default AdvertsPage