import React from 'react'
import SearchBar from './SearchBar'
import Filters from '../../pages/Filters/Filters'
import {Link} from 'react-router-dom'


import './Nav.css'
import * as data from "./links.json"
import { useNavigate } from 'react-router'
const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links




type MyLink ={
    label: string;
    href: string;
};

// to navigate through pages
// const navigate = useNavigate();

const Nav: React.FC<{}> = () => {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <span className='logo'>Кинофильмы</span>
            </div>
            <div className='links-container'>
                {links.map((link: MyLink) => {
                    return (
                        <div key ={link.href} className="link">
                            <Link to={link.href}>
                                {link.label}
                            </Link>
                        </div>
                    )
                })}

            </div>
            <div className='searchbar-container'>
                <SearchBar/>
            </div>
            <button className='add-button'>+</button>
        </nav>
    );
}

export default Nav;