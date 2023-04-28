import ContentSingleItem from "../ContentSingleItem/ContentSingleItem";
import BackToTopButton from "../BackToTopButton/BackToTopButton";
import React from "react";
import './FilterPageContent.css'

const FilterPageContent = ({data,selectedActor}:{data:any[],selectedActor:string}) => {
    console.log('Filter :  ',selectedActor)
    return(
        <div className="content">
            {data.map(item=>(
                item.actors.find((actor: string) =>(actor === selectedActor)) && <div className="content-item">
                    <ContentSingleItem item = {item.title}/>
                </div>
            ))}
            <BackToTopButton/>
        </div>
    );
}
export default FilterPageContent;