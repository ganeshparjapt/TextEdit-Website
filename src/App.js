// import logo from './logo.svg';
import { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import './App.css';
import Alet from './components/Alet';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {
  const[mode,setmode]= useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =(massage,type) =>{
    setAlert({
      msg: massage,
      type: type
    })
  }
  
 const togglemode=()=>{
  if(mode === 'light'){
   setmode('dark')
   document.body.style.backgroundColor="#1f1548"
   showAlert("Dark mode has been enabled" ,"success")
  }
  else{
    setmode('light')
    document.body.style.backgroundColor="white"
   showAlert("Light mode has been enabled" ,"success")

  }
  }
  return (
    <>
      <Navbar 
      title="TextChange"
       About="About Us"
       mode={mode} togglemode={togglemode}
      />
       <Alet Alert={alert}/> 
      <div className='container my-3' >
      <TextForm  Heading="Enter the text hear to analyze below " mode={mode}/>
      {/* <About/> */}
     
      </div>
    </>
    
  );
}

export default App;
