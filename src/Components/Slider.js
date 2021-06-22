import React from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'

const Slider = () => {
    return (
        <div style={{display:"flex"}}>
            <div style={{color:"#93BEDF",fontSize:"40px", marginLeft:"-20px", position:'absolute', marginTop:"40px"}}>
            <FaChevronLeft />
        </div>
            
            <div style={{marginLeft:"30px", marginTop:"5px"}} className="details">
            <div style={{fontSize:"20px"}} className="name">
                Bajra Ambulance

            </div>
            <div style={{fontSize:"20px"}} className="contact">
                8664467890
            </div>
            <div style={{fontSize:"20px"}} className="location">
             Balaju, Kathmandu
            </div>

            </div>
            <div style={{color:"#93BEDF", fontSize:"40px", position:'absolute', marginTop:"40px", marginLeft:"210px"}}>
            <FaChevronRight />
        </div>
            
        
        
        </div>
    );
}

export default Slider;