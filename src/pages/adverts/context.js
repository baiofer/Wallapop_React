import { createContext, useContext, useState } from 'react'
import storage from '../../utils/storage'

const AdvertContext = createContext(false)

export const useAdvert = () => useContext(AdvertContext)

export const AdvertContextProvider = ({ initialIsFilter, children }) => {
    const [tagsSelected, setTagsSelected] = useState('')
    const [photoSelected, setPhotoSelected] = useState('')
    const [advertsSearched, setAdvertsSearched] = useState([])
    const [isFilter, setIsFilter] = useState(initialIsFilter)
    const [adverts, setAdverts] = useState([])

    const handleTags = (tags) => setTagsSelected(tags)
    const handlePhoto = (photo) => setPhotoSelected(photo) 
    const handleAdvertsSearched = (adverts) => setAdvertsSearched(adverts)
    const handleAdverts = (adverts) => setAdverts(adverts)
    const handleIsFilter = (value) => setIsFilter(value)
    
    const AdvertValues = {
        tagsSelected, 
        setTagsSelected: handleTags,
        photoSelected,
        setPhotoSelected: handlePhoto,
        advertsSearched,
        setAdvertsSearched: handleAdvertsSearched,
        adverts,
        setAdverts: handleAdverts,
        isFilter,
        setIsFilter: handleIsFilter,
    }

    return (
        <AdvertContext.Provider value={ AdvertValues }>{ children }</AdvertContext.Provider>
    )
}

export const SetTagsSelected = () => {
    return useContext(AdvertContext)
}