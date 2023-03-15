import React, { useState, useRef } from "react";
import './FilterSearchBar.css'



//var items = require(""./filename.json")

const FilterSearchBar = ({isActive, setIsActive, selected, setSelected,logo,items}:{isActive:boolean, setIsActive:Function, selected:string, setSelected:Function, logo:string, items:string[]}) => {
    // const[isActive, setIsActive] = useState(false);

    // for input
    const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
        const regex = /^[0-9\b]+$/;
        if (e.currentTarget.value == "" || regex.test(e.currentTarget.value)){
            setSelected(e.currentTarget.value)
        }
        
    }

    // to hide searched content
    const activeSearchbarRef = useRef(null)
    window.addEventListener('click', (e) => {
        if (e.target !== activeSearchbarRef.current){
            setIsActive(false)
        }
    })



    return (
        <div className="filter-searchbar-box">
            <div className="filter-searchbar" >
            <input type='text' 
            ref={activeSearchbarRef}
            className='filter-searchbar-input' 
            placeholder={logo}
            value={selected} 
            pattern="[0-10]"
            onClick={e => setIsActive(!isActive)} 
            onChange={onChange}
            />
            </div>
            {isActive && (
                <div className='filter-search-dropdown-content'>
                    
                 {items.filter(item =>{
                    const searchItem = selected.toLowerCase();
                    const itemName = item.toLowerCase();

                    return itemName.startsWith(searchItem)
                 })
                 .map(item =>(
                    <div className='filter-search-dropdown-item'
                    onClick = {(e) => {
                        setSelected(item)
                        setIsActive(false)
                    }}>
                        {item}    
                    </div>
                ))}
            </div>
            )}
            
        </div>
    );
}

export default FilterSearchBar;