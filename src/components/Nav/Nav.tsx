import React from 'react'
import SearchBar from './SearchBar'


import './Nav.css'
import * as data from "./links.json"
const linksString = JSON.stringify(data)
const links = JSON.parse(linksString).links




type Link ={
    label: string;
    href: string;
};


const Nav: React.FC<{}> = () => {
    return (
        <nav className="navbar">
            <div className='logo-container'>
                <span className='logo'>Кинофильмы</span>
            </div>
            <div className='links-container'>
                {links.map((link: Link) => {
                    return (
                        <div key ={link.href} className="link">
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </div>
                    )
                })}
                {/* <div className='link'>
                    <a href=''/>
                </div> */}

            </div>
            <div className='searchbar-container'>
                <SearchBar/>
            </div>
            <button className='add-button'>+</button>
        </nav>
    );
}

export default Nav;