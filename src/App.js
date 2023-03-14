import { useState } from "react";

import "./App.css";
import Alet from "./components/Alet";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";


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
  }, 3000);
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
      
        <Navbar
          title="TextEdit"
       
          mode={mode}
          togglemode={togglemode}
        />
        <Alet Alert={alert} />
        <div className="container my-3">
      
      
        

          
            
                <TextForm
                  showAlert={showAlert}
                  Heading="Try Text-Editer - Word Counter, Character Counter,Remove Exter spaces"
                  mode={mode}
                />
              
            
        
        
        </div>
     
    </>
  );
}

export default App;
