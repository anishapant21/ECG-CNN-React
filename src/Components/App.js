import React from 'react';
import Login from './Login';
import Navbar from './Navbar';
import Chart from './Chart';
import Main from './Main';
import "../css/App.css"
import { useState } from 'react/cjs/react.development';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { createBrowserHistory } from 'history'



const App =() =>{

    
    return (
        <Router>
            <div > 
                <Switch>
                <Route path="/main">
                        <Main />
                        </Route>  
                    <Route path="/">
                        <Login />
                        </Route>
                        
                </Switch>
            
        </div>

        </Router>
        
               

           
    );

};

export default App;



//this one works a lil but flickers

// var dps=[];
// var updateInterval=10;
// var dataLength=400;
// var datamin=400;
// var len=dataMe.length;


   
// var updateChart = function(startPoint, endPoint){
    
//     console.log("i am strt", startPoint);
//     console.log("I am end", endPoint)
//     endPoint = endPoint || 1;
//     for (var j=startPoint; j<endPoint; j++){
//         dps.push(dataMe[j]);
//     }
//     if (dps.length > datamin){
//         dps.shift();
//         setDataAll(dps);
//     }
    
//     dataLength++;
// };

// // updateChart(0, dataLength);
// setInterval(function(){
//     updateChart(dataLength, dataLength+1)
// }, updateInterval);
