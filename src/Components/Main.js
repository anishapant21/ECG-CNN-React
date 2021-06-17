import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Chart from './Chart';
import "../css/App.css";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';



const Main =() =>{
    const location= useLocation();
    useEffect(()=>{
        console.log(location.state.detail);
    })
    
    return (
        <div > 
             <Navbar />
             <Chart name={location.state.detail.name} age={location.state.detail.age} email={location.state.detail.email} />
             

        </div>
               

           
    );

};

export default Main;