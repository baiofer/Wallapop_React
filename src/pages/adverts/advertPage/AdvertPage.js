import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { deleteAdvert, getAdvert } from "../service"
import noImage from '../../../assets/noImage.png'
import backIcon from '../../../assets/back.png'

import './AdvertPage.css'
import Button from "../../../components/shared/Button"

function AdvertPage() {

    const [advert, setAdvert] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)
    const [buyed, setBuyed] = useState(false)

    const params = useParams()
    const navigate = useNavigate()

    useEffect( () => {
        const getAdvertData = async () => {
            try {
                const advert = await getAdvert(params.advertId) 
                setAdvert(advert)
            } catch (error) {
                setError(error)
                if (error.message === 'Unauthorized') {
                    navigate("/auth")
                }
                if (error.statusCode === 404) {
                    navigate('/404')
                }
            }
        }
        getAdvertData()
    }, [params.advertId, navigate])

    const resetError = () => {
        setError(null)        
    }

    const resetBuyed = () => {
        setBuyed(false)
        // Borrar el artículo?
        navigate('/adverts')        
    }

    const handleBuy = () => {
        setBuyed(true)
    }

    const handleDelete = async () => {
        try {
            setIsFetching(true)
            await deleteAdvert(advert.id)
            setIsFetching(false)
            navigate('/adverts')
        } catch (error) {
            setIsFetching(false)
            setError(error)
        }
    }

    let tags = []
    if (advert.tags) tags = advert.tags

    const deleteButtonDisabled = isFetching

    return (
        <div className="advertPage-container">
            <div className="advertPage-imageContainer">
                { 
                    (advert.photo) ?
                        <div className='advertPage-image-container'>
                            <img src={ advert.photo } alt="advert" style={{ width: '700px', height: '700px', borderRadius: '30px' }}/>
                        </div>
                        :
                        <div className='advertPage-image-container'>
                            <img src={ noImage } alt="advert" style={{ width: '700px', height: '700px', borderRadius: '30px' }}/>
                        </div>
                }
                <Link to="#" onClick={() => window.history.back()}>
                    <div className="advertPage-back">
                        <img src={ backIcon } alt='back icon' />
                    </div>
                </Link>
            </div>
            <div className="advertPage-tagsContainer">
                {
                    tags.map((tag) => {
                        return (
                            <span className="advertPage-tag">{ tag }</span>
                        )
                    })
                }
            </div>
            <div className="advertPage-priceContainer">
                <p className="advertPage-priceText">{ advert.price } €</p>
            </div>
            <div className="advertPage-nameContainer">
                <p className="advertPage-nameText">{ advert.name }</p>
            </div>
            <div className="advertPage-buttonsContainer">
                <Button 
                    height={50} 
                    onClick={handleBuy}
                >Comprar</Button>
                <Button 
                    height={50} 
                    onClick={handleDelete} 
                    disabled={ deleteButtonDisabled }
                    >{  isFetching ? "Eliminando ..." : "Eliminar"  }</Button>
            </div>
            { error && <div onClick={ resetError }>{ error.message }</div>}
            { buyed && <div onClick={ resetBuyed }>Artículo comprado. Pulse para continuar</div>}
        </div>
    )
}

export default AdvertPage


