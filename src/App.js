// import logo from './logo.svg';
import { useState } from "react";

import "./App.css";
import Alet from "./components/Alet";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import {
  BrowserRouter, Route ,Router,Routes
  
} from "react-router-dom";

//function 
//function


function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type,
    });
  };
  setTimeout(() => {
    setAlert(null);
  }, 1000);

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1f1548";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TestUtiles- Dark";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TestUtiles- Light";
    }
  };
  return (
    <>
       <BrowserRouter>
        <Navbar
          title="TextEdit"
          About="About Us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alet Alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          {/* <Route path="/login" caseSensitive={false} element={<Login />} /> */}
          

        <Route exact path='/' element={<TextForm showAlert={showAlert} Heading="Enter the text here to analyze below" mode={mode}/> }>

          </Route>
        </Routes>

        </div>

        </BrowserRouter>
        </>
         
  
  );
}

export default App;
