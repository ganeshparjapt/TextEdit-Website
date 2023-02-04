// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
      <Navbar 
      title="TextUtilesss"
       About="About Us"
      />
      <div className='container my-3' >
      <TextForm  Heading="Enter text here"/>
      </div>
    </>
    
  );
}

export default App;
