import React,{useState} from "react";

export default function TextForm(props){
    const [text,setText]=useState("Enter text here");
    let handleclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
let handelchange=(event)=>{
    console.log("On change")
    setText(event.target.value);
}
let handlelowerclick=()=>{
    const lowercasetext=text.toLowerCase();
    setText(lowercasetext);
}
let handleclear=()=>{
    setText("");
} 
    return(
        <>
<div className="container my-4">
  <div className="form-group">
    <h1>Enter your text</h1>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" onChange={handelchange} value={text} style={{backgroundColor: props.mode==='dark'? '#001738': 'white',color:props.mode=== 'dark'?'white': 'black'}} >
    </textarea>
  </div>
  <button className="btn btn-primary my-3 mx-1" onClick={handleclick}>Convert to upper case</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handlelowerclick}>Convert to lower case</button>
  <button className="btn btn-primary my-3 mx-1" onClick={handleclear}>Clear</button>
</div>
<div className="container">
<h1>your text Sumarry</h1>
<p>
    number of words are: {text.split(" ").length} and total letters are {text.length}
</p>
<h3>Preview</h3>
<p>{text.length>0?text:"Enter something to preview here."}</p>
</div>
        </>
    )
}