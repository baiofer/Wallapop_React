import client from "../../api/client"


const advertsUrl = '/v1/adverts'

export const getAdverts = () => {
    const url = advertsUrl
    return client.get(url)
}

export const getAdvert = advertId => {
    const url = `${advertsUrl}/${advertId}`
    return client.get(url)
}

export const getTags = () => {
    const url = `${advertsUrl}/tags`
    return client.get(url)
}

export const createAdvert = advert => {
    const url = advertsUrl
    console.log('Create: ', advert)
    return client.post(url, advert)
}