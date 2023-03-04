import React from "react";
import PropTypes from "prop-types";
import{Link} from"react-router-dom"

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  {props.About}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
            <div className="bg-primary rounded mx-2"onClick={
              ()=>{
                props.togglemode('primary')}
                } 
                
                style={{height:'25px' ,width:'25px', cursor : "pointer"}}></div>
            <div className="bg-danger rounded mx-2"onClick={()=>{props.togglemode('danger')}} style={{height:'25px' ,width:'25px', cursor : "pointer"}}></div>
            <div className="bg-success rounded mx-2"onClick={()=>{props.togglemode('success')}} style={{height:'25px' ,width:'25px', cursor : "pointer"}}></div>
            <div className="bg-warning rounded mx-2"onClick={()=>{props.togglemode('warning')}} style={{height:'25px' ,width:'25px', cursor : "pointer"}}></div>
            <div className="bg-ligth rounded mx-2"onClick={()=>{props.togglemode('light')}} style={{height:'25px' ,width:'25px', cursor : "pointer",border :'solid black'}}></div>
            <div className="bg-dark rounded mx-2"onClick={()=>{props.togglemode('dark')}} style={{height:'25px' ,width:'25px', cursor : "pointer"}}></div>
            </div>
            {/* <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                onClick={props.togglemode}
                
                
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label "
                htmlFor="flexSwitchCheckDefault"
              >
                Enable dark mode
              </label>
            </div> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } `}
            >
            
            </div>
            {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
// Navbar.defaultprops ={
//     title:'set title here',
//     about:'set about here'
// };
