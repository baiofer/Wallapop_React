import { useEffect, useState } from "react"
import Button from "../../../components/shared/Button"
import FormField from "../../../components/shared/FormField"
import FormSelect from "../../../components/shared/FormSelect"
import './NewAdvertPage.css'
import TagSelector from "../../../components/shared/TagSelector"
import PhotoSelector from "../../../components/shared/PhotoSelector"
import { createAdvert } from "../service"
import { useAdvert } from "../context"

function NewAdvertPage() {

    const [product, setProduct] = useState({productName: '', productPrice: 0})
    const [selectedSale, setSelectedSale] = useState("")

    const [isFetching, setIsFetching] = useState(false)
    const [error, setError] = useState(null)

    const { tagsSelected } = useAdvert()
    const { photoSelected } = useAdvert()

    console.log(photoSelected)

    const handleChange = event => {
        setProduct( currentProduct => ({
            ...currentProduct,
            [event.target.name]: event.target.value
        }))
    }

    const handleSale = (event) => {
        setSelectedSale(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('Crear')
        /*
        const advert = {
            name: product.productName,
            sale: selectedSale,
            price: product.productPrice,
            tags: tagsSelected,
        }
        if (photoSelected) {
            console.log(photoSelected)
            advert.photo = photoSelected
        }
        */
        const formData = new FormData()
        formData.append('name', product.productName)
        formData.append('sale', selectedSale)
        formData.append('price', product.productPrice)
        formData.append('tags', tagsSelected)
        if (photoSelected) {
            formData.append('photo', photoSelected)
        }

        try {
            const advertCreated = await createAdvert(formData)
            console.log('Advert created: ', advertCreated)
        } catch (error) {
            console.log('Error: ', error)
        }
    }

    const { productName, productPrice } = product
    const buttonDisabled = !(productName && productPrice && tagsSelected && selectedSale) || isFetching
 
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
                        type="number" 
                        name="productPrice"
                        label="Precio (se razonable)"
                        onChange={ handleChange }
                        value={ product.productPrice }
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