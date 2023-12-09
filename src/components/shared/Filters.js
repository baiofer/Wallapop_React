import { useState } from "react"
import { useAdvert } from "../../pages/adverts/context"
import FormField from "./FormField"
import FormSelect from "./FormSelect"
import TagSelector from "./TagSelector"
import Button from "./Button"

import './Filters.css'

function Filters() {

    const [filter, setFilter] = useState({filterName: '', filterPrice: 0})

    const { nameToSearch, tagSelected, adverts, setAdvertsSearched } = useAdvert()

    console.log('Name: ', nameToSearch)

    const handleChange = () => {

    }

    const handleSale = () => {

    }

    const handleSubmit = () => {

    }

    return (
        <div className="filters-container">
            <p className="filters-title">Filtros</p>
            <form onSubmit={ handleSubmit }>
                <div className="filters-form">
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
                            name="filterPrice"
                            label="Precio a buscar"
                            onChange={ handleChange }
                            value={ filter.productPrice }
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
                
            </form>
        </div>
    )

    
}

export default Filters