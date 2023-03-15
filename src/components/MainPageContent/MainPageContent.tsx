import React from "react";
import ContentSingleItem from "../ContentSingleItem/ContentSingleItem";
import BackToTopButton from "../BackToTopButton/BackToTopButton";



import './MainPageContent.css';



const MainPageContent = ({data}:{data:string[]}) => {
    return(
        <div className="content">
                {data.map(item=>(
                    <div className="content-item">
                        <ContentSingleItem item = {item}/>
                    </div>
                ))}
                <BackToTopButton/>
        </div>
    );
}

export default MainPageContent;