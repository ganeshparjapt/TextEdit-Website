// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const[mode,setmode]= useState('light');
 const togglemode=()=>{
  if(mode === 'light'){
   setmode('dark')
   document.body.style.backgroundColor="#1f1548"
  }
  else{
    setmode('light')
    document.body.style.backgroundColor="white"
  }
  }
  return (
    <>
      <Navbar 
      title="TextChange"
       About="About Us"
       mode={mode} togglemode={togglemode}
      />
      <div className='container my-3' >
      <TextForm  Heading="Enter the text hear to analyze below " mode={mode}/>
      {/* <About/> */}
      </div>
    </>
    
  );
}

export default App;
