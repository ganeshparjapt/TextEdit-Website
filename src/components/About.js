import React, { useState } from "react";
import{Link} from"react-router-dom"


export default function About(props) {
  let myStyle={
    color:props.mode === 'dark' ? 'white' : 'black',
    backgroundColor:  props.mode === 'dark' ? '#2a224a' : 'white'
  }


  return (
    < >
        
    <div className="container my-5"> 
        <h4 id="scrollspyHeading1"   style={myStyle}>What is a Text Editor?</h4>
        <p   style={myStyle} >A text editor is a simple computer program that allows users to create, change, or edit plain text files. It can be used for creating computer programs, editing the source code of programming languages, </p>
        <h4 id="scrollspyHeading2"  style={myStyle}>Join the Community</h4>
        <p  style={myStyle}>sizes and fonts. The editor displays only the characters visible in the file, while word processors add special formatting characters which are not visible in the document. One that only accepts plain text does not allow the user to format that text or add pictures or tables.y</p>
        <h4 id="scrollspyHeading3"  style={myStyle}>Text editors</h4>
        <p  style={myStyle}>Text editors can generally be placed into one of two distinct categories: line editors and screen oriented editors. Line editors are not used as frequently as screen-oriented editors, and require that the user specify a particular line of text before making any changes. Screen oriented editors,</p>
        </div>
      

    
    </>
  );

}