import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    console.log("upper case change");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelUpClickToLover = () => {
    console.log("lover case change");
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const Remove = () => {
    console.log("Remove press");
    let newText = " ";
    setText(newText);
  };
  const SpaceBetweenOnclick = () => {
    console.log("space between");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text); 
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text="Etner tex hear  " This is rong way for enter text
  // setText("new text is");
  return (
    <>
    
      <div className="container mx-1" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.Heading}</h1>
        <div className="mb-1">
          <textarea
            className="form-control"
            id=" boxs"
            value={text}
            onChange={handleOnChange}
            rows="5"
            style={{backgroundColor:props.mode==='light'?'white':'#1a1924b8',color:props.mode==='light'?'black':'white'}}
          ></textarea>
          <button className="btn btn-primary my-3" onClick={handelUpClick}>
            Convert upper Case
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={handelUpClickToLover}
          >
            Convert to Lover case
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={handelCopy}>
            Copy text
          </button>
          <button className="btn btn-primary my-3 mx-3" onClick={Remove}>
            Clear Text
          </button>
          <button
            className="btn btn-primary my-3 mx-3"
            onClick={SpaceBetweenOnclick}
          >
            Space between
          </button>
        </div>
      </div>
      <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Your text Summary </h2>
        <p>
          {" "}
          Count word is : {text.split(" ").length} and Count charecters :{" "}
          {text.length}
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text: "Enter somthing to preview hear"}</p>
      </div>
    </>
  );
}
