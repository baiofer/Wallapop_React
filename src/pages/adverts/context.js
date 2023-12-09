import { createContext, useContext, useState } from 'react'

const AdvertContext = createContext(false)

export const useAdvert = () => useContext(AdvertContext)

export const AdvertContextProvider = ({ children }) => {
    const [tagsSelected, setTagsSelected] = useState('')
    const [photoSelected, setPhotoSelected] = useState('')
    const [advertsSearched, setAdvertsSearched] = useState([])

    const handleTags = (tags) => setTagsSelected(tags)
    const handlePhoto = (photo) => setPhotoSelected(photo) 
    const handleAdvertsSearched = (adverts) => setAdvertsSearched(adverts)
    
    const AdvertValues = {
        tagsSelected, 
        setTagsSelected: handleTags,
        photoSelected,
        setPhotoSelected: handlePhoto,
        advertsSearched,
        handleAdvertsSearched
    }

    return (
        <AdvertContext.Provider value={ AdvertValues }>{ children }</AdvertContext.Provider>
    )
}

export const SetTagsSelected = () => {
    return useContext(AdvertContext)
}