import Button from "../../../components/shared/Button"
import FormField from "../../../components/shared/FormField"
import FormFile from "../../../components/shared/FormFile"
import FormSelect from "../../../components/shared/FormSelect"

function NewAdvertPage() {
    return (
        <div className="newAdvert-container">
            <h2>¿Que subiras?</h2>
            <form>
                <div className="newAdvert-name">
                    <FormField />
                </div>
                <div className="newAdvert-sale">
                    <FormSelect />
                </div>
                <div className="newAdvert-price">
                    <FormField />
                </div>
                <div className="newAdvert-tags">
                    <FormSelect />
                </div>
                <div className="newAdvert-photo">
                    <FormFile />
                </div>
                <div className="newAdvert-button">
                    <Button />
                </div>
            </form>
        </div>
        
    )
}

export default NewAdvertPage