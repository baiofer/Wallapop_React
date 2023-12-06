import { useState } from "react"
import Button from "../../../components/shared/Button"
import FormField from "../../../components/shared/FormField"
import FormFile from "../../../components/shared/FormFile"
import FormSelect from "../../../components/shared/FormSelect"

import './NewAdvertPage.css'
import TagSelector from "../../../components/shared/TagSelector"
import PhotoSelector from "../../../components/shared/PhotoSelector"

function NewAdvertPage() {

    const [product, setProduct] = useState({productName: '', productPrice: 0})
    const [selectedSale, setSelectedSale] = useState("")

    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    const handleChange = event => {
        setProduct( currentProduct => ({
            ...currentProduct,
            [event.target.name]: event.target.value
        }))
    }

    const handleSale = (event) => {
        console.log(event.target.value)
        setSelectedSale(event.target.value)
    }

    const handleSubmit = () => {
        console.log('submit')
    }

    const { productName, productPrice } = product
    const buttonDisabled = !(productName && productPrice) || isFetching
    
    return (
        <div className="newAdvert-container">
            <h1 className="newAdvert-title">¿Que subiras?</h1>
            <form onSubmit={ handleSubmit }>
                <div className="newAdvert-name">
                    <FormField
                        type="text" 
                        name="productName"
                        label="Producto a subir"
                        onChange={ handleChange }
                        value={ product.productName }
                    />
                </div>
                <div className="newAdvert-sale">
                    <FormSelect 
                        onChange={handleSale}
                    />
                </div>
                <div className="newAdvert-price">
                    <FormField 
                        type="text" 
                        name="productPrice"
                        label="Precio (se razonable)"
                        onChange={ handleChange }
                        value={ product.productName }
                    />
                </div>
                <div className="newAdvert-tags">
                    <TagSelector />
                </div>
                <div className="newAdvert-photo">
                    <PhotoSelector />
                </div>
                <div className="newAdvert-button">
                    <Button 
                        type="submit" 
                        variant="primary" 
                        width={500}
                        height={60}
                        disabled={ buttonDisabled }
                    >
                        {isFetching ? "Subiendo producto ..." : "Subir producto"}
                    </Button>
                            
                </div>
            </form>
        </div>
        
    )
}

export default NewAdvertPage