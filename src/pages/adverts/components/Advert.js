import './Advert.css'

function Advert({advert}) {
    return (
        <div className='advert-p'>
            <p className="advert-p">{ advert.id }</p>
            <p>{ advert.createdAt }</p>
            <p>{ advert.name }</p>
            <p>{ advert.sale }</p>
            <p>{ advert.price }</p>
            <p>{ advert.tags }</p>
            <p>=============================</p>
        </div>
    )
}

export default Advert