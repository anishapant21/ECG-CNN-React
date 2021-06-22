import React from "react";
import { useState } from "react/cjs/react.development";


const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex]= useState(null);

    const renderedItems = items.map((item, index)=>{
        const active = index === activeIndex? 'active' : '';

        const onTitleClick = (index) => {
            setActiveIndex(index);
    
        };
    
    

        return(<React.Fragment key ={item.title}>
            <div className={`title ${active}`}
            onClick={()=> onTitleClick(index)} >
                <i style={{color:"#F26419", fontSize:"20px"}} className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>

        )
    });
    return (
        <div className="ui styled accordion">
            {renderedItems}
        </div>
    );
};

export default Accordion;
