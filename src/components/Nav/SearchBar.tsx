import React from 'react'
import {FaSearch} from 'react-icons/fa'
import Search from '@mui/icons-material/Search'
import { IconButton } from '@mui/material';


const SearchBar: React.FC = () => {
    return (
        <div className='searchbar'>
            <input placeholder="Роберт Паттинсон" className='searchbar-input'></input>
            <IconButton>
                <Search className='searchbar-icon'/>
            </IconButton>
            
        </div>
    );
}

export default SearchBar;