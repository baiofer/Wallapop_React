import { useParams } from "react-router-dom"

function AdvertPage() {

    const params = useParams()

    return (
        <h2>Advert page, advert { params.advertId }</h2>
    )
}

export default AdvertPage