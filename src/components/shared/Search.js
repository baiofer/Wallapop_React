import { CiSearch } from 'react-icons/ci'
import './Search.css'
import { useAdvert } from '../../pages/adverts/context'
import storage from '../../utils/storage'

function Search() {

    const { setIsFilter } = useAdvert()

    const handleSearch = () => {
        setIsFilter(true)
        storage.set('isFilter', true)
    }

    return (
        <div className='search' onClick={handleSearch}>
            <span className='search-label'>Buscar anuncios</span>
            <span className='search-iconContainer'>
                <CiSearch className='search-icon'/>
            </span>
        </div>
        
    )
}

export default Search