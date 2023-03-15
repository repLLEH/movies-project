import React, { useState, useEffect, useRef } from 'react'
import './dropdown.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const DropDown = ({isActive, setIsActive, selected, setSelected, items}: {isActive:boolean, setIsActive:Function, selected: string, setSelected: Function, items:string[]}) => {

    // const[isActive, setIsActive] = useState(false);

    const dismissDropDown = (event: React.FocusEvent<HTMLDivElement>) :void=>{
        if(event.currentTarget === event.target){
            setIsActive(false);
        }
    }

    const activeRef = useRef(null)
    

    window.addEventListener('click',(e) =>{
        if (e.target !== activeRef.current){
            setIsActive(false)
        }
    })



    return (
        <div className='dropdown'>
            <div
            className='dropdown-button' ref={activeRef}
             onClick={e => setIsActive(!isActive)}
             onBlur={(e: React.FocusEvent<HTMLDivElement>):void=> dismissDropDown(e)}>
                 {selected}
                <ArrowDropDownIcon/>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {items.map(item => (
                        <div className="dropdown-item" 
                        onClick={(e) => {
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
export default DropDown;