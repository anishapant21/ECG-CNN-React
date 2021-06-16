import React from "react";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div style={{ display: "inline-flex" }}>
      <div
        style={{ fontSize: "27px", fontFamily: "Raleway", color: 'black' }}
        className="ui large header"
      >
        ECG Heart Monitoring System
        <div className="logo">
          <i
            style={{ color: "red", fontSize: "30px" }}
            className="fas fa-hand-holding-heart"
          ></i>
          <span style={{ color: "gray", fontSize: "20px" }}>
            {" "}
            In heart, we care
          </span>
        </div>
      </div>
      <div
        style={{
          display: "inline-flex",
          marginLeft: "200px",
          fontSize: "20px",
          wordSpacing: "2px",
        }}
        className="ui secondary menu"
      >
        <a
          style={{
            marginLeft: "0px",
            marginRight: "100px",
            fontFamily: "Exo 2",
            hover:{backgroundColor:'yellow'}
          }}
          className="menu active item"
        >
          Home
        </a>
        <a
          style={{ marginLeft: "100px", marginRight: "100px" }}
          className="menu item"
        >
          About
        </a>
        <a
          style={{ marginLeft: "80px", marginRight: "80px" }}
          className="menu item"
        >
          Contact us
        </a>
      </div>
      <div
        style={{ marginLeft: "200px", marginRight: "2px" }}
        className="menu item"
      >
        <button
          style={{ fontSize: "18px" , marginTop:'5px', marginLeft:'90px'}}
          className="ui red button"
        >
            
          {" "}
          History
        </button>
        <i style={{fontSize:"30px", marginTop:"20px", marginLeft:'20px'}} className="fas fa-sign-out-alt"></i>
        
        
      </div>
    </div>
  );
};

export default Navbar;


