import React,{useState} from 'react';

export default function TextForm(props) {
  const handelUpClick=()=>{
    console.log("upper case change");
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);

  }

  const [text, setText] = useState('Enter text hear');
  // text="Etner tex hear  " This is rong way for enter text
  // setText("new text is");
  return (
    <div>
        <h1>{props.Heading}</h1>
      <div className="mb-3">
          <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text} onChange={handleOnChange} 
          rows="10">
          
          </textarea>
          <button className="btn btn-primary my-3"onClick={handelUpClick}>Convert upper Case</button>
      </div>
    </div>
  );
}
