import React from 'react'
import {FaSearch} from 'react-icons/fa'
import Search from '@mui/icons-material/Search'


const SearchBar: React.FC = () => {
    return (
        <div className='searchbar'>
            <input placeholder="Роберт Паттинсон" className='searchbar-input'></input>
            <Search className='search-icon'/>
        </div>
    );
}

export default SearchBar;