import { useEffect, useState } from "react"
import { useAdvert } from "../../pages/adverts/context"
import FormField from "./FormField"
import FormSelect from "./FormSelect"
import TagSelector from "./TagSelector"
import Button from "./Button"
import closeIcon from '../../assets/close.png'

import './Filters.css'
import storage from "../../utils/storage"

function Filters() {

    const { tagsSelected, adverts, setAdvertsSearched, setIsFilter } = useAdvert()
    
    const [filter, setFilter] = useState({filterName: '', filterMinPrice: 0, filterMaxPrice: 0})
    const [selectedSale, setSelectedSale] = useState("")
    const [emptyList, setEmptyList] = useState(false)

    const handleChange = (event) => {
        setFilter( currentFilter => ({
            ...currentFilter,
            [event.target.name]: event.target.value
        }))
    }

    const handleSale = (event) => {
        const sale = (event.target.value)
        if (sale === 'nothing') setSelectedSale('')
        else setSelectedSale(sale)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let searchedAdvertsByName = []
        if (filter.filterName !== '') {
            searchedAdvertsByName = searchByName(adverts)
        } else {
            searchedAdvertsByName = [...adverts]
        }

        let searchedAdvertsBySale = []
        if (selectedSale !== '')  {
            searchedAdvertsBySale = searchBySale(searchedAdvertsByName)
        } else {
            searchedAdvertsBySale = [...searchedAdvertsByName]
        }

        let searchedAdvertsByTag = []
        if (tagsSelected.length !== 0)  {
            searchedAdvertsByTag = searchByTag(searchedAdvertsBySale)
        } else {
            searchedAdvertsByTag = [...searchedAdvertsBySale]
        }

        let searchedAdvertsByPrice = []
        if (filter.filterMinPrice !== 0 && filter.filterMaxPrice !== 0)  {
            searchedAdvertsByPrice = searchByPrice(searchedAdvertsByTag)
        } else {
            searchedAdvertsByPrice = [...searchedAdvertsByTag]
        }

        setAdvertsSearched(searchedAdvertsByPrice)

        if (searchedAdvertsBySale.length === 0) setEmptyList(true)
    }

    const searchByName = (ads) => {
        return ads.filter( advert => {
            const name = advert.name.toLowerCase()
            return name.includes(filter.filterName.toLowerCase())
        })
    }

    const searchBySale = (ads) => {
        return ads.filter( advert => {
            const booleanSale = selectedSale === 'sale' ? true : false
            return advert.sale === booleanSale
        })
    }

    const searchByTag = (ads) => {
        const result = tagsSelected.map( tag => {
            return ads.filter( advert => {
                return advert.tags.includes(tag)
            })
        })
        let finalResult = []
        for (let index = 0; index < result.length; index++) {
            const element = result[index];
            finalResult = finalResult.concat(element).filter((item, index, element) => {
                return element.indexOf(item)
            })
        }
        return finalResult
    }

    const searchByPrice = (ads) => {
        return ads.filter( advert => {
            const min = filter.filterMinPrice
            const max = filter.filterMaxPrice
            return advert.price >= min && advert.price <= max
        })
    }

    const handleClose = () => {
        setIsFilter(false)
        storage.remove('isFilter')
        setAdvertsSearched([])
    }

    const handleBlur = () => {
        console.log('blur')
    }

    const handleEmptyList = () => {
        setEmptyList(false)
    }

    return (
        <div className="filters-container">
            <form onSubmit={ handleSubmit }>
                <div className="filters-form">
                    <div>
                        <img src={closeIcon} alt='close' className="filters-icon" onClick={handleClose}/>    
                        <span className="filters-title">Filtros</span>
                    </div>
                    <div className="filters-name">
                        <FormField
                            type="text" 
                            name="filterName"
                            label="Anuncio a buscar"
                            onChange={ handleChange }
                            onBlur={handleBlur}
                            value={ filter.filterName }
                        />
                    </div>
                    <div className="filters-sale">
                        <FormSelect 
                            onChange={handleSale}
                        />
                    </div>
                    <div className="filters-tags">
                        <TagSelector />
                    </div>
                    <div className="filters-price">
                        <FormField
                            type="number" 
                            name="filterMinPrice"
                            label="Precio a buscar mínimo"
                            onChange={ handleChange }
                            value={ filter.filterMinPrice }
                        />
                    </div>
                    <div>
                        <FormField
                            type="number" 
                            name="filterMaxPrice"
                            label="Precio a buscar máximo"
                            onChange={ handleChange }
                            value={ filter.filterMaxPrice }
                        />
                    </div>
                    <div className="filters-button">
                        <Button 
                            type="submit" 
                            variant="primary" 
                            width={500}
                            height={60}
                        >
                            Buscar
                        </Button>      
                    </div>
                </div>
                {
                    emptyList ? 
                        <div className="filters-emptyList" onClick={ handleEmptyList }>
                            No hay artículos que cumplan con los filtros pedidos. Pulse para cerrar.
                        </div>
                    : null
                }
            </form>
        </div>
    )

    
}

export default Filters