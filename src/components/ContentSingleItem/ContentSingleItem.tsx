import React from "react";
import './ContentSingleItem.css'

const ContentSingleItem = ({item}:{item:string}) =>{
    return (
        <div className="item">
            {item}
        </div>
    );
}

export default ContentSingleItem;