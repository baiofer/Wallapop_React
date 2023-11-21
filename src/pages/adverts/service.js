import client from "../../api/client"


const advertsUrl = 'v1/adverts'

export const getAdverts = () => {
    return client.get(advertsUrl)
}