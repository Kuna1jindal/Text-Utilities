import React, { useState } from 'react'
export default function About() {
    let defaultMode={
        backgroundColor:"white",
        color:"black",
        width:"100%",
        marginBottom:"1rem"
    }
    const[text,setText]=useState("Enable Dark Mode")
    const [style,setStyle]=useState(defaultMode);

    let changemode=()=>{
        if(style.color==="black"){
            setStyle({color:"white",backgroundColor:"black"})
            setText("Enable Light Mode")
        }
        else{
            setStyle({color:"black",backgroundColor:"white"})
            setText("Enable Dark Mode")
        }
    }
    const btnStyle={
        position:"relative",
        left:"5rem"
    }
  return (
    <>
    <div className="card container" style={style}>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-muted" style={{color:"red"}}>Card subtitle</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   
  </div>
</div>
    </>
  )
}
