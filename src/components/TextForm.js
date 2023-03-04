import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    console.log("upper case change");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper cash change success fully", "success")
  };
  const handelUpClickToLover = () => {
    console.log("lover case change");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("converted to Lover case", "success")

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
    props.showAlert("space beetween removed", "success")

  };
  const handelCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copyed", "success")

  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text="Etner tex hear  " This is rong way for enter text
  // setText("new text is");
  return (
    <>
      <div
        className="container mx-1"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>{props.Heading}</h2>
        <div className="mb-1">
          <textarea
            className="form-control"
            id=" boxs"
            value={text}
            onChange={handleOnChange}
            rows="5"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#1a1924b8",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
          <button disabled={text.length === 0} className="btn btn-primary my-1 my-1" onClick={handelUpClick}>
            Convert upper Case
          </button>
          <button
          disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            onClick={handelUpClickToLover}
          >
            Convert to Lover case
          </button>
          <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handelCopy}>
            Copy text
          </button>
          <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={Remove}>
            Clear Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary my-1 mx-1"
            onClick={SpaceBetweenOnclick}
          >
            Space between
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text Summary </h2>
        <p>
          {" "}
          Count word is : {text.split(" ").filter((element)=>{return element.length !== 0. }).length} and Count charecters :{" "}
          {text.length}
        </p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length !== 0. }).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview hear"}</p>
      </div>
    </>
  );
}
