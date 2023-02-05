import React, { useState } from "react";

export default function About() {
    const[myStyle,setmyStyle]=useState({
  
    color: "white",
    backgroundColor: "black",
  });
  const toggle = ()=>{
    if(myStyle.color == 'white'){
        setmyStyle({
            color:'black',
            backgroundColor:'white'
        })
    }
    else{
        setmyStyle({
            color:'white',
            backgroundColor:'black'
        })
    }
  }
  return (
    <>
    
      <nav
        id="navbar-example2"
        className="navbar bg-body-tertiary px-3 mb-3"
        style={myStyle}
      >
        <a className="navbar-brand" href="/"style={myStyle}>
          Navbar
        </a>
        <ul className="nav nav-pills"style={myStyle}>
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
            <ul className="dropdown-menu"style={myStyle}>
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
        className="scrollspy-example bg-body-tertiary p-3 rounded-2"
        tabindex="0"
        style={myStyle}
      >
        <h4 id="scrollspyHeading1" style={myStyle}>First heading</h4>
        <p>ganesh is good boy</p>
        <h4 id="scrollspyHeading2"style={myStyle}>Second heading</h4>
        <p>...ganesh is good boy</p>
        <h4 id="scrollspyHeading3"style={myStyle}>Third heading</h4>
        <p>...ganesh is good boy</p>
        <h4 id="scrollspyHeading4"style={myStyle}>Fourth heading</h4>
        <p>...ganesh is good boy</p>
        <h4 id="scrollspyHeading5"style={myStyle}>Fifth heading</h4>
        <p>...ganesh is good boy</p>
        <button type="button" class="btn btn-primary"onClick={toggle} style={myStyle}>To dark mode</button>
      </div>
    </>
  );
}
