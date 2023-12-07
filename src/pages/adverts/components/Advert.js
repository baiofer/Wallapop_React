import './Advert.css'
import noImage from '../../../assets/noImage.png'

function Advert({advert}) {
    return (
        <div className='advert-container'>
            <div className='advert-image'>
                {
                    advert.photo ?
                        <div className='advert-image-container'>
                            <img src={ advert.photo } alt="advert" style={{ width: '280px', height: '320px', borderRadius: '30px' }}/>
                            <div className='text-tags'>{ advert.tags.join(', ') }</div>
                        </div>
                        :
                        <div className='advert-image-container'>
                            <img src={ noImage } alt="advert" style={{ width: '280px', height: '320px', borderRadius: '30px' }}/>
                            <div className='text-tags'>{ advert.tags.join(', ') }</div>
                        </div>
                }
            </div>
            <p className='advert-price'>{ advert.price } €</p>
            <p className='advert-name'>{ advert.name }</p>    
        </div>
    )
}

export default Advert