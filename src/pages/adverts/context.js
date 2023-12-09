import { createContext, useContext, useState } from 'react'

const AdvertContext = createContext(false)

export const useAdvert = () => useContext(AdvertContext)

export const AdvertContextProvider = ({ children }) => {
    const [tagsSelected, setTagsSelected] = useState('')
    const [photoSelected, setPhotoSelected] = useState('')
    const [advertsSearched, setAdvertsSearched] = useState([])
    const [nameToSearch, setNameToSearch] = useState('')
    const [adverts, setAdverts] = useState([])

    const handleTags = (tags) => setTagsSelected(tags)
    const handlePhoto = (photo) => setPhotoSelected(photo) 
    const handleAdvertsSearched = (adverts) => setAdvertsSearched(adverts)
    const handleNameToSearch = (text) => setNameToSearch(text)
    const handleAdverts = (adverts) => setAdverts(adverts)
    
    const AdvertValues = {
        tagsSelected, 
        setTagsSelected: handleTags,
        photoSelected,
        setPhotoSelected: handlePhoto,
        advertsSearched,
        setAdvertsSearched: handleAdvertsSearched,
        nameToSearch,
        setNameToSearch: handleNameToSearch,
        adverts,
        setAdverts: handleAdverts,
    }

    return (
        <AdvertContext.Provider value={ AdvertValues }>{ children }</AdvertContext.Provider>
    )
}

export const SetTagsSelected = () => {
    return useContext(AdvertContext)
}