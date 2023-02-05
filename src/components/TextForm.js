import React,{useState} from 'react';

export default function TextForm(props) {
  const handelUpClick=()=>{
    console.log("upper case change");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handelUpClickToLover=()=>{
    console.log("lover case change");
    let newText = text.toLocaleLowerCase();
    setText(newText)
  }
  const Remove=()=>{
    console.log("Remove press");
   let newText=" ";
   setText(newText)
  }
  const SpaceBetweenOnclick=()=>{
    console.log("space between");
    let newText=text.endsWith();
    setText(newText);
  }


  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);

  }

  const [text, setText] = useState('');
  // text="Etner tex hear  " This is rong way for enter text
  // setText("new text is");
  return (
    <>    <div className='container mx-1'>
        <h1>{props.Heading}</h1>
      <div className="mb-1">
          <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text} onChange={handleOnChange} 
          rows="6">
          
          </textarea>
          <button className="btn btn-primary my-3"onClick={handelUpClick}>Convert upper Case</button>
          <button className="btn btn-primary my-3 mx-3"onClick={handelUpClickToLover}>Convert to Lover case</button>
          <button className="btn btn-primary my-3 mx-3"onClick={Remove}>Clear Text</button>
          <button className="btn btn-primary my-3 mx-3"onClick={SpaceBetweenOnclick}>Space between</button>
          
      </div>
    </div>
    <div className='container'>
      <h2>Your text Summary </h2>
      <p> Count word is :  {text.split(" ").length} and Count charecters : {text.length}</p>
      <p>{0.008*text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>

  );
}
