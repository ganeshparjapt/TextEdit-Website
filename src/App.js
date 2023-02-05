// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar 
      title="TextChange"
       About="About Us"
      />
      <div className='container my-3' >
      {/* <TextForm  Heading="Enter the text hear to analyze below "/> */}
      <About/>
      </div>
    </>
    
  );
}

export default App;
