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