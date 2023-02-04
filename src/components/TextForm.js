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
    let remover = text.replace();
    setText(remover)
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
          <button className="btn btn-primary my-3 mx-3"onClick={handelUpClickToLover}>Convert to Lover case</button>
          <button className="btn btn-primary my-3 mx-3"onClick={Remove}>Clear Text</button>
          
      </div>
    </div>
  );
}
