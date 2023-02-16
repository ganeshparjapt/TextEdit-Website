import React, { useState } from "react";
import{Link} from"react-router-dom"


export default function About(props) {
  //   const[myStyle,setmyStyle]=useState({
  
  //   color: "black",
  //   backgroundColor: "white",
    
  // });

  
  // const toggle = ()=>{
  //   if(myStyle.color === 'white'){
  //       setmyStyle({
  //           color:'black',
  //           backgroundColor:'white',
            
  //       })
       
  //   }
  //   else{
  //       setmyStyle({
  //           color:'white',
  //           backgroundColor:'black',
  //           border: '2px solid white'
  //       })
       

  //   }
  // }
  return (
    <>
    <nav className="container mx-3"
       
     
        >
      <nav
        id="navbar-example2"
        className="navbar bg-body-tertiary px-3 mb-3 container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#1a1924b8",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <Link className="navbar-brand" to="/about">
          Navbar
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">
              First
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading2">
              Second
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="/"
              role="button"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#scrollspyHeading3">
                  Third
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading4">
                  Fourth
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#scrollspyHeading5">
                  Fifth
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        data-bs-spy="scroll" 
        data-bs-target="#navbar-example2"
        data-bs-root-margin="0px 0px -40%"
        data-bs-smooth-scroll="true"
        className="scrollspy-example bg-body-tertiary p-3 rounded-2 mx-3 " 
        tabindex="0"
        
      >
        <h4 id="scrollspyHeading1" >First heading</h4>
        <p >ganesh is good boy</p>
        <h4 id="scrollspyHeading2">Second heading</h4>
        <p>...ganesh is good boy</p>
        <h4 id="scrollspyHeading3">Third heading</h4>
        <p>...ganesh is good boy</p>
      
      </div>
      </nav>
    </>
  );

}