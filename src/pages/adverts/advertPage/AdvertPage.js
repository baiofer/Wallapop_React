import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getAdvert, deleteAdvert } from "../service"
import noImage from '../../../assets/noImage.png'
import backIcon from '../../../assets/back.png'

import './AdvertPage.css'
import Button from "../../../components/shared/Button"
import Toast from "../../../components/shared/Toast"

function AdvertPage() {

    const [advert, setAdvert] = useState({})
    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)
    const [buyed, setBuyed] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

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
        deleteAd()        
    }

    const handleBuy = () => {
        setBuyed(true)
    }

    function confirmDelete() {
        const data = {
            text: '¡ Estás a punto de eliminar un anuncio !',
            textLeft: 'Confirmar',
            textRight: 'Volver',
            handleLeft: handleDeletion,
            handleRight: handleGoBack,        }
        return <Toast data={ data }/>
    }

    const handleDeletion = () => {
        setIsDelete(false)
        deleteAd()
    }

    const handleGoBack = () => {
        setIsDelete(false)
    }

    const handleDelete = () => {
        setIsDelete(true)
    }

    const deleteAd = async () => {
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
                            <img src={ advert.photo } alt="advert" style={{ width: '699px', height: '700px', borderRadius: '30px' }}/>
                        </div>
                        :
                        <div className='advertPage-image-container'>
                            <img src={ noImage } alt="advert" style={{ width: '690px', height: '690px', borderRadius: '30px' }}/>
                        </div>
                }
                <Link to="/adverts">
                    <div className="advertPage-back">
                        <img src={ backIcon } alt='back icon' />
                    </div>
                </Link>
            </div>
            <div className="advertPage-tagsContainer">
                {
                    tags.map((tag, index) => {
                        return (
                            <span className="advertPage-tag" key={ index }>{ tag }</span>
                        )
                    })
                }
            </div>
            <div className="advertPage-priceContainer">
                <p className="advertPage-priceText">{ advert.price } €</p>
                <p className='advertPage-sale'>{ advert.sale ? 'Compra' : 'Venta' }</p> 
            </div>
            <div className="advertPage-nameContainer">
                <p className="advertPage-nameText">{ advert.name }</p>
            </div>
            <div className="advertPage-buttonsContainer">
                {
                    !advert.sale ?
                    <Button 
                        height={50} 
                        onClick={handleBuy}
                    >Comprar</Button>
                    : null
                }
                
                <Button 
                    height={50} 
                    onClick={handleDelete} 
                    disabled={ deleteButtonDisabled }
                    >Eliminar</Button>
            </div>
            {   error && <div 
                            className="advertPage-errorContainer">
                            <div 
                                className="loginPage-error" 
                                onClick={resetError}
                            >{ error.message }</div>
                         </div>
            }
            {   buyed && <div 
                            className="advertPage-errorContainer">
                            <div 
                                className="loginPage-error buyed" 
                                onClick={resetBuyed}
                            >Artículo comprado, se eliminará de la lista. Pulse para continuar</div>
                        </div>
            }
            {
                isDelete && confirmDelete()
            }
        </div>
    )
}

export default AdvertPage


