import React, { useState } from "react"
import PropTypes from 'prop-types'
// import { Link } from "react-router-dom";
export default function Navbar(props){
const [chooseModeText,setModetext]=useState("Enable Dark Mode");
const [colorstate,setcolorstate]=useState("black");
let textcolor={
  color:colorstate
}
let handlemode=()=>{
  if(chooseModeText==="Enable Dark Mode"){
  setModetext("Disable Dark Mode");
  setcolorstate("white");
  textcolor={
    color:colorstate
  }
}
else{
  setModetext("Enable Dark Mode");
  setcolorstate("black");
  textcolor={
    color:colorstate
  }
}
}
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} my-0`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-a active navbar-brand" aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-a" href="/about">About</a>
        </li> */}
      </ul>
     
      <div className="form-check form-switch">
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={textcolor}>{chooseModeText}</label>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={()=>{
  handlemode();
  props.togglemode();
  if(props.mode==="light"){
  props.showAlert("Dark mode is enabled","success");}
}}/>
</div>
    </div>
  </div>
</nav>
        </>
    )
}
Navbar.propTypes={
title: PropTypes.string,
services: PropTypes.string.isRequired //if prop not set by default or by the user then throw an error
}
Navbar.defaultProps={
title: "Set title here",
servies:"Set services here"
}
