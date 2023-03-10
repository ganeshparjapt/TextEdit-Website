// import logo from './logo.svg';
import { useState } from "react";

import "./App.css";
import Alet from "./components/Alet";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  }, 2000);
  const classrbodyclass = ()=>{
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }

  const togglemode = (cls) => {
    classrbodyclass();
    document.body.classList.add('bg-'+cls)
    console.log(cls)
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1f1548";
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TestUtiles- Dark";
      console.log("if par run your  cls is = "+ cls)
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = "TestUtiles- Light";
      console.log("else par run your  cls is = "+ cls)

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
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <About /> */}

            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  Heading="Try Text-Editer - Word Counter, Character Counter,Remove Exter spaces"
                  mode={mode}
                />
              }
            >
              {/* <TextForm showAlert={showAlert} Heading="Enter the text here to analyze below" mode={mode}/>  */}
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
