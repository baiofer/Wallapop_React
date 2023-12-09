import { CiSearch } from 'react-icons/ci'
import './Search.css'
import { useState } from 'react'
import { useAdvert } from '../../pages/adverts/context'

function Search() {

    const [searchText, setSearchText] = useState('')

    const { setNameToSearch } = useAdvert()

    const handleSearch = () => {
        console.log(searchText.searchText)
        setNameToSearch(searchText.searchText)
    }

    const handleChange = (event) => {
        setSearchText( currentSearchText => ({
            ...currentSearchText,
            [event.target.name]: event.target.value
        }))
    }

    return (
        <div className='search'>
            <input 
                className="search-input" 
                name='searchText'
                placeholder="Busca por nombre"
                onChange={handleChange}
            />
            <span 
                className='search-iconContainer'
                onClick={handleSearch}
            >
                <CiSearch className='search-icon'/>
            </span>
        </div>
        
    )
}

export default Search