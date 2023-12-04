import { useEffect, useState } from "react"
import { getAdverts } from "../service"
import Header from "../../../components/layout/Header"


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
            <Header />
            Listado de anuncios
            { console.log(adverts) }
        </div>
    )

}

export default AdvertsPage